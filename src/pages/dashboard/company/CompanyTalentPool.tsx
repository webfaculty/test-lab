import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "@/components/DashboardHeader";
import { ArrowLeft, Users, Search, GraduationCap, Award, MapPin, Mail } from "lucide-react";
import { useState } from "react";

const CompanyTalentPool = () => {
  const { profile, signOut } = useAuth();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStream, setSelectedStream] = useState("all");

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  // Placeholder data for talent pool
  const candidates = [
    {
      id: 1,
      name: "Priya Sharma",
      stream: "UX/UI Design",
      institution: "Delhi Technical Institute",
      completionDate: "2025-01",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
      certifications: 2,
      location: "New Delhi",
    },
    {
      id: 2,
      name: "Rahul Verma",
      stream: "Full Stack Development",
      institution: "Mumbai Engineering College",
      completionDate: "2025-02",
      skills: ["React", "Node.js", "PostgreSQL", "TypeScript"],
      certifications: 2,
      location: "Mumbai",
    },
    {
      id: 3,
      name: "Ananya Patel",
      stream: "Digital Marketing",
      institution: "Bangalore Business School",
      completionDate: "2024-12",
      skills: ["SEO", "Google Ads", "Social Media", "Analytics"],
      certifications: 2,
      location: "Bangalore",
    },
    {
      id: 4,
      name: "Vikram Singh",
      stream: "Full Stack Development",
      institution: "Chennai Tech University",
      completionDate: "2025-01",
      skills: ["Python", "Django", "React", "AWS"],
      certifications: 1,
      location: "Chennai",
    },
    {
      id: 5,
      name: "Sneha Reddy",
      stream: "UX/UI Design",
      institution: "Hyderabad Design Academy",
      completionDate: "2025-02",
      skills: ["UI Design", "Interaction Design", "Sketch", "Design Systems"],
      certifications: 2,
      location: "Hyderabad",
    },
  ];

  const filteredCandidates = candidates.filter((candidate) => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStream = selectedStream === "all" || candidate.stream === selectedStream;
    return matchesSearch && matchesStream;
  });

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader 
        displayName={profile?.company_name || profile?.email || "Company"}
        onSignOut={handleSignOut}
      />

      {/* Main Content */}
      <main className="container py-8">
        <Button 
          variant="ghost" 
          className="mb-6"
          onClick={() => navigate("/dashboard/company")}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
            <Users className="h-8 w-8 text-accent" />
            Talent Pool
          </h1>
          <p className="text-muted-foreground mt-2">
            Browse pre-trained candidates ready for internships
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search by name or skills..." 
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={selectedStream} onValueChange={setSelectedStream}>
            <SelectTrigger className="w-full sm:w-[220px]">
              <SelectValue placeholder="Filter by stream" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Streams</SelectItem>
              <SelectItem value="UX/UI Design">UX/UI Design</SelectItem>
              <SelectItem value="Full Stack Development">Full Stack Development</SelectItem>
              <SelectItem value="Digital Marketing">Digital Marketing</SelectItem>
              <SelectItem value="Creative Video Design">Creative Video Design</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Results Count */}
        <p className="text-sm text-muted-foreground mb-4">
          Showing {filteredCandidates.length} candidates
        </p>

        {/* Candidate Cards */}
        <div className="grid gap-4 md:grid-cols-2">
          {filteredCandidates.map((candidate) => (
            <Card key={candidate.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{candidate.name}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <MapPin className="h-3 w-3" />
                      {candidate.location}
                    </p>
                  </div>
                  <Badge className="bg-accent/10 text-accent border-accent/20">
                    {candidate.stream}
                  </Badge>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <GraduationCap className="h-4 w-4" />
                    {candidate.institution}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award className="h-4 w-4" />
                    {candidate.certifications} Certifications Earned
                  </div>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {candidate.skills.slice(0, 4).map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 mt-4 pt-4 border-t">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Profile
                  </Button>
                  <Button size="sm" className="flex-1 gap-1">
                    <Mail className="h-4 w-4" />
                    Contact
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCandidates.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold">No candidates found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default CompanyTalentPool;
