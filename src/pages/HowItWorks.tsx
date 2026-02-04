import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  Users, 
  Building2, 
  GraduationCap, 
  UserPlus, 
  Layers, 
  BookOpen, 
  ClipboardCheck, 
  Briefcase, 
  FolderOpen,
  FileText,
  MessageSquare,
  Search,
  Handshake,
  Award,
  XCircle,
  Sparkles
} from "lucide-react";

const HowItWorks = () => {
  return (
    <Layout>
      {/* Page Intro Section */}
      <section className="py-14 lg:py-20 bg-accent">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-accent-foreground">
              How It Works
            </h1>
            <p className="mt-8 text-lg text-accent-foreground/80 leading-relaxed">
              IN10SIP is not a job portal and not a placement program.
            </p>
            <p className="mt-4 text-lg text-accent-foreground/80 leading-relaxed">
              It is a structured internship enablement ecosystem designed to help students build real-world capability.
            </p>
            <p className="mt-6 text-lg text-accent-foreground font-medium">
              This page explains exactly how students, companies, and institutes work together inside IN10SIP.
            </p>
          </div>
        </div>
      </section>

      {/* The Core Principle Section */}
      <section className="py-12 bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center">
              Capability Before Employability
            </h2>
            <div className="mt-8 text-center">
              <p className="text-lg text-muted-foreground">
                Most systems focus on getting students hired.
              </p>
              <p className="mt-2 text-lg text-foreground font-medium">
                IN10SIP focuses on getting students ready.
              </p>
            </div>
            <div className="mt-10">
              <p className="text-lg text-muted-foreground text-center mb-6">
                When capability is built properly:
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="bg-card p-6 rounded-lg border border-border text-center">
                  <CheckCircle className="h-8 w-8 text-accent mx-auto mb-3" />
                  <p className="text-foreground font-medium">Internships become meaningful</p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border text-center">
                  <CheckCircle className="h-8 w-8 text-accent mx-auto mb-3" />
                  <p className="text-foreground font-medium">Companies reduce risk</p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border text-center">
                  <CheckCircle className="h-8 w-8 text-accent mx-auto mb-3" />
                  <p className="text-foreground font-medium">Employment becomes a natural outcome</p>
                </div>
              </div>
            </div>
            <p className="mt-8 text-lg text-accent font-semibold text-center">
              IN10SIP is designed around this belief.
            </p>
          </div>
        </div>
      </section>

      {/* The IN10SIP Triangle Section */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center">
              Three Participants. One Structured Flow.
            </h2>
            <p className="mt-8 text-lg text-muted-foreground text-center">
              IN10SIP works through a three-way collaboration:
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="bg-card p-8 rounded-lg border border-border text-center">
                <GraduationCap className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Students</h3>
                <p className="text-muted-foreground">Who want to build capability</p>
              </div>
              <div className="bg-card p-8 rounded-lg border border-border text-center">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Institutes</h3>
                <p className="text-muted-foreground">Who train and prepare students</p>
              </div>
              <div className="bg-card p-8 rounded-lg border border-border text-center">
                <Building2 className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Companies</h3>
                <p className="text-muted-foreground">Who provide internship exposure</p>
              </div>
            </div>
            <p className="mt-8 text-lg text-foreground font-medium text-center">
              Each participant has a clear role and responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Student Flow Section */}
      <section className="py-12 bg-muted">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
                <GraduationCap className="h-5 w-5" />
                <span className="font-semibold">Student Journey</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                From Interest to Capability
              </h2>
            </div>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="bg-card p-6 md:p-8 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <UserPlus className="h-6 w-6 text-accent" />
                      <h3 className="text-xl font-semibold text-foreground">Student Registration</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Students register on IN10SIP and create their profile. At this stage:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        No resumes
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        No placement promises
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Only intent to learn and grow
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-card p-6 md:p-8 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Layers className="h-6 w-6 text-accent" />
                      <h3 className="text-xl font-semibold text-foreground">Choose a Skill Stream</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Students choose one primary stream:
                    </p>
                    <div className="grid gap-2 sm:grid-cols-2">
                      <div className="flex items-center gap-2 text-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        UX / UI Design
                      </div>
                      <div className="flex items-center gap-2 text-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Digital Marketing
                      </div>
                      <div className="flex items-center gap-2 text-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Full Stack Development
                      </div>
                      <div className="flex items-center gap-2 text-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Creative / Video & Design
                      </div>
                    </div>
                    <p className="mt-4 text-accent font-medium">
                      This choice defines their capability path.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-card p-6 md:p-8 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <BookOpen className="h-6 w-6 text-accent" />
                      <h3 className="text-xl font-semibold text-foreground">Skill Training Phase</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Students undergo structured training delivered by partner institutes, focusing on:
                    </p>
                    <div className="grid gap-2 sm:grid-cols-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Fundamentals
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Tools & workflows
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Learning-based projects
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Practice & feedback
                      </div>
                    </div>
                    <div className="mt-4 inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1.5 rounded-md">
                      <Award className="h-4 w-4" />
                      <span className="font-medium">Outcome: Course Completion Certificate</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-card p-6 md:p-8 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <ClipboardCheck className="h-6 w-6 text-accent" />
                      <h3 className="text-xl font-semibold text-foreground">Internship Readiness Validation</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Readiness is assessed through:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Assignments
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Learning projects
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Mentor review
                      </li>
                    </ul>
                    <p className="mt-4 text-accent font-medium">
                      Only students who meet the capability benchmark proceed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-card p-6 md:p-8 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    5
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Briefcase className="h-6 w-6 text-accent" />
                      <h3 className="text-xl font-semibold text-foreground">Internship (Capability Phase)</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Students work on real projects or guided industry-style tasks. Internships are:
                    </p>
                    <div className="grid gap-2 sm:grid-cols-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Structured
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Time-bound
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Learning-oriented
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Mentor-reviewed
                      </div>
                    </div>
                    <div className="mt-4 inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1.5 rounded-md">
                      <Award className="h-4 w-4" />
                      <span className="font-medium">Outcome: Internship Completion Certificate + Portfolio Work</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className="bg-card p-6 md:p-8 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    6
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <FolderOpen className="h-6 w-6 text-accent" />
                      <h3 className="text-xl font-semibold text-foreground">Portfolio & Confidence</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      By the end, students have:
                    </p>
                    <div className="grid gap-2 sm:grid-cols-2">
                      <div className="flex items-center gap-2 text-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Practical experience
                      </div>
                      <div className="flex items-center gap-2 text-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Real project exposure
                      </div>
                      <div className="flex items-center gap-2 text-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Strong portfolio
                      </div>
                      <div className="flex items-center gap-2 text-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Confidence to face real work environments
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                      <p className="text-foreground font-medium">
                        IN10SIP does not guarantee placement.
                      </p>
                      <p className="text-accent font-semibold mt-1">
                        It guarantees preparedness.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Flow Section */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
                <Building2 className="h-5 w-5" />
                <span className="font-semibold">Company Journey</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                From Future Needs to Ready Interns
              </h2>
            </div>

            <div className="space-y-6">
              {/* Company Step 1 */}
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <UserPlus className="h-5 w-5 text-accent" />
                      <h3 className="text-lg font-semibold text-foreground">Company Onboarding</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Companies register and create a profile to plan future needs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Company Step 2 */}
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="h-5 w-5 text-accent" />
                      <h3 className="text-lg font-semibold text-foreground">Declare Internship Requirements</h3>
                    </div>
                    <p className="text-muted-foreground mb-3">Companies declare:</p>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Skill area
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Number of interns
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Basic capability expectations
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Company Step 3 */}
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Search className="h-5 w-5 text-accent" />
                      <h3 className="text-lg font-semibold text-foreground">Access Ready Interns</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Only internship-ready students are shown. No mass applications. No unprepared profiles.
                    </p>
                  </div>
                </div>
              </div>

              {/* Company Step 4 */}
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="h-5 w-5 text-accent" />
                      <h3 className="text-lg font-semibold text-foreground">Internship Execution</h3>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      Companies assign interns to projects, tasks, and learning-oriented responsibilities. Internships remain:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-accent/10 text-accent px-3 py-1 rounded-md text-sm font-medium">Capability-focused</span>
                      <span className="bg-accent/10 text-accent px-3 py-1 rounded-md text-sm font-medium">Low-risk</span>
                      <span className="bg-accent/10 text-accent px-3 py-1 rounded-md text-sm font-medium">Structured</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Step 5 */}
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                    5
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <MessageSquare className="h-5 w-5 text-accent" />
                      <h3 className="text-lg font-semibold text-foreground">Feedback & Closure</h3>
                    </div>
                    <p className="text-muted-foreground mb-2">
                      Companies provide completion confirmation and basic feedback.
                    </p>
                    <p className="text-accent font-medium">
                      No hiring obligation required.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institute Flow Section */}
      <section className="py-12 bg-muted">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
                <Users className="h-5 w-5" />
                <span className="font-semibold">Institute Role</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Capability Partner
              </h2>
            </div>

            <div className="space-y-6">
              {/* Institute Step 1 */}
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Handshake className="h-5 w-5 text-accent" />
                      <h3 className="text-lg font-semibold text-foreground">Institute Partnership</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Institutes partner with IN10SIP to deliver readiness-aligned training. They are not placement agents.
                    </p>
                  </div>
                </div>
              </div>

              {/* Institute Step 2 */}
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <BookOpen className="h-5 w-5 text-accent" />
                      <h3 className="text-lg font-semibold text-foreground">Deliver Skill Training</h3>
                    </div>
                    <p className="text-muted-foreground mb-3">Institutes:</p>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Deliver structured training
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Guide learning projects
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Prepare students for internships
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Institute Step 3 */}
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <ClipboardCheck className="h-5 w-5 text-accent" />
                      <h3 className="text-lg font-semibold text-foreground">Validate Readiness</h3>
                    </div>
                    <p className="text-muted-foreground mb-3">Institutes assess:</p>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Skill understanding
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Project execution
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Learning discipline
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Institute Step 4 */}
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="h-5 w-5 text-accent" />
                      <h3 className="text-lg font-semibold text-foreground">Internship Oversight</h3>
                    </div>
                    <p className="text-muted-foreground mb-3">Institutes support:</p>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Student progress
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Mentor coordination
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Internship completion validation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Institute Step 5 */}
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                    5
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Award className="h-5 w-5 text-accent" />
                      <h3 className="text-lg font-semibold text-foreground">Certification</h3>
                    </div>
                    <p className="text-muted-foreground mb-3">Institutes help issue:</p>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Course Completion Certificates
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Internship Completion Certificates
                      </li>
                    </ul>
                    <p className="mt-3 text-accent font-medium">
                      Certificates represent verified capability, not attendance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What IN10SIP Does Not Do Section */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center">
              Clear Boundaries
            </h2>
            <p className="mt-8 text-lg text-muted-foreground text-center">
              IN10SIP does not:
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-card p-5 rounded-lg border border-border">
                <div className="flex items-center gap-3">
                  <XCircle className="h-6 w-6 text-destructive flex-shrink-0" />
                  <p className="text-foreground">Promise placement</p>
                </div>
              </div>
              <div className="bg-card p-5 rounded-lg border border-border">
                <div className="flex items-center gap-3">
                  <XCircle className="h-6 w-6 text-destructive flex-shrink-0" />
                  <p className="text-foreground">Act as a job portal</p>
                </div>
              </div>
              <div className="bg-card p-5 rounded-lg border border-border">
                <div className="flex items-center gap-3">
                  <XCircle className="h-6 w-6 text-destructive flex-shrink-0" />
                  <p className="text-foreground">Sell shortcuts</p>
                </div>
              </div>
              <div className="bg-card p-5 rounded-lg border border-border">
                <div className="flex items-center gap-3">
                  <XCircle className="h-6 w-6 text-destructive flex-shrink-0" />
                  <p className="text-foreground">Fake experience</p>
                </div>
              </div>
              <div className="bg-card p-5 rounded-lg border border-border md:col-span-2 lg:col-span-2">
                <div className="flex items-center gap-3">
                  <XCircle className="h-6 w-6 text-destructive flex-shrink-0" />
                  <p className="text-foreground">Push unprepared students into companies</p>
                </div>
              </div>
            </div>
            <p className="mt-8 text-lg text-muted-foreground text-center">
              These boundaries protect students, companies, institutes, and long-term trust.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Model Works Section */}
      <section className="py-12 bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center">
              Why IN10SIP Is Different
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <Sparkles className="h-10 w-10 text-accent mx-auto mb-4" />
                <p className="text-foreground font-medium">
                  Students focus on capability, not desperation
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <Sparkles className="h-10 w-10 text-accent mx-auto mb-4" />
                <p className="text-foreground font-medium">
                  Companies receive prepared interns, not risk
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <Sparkles className="h-10 w-10 text-accent mx-auto mb-4" />
                <p className="text-foreground font-medium">
                  Institutes deliver outcomes, not just courses
                </p>
              </div>
            </div>
            <p className="mt-8 text-xl text-accent font-semibold text-center">
              This creates a healthy, scalable ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Ready to Be Part of a Capability-First Ecosystem?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center cta-spacing">
              <Button variant="cta" size="lg" asChild>
                <Link to="/for-students">Start as a Student</Link>
              </Button>
              <Button variant="cta" size="lg" asChild>
                <Link to="/for-companies">Join as a Company</Link>
              </Button>
              <Button variant="cta" size="lg" asChild>
                <Link to="/for-institutes">Partner as an Institute</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
