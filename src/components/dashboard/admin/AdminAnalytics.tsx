import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, Legend, AreaChart, Area
} from "recharts";
import { Users, GraduationCap, Building2, School, TrendingUp, Award, Briefcase, Loader2 } from "lucide-react";
import { format, subMonths, startOfMonth, endOfMonth } from "date-fns";

interface AnalyticsData {
  users: {
    total: number;
    students: number;
    companies: number;
    institutes: number;
  };
  enrollments: {
    total: number;
    pending_payment: number;
    pending_approval: number;
    active: number;
    completed: number;
    cancelled: number;
  };
  enrollmentsByStream: Array<{ name: string; count: number }>;
  monthlyEnrollments: Array<{ month: string; enrollments: number; completions: number }>;
  internshipStats: {
    total: number;
    active: number;
    applications: number;
    completed: number;
  };
  certificates: {
    total: number;
    training: number;
    internship: number;
  };
}

const COLORS = ["hsl(var(--accent))", "hsl(var(--primary))", "hsl(var(--secondary))", "#10b981", "#f59e0b", "#ef4444"];

const STREAM_LABELS: Record<string, string> = {
  "ux-ui-design": "UX/UI Design",
  "full-stack-development": "Full Stack Dev",
  "digital-marketing": "Digital Marketing",
  "creative-video-design": "Creative Video",
};

