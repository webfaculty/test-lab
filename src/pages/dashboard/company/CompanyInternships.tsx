import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "@/components/DashboardHeader";
import { ArrowLeft, Briefcase, Plus, Trash2, Users, Calendar, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useInternships, NewInternship } from "@/hooks/useInternships";

const CompanyInternships = () => {
  const { profile, signOut } = useAuth();
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const {
    internships,
    loading,
    createInternship,
    deleteInternship,
    updateInternshipStatus,
    activeListings,
    openPositions,
  } = useInternships();

  const [newInternship, setNewInternship] = useState<NewInternship>({
    title: "",
    stream: "",
    duration: "",
    positions: "",
    description: "",
    requirements: "",
  });

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const handleCreateInternship = async () => {
    const success = await createInternship(newInternship);
    if (success) {
      setNewInternship({
        title: "",
        stream: "",
        duration: "",
        positions: "",
        description: "",
        requirements: "",
      });
      setIsDialogOpen(false);
    }
  };

  const handleDelete = async (id: string) => {
    await deleteInternship(id);
  };

  const handlePublish = async (id: string) => {
    await updateInternshipStatus(id, "active");
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-accent/10 text-accent border-accent/20">Active</Badge>;
      case "draft":
        return <Badge variant="secondary">Draft</Badge>;
      case "closed":
        return <Badge variant="outline">Closed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

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

        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
              <Briefcase className="h-8 w-8 text-accent" />
              Internship Posts
            </h1>
            <p className="text-muted-foreground mt-2">
              Create and manage your internship listings
            </p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Create New Internship
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Create New Internship</DialogTitle>
                <DialogDescription>
                  Fill in the details to create a new internship posting.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Internship Title *</Label>
                  <Input
                    id="title"
                    placeholder="e.g., UX/UI Design Intern"
                    value={newInternship.title}
                    onChange={(e) =>
                      setNewInternship({ ...newInternship, title: e.target.value })
                    }
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="stream">Stream *</Label>
                    <Select
                      value={newInternship.stream}
                      onValueChange={(value) =>
                        setNewInternship({ ...newInternship, stream: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select stream" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ux-ui-design">UX/UI Design</SelectItem>
                        <SelectItem value="full-stack-development">Full Stack Development</SelectItem>
                        <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                        <SelectItem value="creative-video-design">Creative Video Design</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="duration">Duration *</Label>
                    <Select
                      value={newInternship.duration}
                      onValueChange={(value) =>
                        setNewInternship({ ...newInternship, duration: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3-months">3 months</SelectItem>
                        <SelectItem value="4-months">4 months</SelectItem>
                        <SelectItem value="5-months">5 months</SelectItem>
                        <SelectItem value="6-months">6 months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="positions">Number of Positions *</Label>
                  <Input
                    id="positions"
                    type="number"
                    min="1"
                    placeholder="e.g., 3"
                    value={newInternship.positions}
                    onChange={(e) =>
                      setNewInternship({ ...newInternship, positions: e.target.value })
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the internship role, responsibilities, and what interns will learn..."
                    rows={3}
                    value={newInternship.description}
                    onChange={(e) =>
                      setNewInternship({ ...newInternship, description: e.target.value })
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="requirements">Requirements</Label>
                  <Textarea
                    id="requirements"
                    placeholder="List any preferred skills, qualifications, or prerequisites..."
                    rows={2}
                    value={newInternship.requirements}
                    onChange={(e) =>
                      setNewInternship({ ...newInternship, requirements: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="flex justify-end gap-3">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button
                  onClick={handleCreateInternship}
                  disabled={
                    !newInternship.title ||
                    !newInternship.stream ||
                    !newInternship.duration ||
                    !newInternship.positions ||
                    !newInternship.description
                  }
                >
                  Create Internship
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Active Listings</CardDescription>
              <CardTitle className="text-3xl">{activeListings}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Internships</CardDescription>
              <CardTitle className="text-3xl">{internships.length}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Open Positions</CardDescription>
              <CardTitle className="text-3xl">{openPositions}</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Internship Listings */}
        <div className="space-y-4">
          {loading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : internships.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <Briefcase className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">No internships yet</h3>
                <p className="text-muted-foreground mb-4">Create your first internship posting to get started.</p>
              </CardContent>
            </Card>
          ) : (
            internships.map((internship) => (
              <Card key={internship.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-semibold">{internship.title}</h3>
                        {getStatusBadge(internship.status)}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {internship.stream}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {internship.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {internship.positions} positions
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        Created on {new Date(internship.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      {internship.status === "draft" && (
                        <Button variant="outline" size="sm" onClick={() => handlePublish(internship.id)}>
                          Publish
                        </Button>
                      )}
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-destructive hover:text-destructive"
                        onClick={() => handleDelete(internship.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default CompanyInternships;