const AdminAnalytics = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<AnalyticsData | null>(null);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      // Fetch all data in parallel
      const [
        profilesRes,
        enrollmentsRes,
        internshipsRes,
        applicationsRes,
        certificatesRes,
      ] = await Promise.all([
        supabase.from("profiles").select("user_type, created_at"),
        supabase.from("enrollments").select("status, stream, enrolled_at, completed_at"),
        supabase.from("internships").select("status"),
        supabase.from("internship_applications").select("status"),
        supabase.from("certificates").select("certificate_type"),
      ]);

      const profiles = profilesRes.data || [];
      const enrollments = enrollmentsRes.data || [];
      const internships = internshipsRes.data || [];
      const applications = applicationsRes.data || [];
      const certificates = certificatesRes.data || [];

      // Calculate user stats
      const users = {
        total: profiles.length,
        students: profiles.filter(p => p.user_type === "student").length,
        companies: profiles.filter(p => p.user_type === "company").length,
        institutes: profiles.filter(p => p.user_type === "institute").length,
      };

      // Calculate enrollment stats
      const enrollmentStats = {
        total: enrollments.length,
        pending_payment: enrollments.filter(e => e.status === "pending_payment").length,
        pending_approval: enrollments.filter(e => e.status === "pending_approval").length,
        active: enrollments.filter(e => e.status === "active").length,
        completed: enrollments.filter(e => e.status === "completed").length,
        cancelled: enrollments.filter(e => e.status === "cancelled").length,
      };

      // Calculate enrollments by stream
      const streamCounts: Record<string, number> = {};
      enrollments.forEach(e => {
        streamCounts[e.stream] = (streamCounts[e.stream] || 0) + 1;
      });
      const enrollmentsByStream = Object.entries(streamCounts).map(([name, count]) => ({
        name: STREAM_LABELS[name] || name,
        count,
      }));

      // Calculate monthly enrollment trends (last 6 months)
      const monthlyEnrollments = [];
      for (let i = 5; i >= 0; i--) {
        const date = subMonths(new Date(), i);
        const monthStart = startOfMonth(date);
        const monthEnd = endOfMonth(date);
        
        const monthEnrollments = enrollments.filter(e => {
          const enrolledDate = new Date(e.enrolled_at);
          return enrolledDate >= monthStart && enrolledDate <= monthEnd;
        }).length;

        const monthCompletions = enrollments.filter(e => {
          if (!e.completed_at) return false;
          const completedDate = new Date(e.completed_at);
          return completedDate >= monthStart && completedDate <= monthEnd;
        }).length;

        monthlyEnrollments.push({
          month: format(date, "MMM"),
          enrollments: monthEnrollments,
          completions: monthCompletions,
        });
      }

      // Calculate internship stats
      const internshipStats = {
        total: internships.length,
        active: internships.filter(i => i.status === "active").length,
        applications: applications.length,
        completed: applications.filter(a => a.status === "completed").length,
      };

      // Calculate certificate stats
      const certificateStats = {
        total: certificates.length,
        training: certificates.filter(c => c.certificate_type === "training_completion").length,
        internship: certificates.filter(c => c.certificate_type === "internship_completion").length,
      };

      setData({
        users,
        enrollments: enrollmentStats,
        enrollmentsByStream,
        monthlyEnrollments,
        internshipStats,
        certificates: certificateStats,
      });
    } catch (error) {
      console.error("Error fetching analytics:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        Failed to load analytics data
      </div>
    );
  }

  const userDistribution = [
    { name: "Students", value: data.users.students, color: COLORS[0] },
    { name: "Companies", value: data.users.companies, color: COLORS[1] },
    { name: "Institutes", value: data.users.institutes, color: COLORS[2] },
  ];

  const enrollmentStatus = [
    { name: "Active", value: data.enrollments.active, color: "#10b981" },
    { name: "Pending Payment", value: data.enrollments.pending_payment, color: "#f59e0b" },
    { name: "Pending Approval", value: data.enrollments.pending_approval, color: "#3b82f6" },
    { name: "Completed", value: data.enrollments.completed, color: "#8b5cf6" },
    { name: "Cancelled", value: data.enrollments.cancelled, color: "#ef4444" },
  ].filter(item => item.value > 0);

  return (
    <div className="space-y-8">
      {/* Overview Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardDescription>Total Users</CardDescription>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{data.users.total}</div>
            <p className="text-xs text-muted-foreground">
              {data.users.students} students, {data.users.companies} companies
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardDescription>Total Enrollments</CardDescription>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{data.enrollments.total}</div>
            <p className="text-xs text-muted-foreground">
              {data.enrollments.active} active, {data.enrollments.completed} completed
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardDescription>Internship Applications</CardDescription>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{data.internshipStats.applications}</div>
            <p className="text-xs text-muted-foreground">
              {data.internshipStats.active} active internships
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardDescription>Certificates Issued</CardDescription>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{data.certificates.total}</div>
            <p className="text-xs text-muted-foreground">
              {data.certificates.training} training, {data.certificates.internship} internship
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="enrollments" className="space-y-4">
        <TabsList>
          <TabsTrigger value="enrollments">Enrollments</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="streams">Skill Streams</TabsTrigger>
        </TabsList>

        {/* Enrollments Tab */}
        <TabsContent value="enrollments" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {/* Monthly Trends */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Enrollment Trends
                </CardTitle>
                <CardDescription>Last 6 months activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data.monthlyEnrollments}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="month" className="text-xs" />
                      <YAxis className="text-xs" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "hsl(var(--card))", 
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px"
                        }} 
                      />
                      <Legend />
                      <Area
                        type="monotone"
                        dataKey="enrollments"
                        name="New Enrollments"
                        stroke="hsl(var(--accent))"
                        fill="hsl(var(--accent))"
                        fillOpacity={0.3}
                      />
                      <Area
                        type="monotone"
                        dataKey="completions"
                        name="Completions"
                        stroke="#10b981"
                        fill="#10b981"
                        fillOpacity={0.3}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Enrollment Status */}
            <Card>
              <CardHeader>
                <CardTitle>Enrollment Status</CardTitle>
                <CardDescription>Current status breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={enrollmentStatus}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={2}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        labelLine={false}
                      >
                        {enrollmentStatus.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Users Tab */}
        <TabsContent value="users" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>User Distribution</CardTitle>
                <CardDescription>Breakdown by user type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={userDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={2}
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}`}
                      >
                        {userDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>User Summary</CardTitle>
                <CardDescription>Detailed user counts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-accent/5 border">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-8 w-8 text-accent" />
                    <div>
                      <p className="font-medium">Students</p>
                      <p className="text-sm text-muted-foreground">Registered learners</p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold">{data.users.students}</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-primary/5 border">
                  <div className="flex items-center gap-3">
                    <Building2 className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-medium">Companies</p>
                      <p className="text-sm text-muted-foreground">Hiring partners</p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold">{data.users.companies}</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/20 border">
                  <div className="flex items-center gap-3">
                    <School className="h-8 w-8 text-secondary-foreground" />
                    <div>
                      <p className="font-medium">Institutes</p>
                      <p className="text-sm text-muted-foreground">Training partners</p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold">{data.users.institutes}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Skill Streams Tab */}
        <TabsContent value="streams" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Enrollments by Skill Stream</CardTitle>
              <CardDescription>Distribution across training programs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data.enrollmentsByStream} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis type="number" className="text-xs" />
                    <YAxis dataKey="name" type="category" width={120} className="text-xs" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px"
                      }}
                    />
                    <Bar dataKey="count" name="Enrollments" fill="hsl(var(--accent))" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminAnalytics;
