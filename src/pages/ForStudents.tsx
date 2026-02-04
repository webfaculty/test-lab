import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  XCircle,
  Target,
  Award,
  Briefcase,
  GraduationCap,
  Users,
  FileCheck,
  Rocket,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

const whoShouldJoin = [
  "Students who want practical exposure, not just certificates",
  "Beginners looking to enter digital & technology fields",
  "Learners willing to invest time and effort",
  "Students who want to build a strong portfolio",
  "Individuals ready to learn, apply, and improve",
];

const whoShouldNotJoin = [
  "Are only looking for a placement guarantee",
  "Want quick results without practice",
  "Are unwilling to commit time and effort",
  "Expect internships without preparation",
  "Want certificates without skill application",
];

const commitments = [
  "Choose one primary skill stream",
  "Complete the full training phase",
  "Actively work on assignments and projects",
  "Accept feedback and improve",
  "Participate in the internship phase seriously",
];

const journeySteps = [
  { step: 1, title: "Register on IN10SIP" },
  { step: 2, title: "Choose your skill stream" },
  { step: 3, title: "Complete structured training" },
  { step: 4, title: "Get validated as internship-ready" },
  { step: 5, title: "Work on real or guided internship projects" },
  { step: 6, title: "Build portfolio and confidence" },
];

const gains = [
  {
    icon: Target,
    title: "Practical skills aligned with real work",
    description: "Learn skills matching current industry requirements.",
  },
  {
    icon: Briefcase,
    title: "Internship experience",
    description: "Hands-on exposure to real workflows, teamwork, and deadlines.",
  },
  {
    icon: Award,
    title: "Two recognized certificates",
    description: "Course Completion Certificate and Internship Completion Certificate.",
  },
  {
    icon: FileCheck,
    title: "Strong portfolio",
    description: "Learning-based and real-world projects that showcase capability.",
  },
  {
    icon: Rocket,
    title: "Confidence for real work environments",
    description: "Be prepared to face professional challenges.",
  },
];

const internshipPoints = [
  "Internships are structured and learning-oriented",
  "They may be paid or unpaid depending on the company",
  "Internship duration and scope are clearly defined",
  "Internship access depends on readiness validation",
];

const successPoints = [
  "You can confidently work on real tasks",
  "You can explain your work and decisions",
  "You have projects that prove your skills",
  "You are no longer \"just a fresher\"",
];

const ForStudents = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-14 lg:py-20 bg-accent">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-accent-foreground">
              For Students
            </h1>
            <div className="mt-8 space-y-4 text-lg text-accent-foreground/80">
              <p>
                IN10SIP is designed for students who are serious about learning,
                practice, and real-world exposure.
              </p>
              <p className="font-medium text-accent-foreground">
                This is not a shortcut to a job.
              </p>
              <p>
                It is a structured journey to build capability through training
                and internships.
              </p>
            </div>
            <Button variant="cta" size="lg" asChild className="cta-spacing">
              <Link to="/join">Join as Student</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Who Should Join Section */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Who IN10SIP Is For
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              IN10SIP is ideal for:
            </p>
            <div className="grid gap-4">
              {whoShouldJoin.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-accent/10 rounded-lg border border-accent/20"
                >
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-lg font-medium text-foreground mt-8">
              If you want to become capable, IN10SIP is for you.
            </p>
          </div>
        </div>
      </section>

      {/* Who Should NOT Join Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Who IN10SIP Is NOT For
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              IN10SIP may not be right if you:
            </p>
            <div className="grid gap-4">
              {whoShouldNotJoin.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-destructive/5 rounded-lg border border-destructive/20"
                >
                  <XCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-8 italic">
              This clarity protects both students and companies.
            </p>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Your Commitment as a Student
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              By joining IN10SIP, you agree to:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {commitments.map((item, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6 flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-accent font-semibold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-foreground text-sm">{item}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-lg font-medium text-foreground mt-8">
              This commitment is what converts learning into capability.
            </p>
          </div>
        </div>
      </section>

      {/* Student Journey Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Your IN10SIP Journey
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {journeySteps.map((item) => (
                <div
                  key={item.step}
                  className="relative bg-background p-6 rounded-xl border border-border shadow-sm"
                >
                  <div className="absolute -top-3 -left-3 h-10 w-10 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-accent-foreground font-bold">
                      {item.step}
                    </span>
                  </div>
                  <p className="text-foreground font-medium mt-4">{item.title}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-8 italic">
              Each step matters. Skipping steps weakens outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* What You Will Gain Section */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              What You Gain from IN10SIP
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              By completing the journey, you gain:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gains.map((gain, index) => (
                <Card key={index} className="border-border hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                      <gain.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {gain.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {gain.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-lg font-medium text-foreground mt-10">
              These outcomes stay with you beyond IN10SIP.
            </p>
          </div>
        </div>
      </section>

      {/* About Internships Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              About Internships on IN10SIP
            </h2>
            <div className="grid gap-4 mb-8">
              {internshipPoints.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border"
                >
                  <Briefcase className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 text-center">
              <p className="text-foreground font-medium">
                IN10SIP does not force internships.
              </p>
              <p className="text-accent font-semibold mt-2">
                Internships are earned through preparation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Guidance Section */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
              <Target className="h-4 w-4" />
              <span className="text-sm font-medium">Career Support</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Placement Guidance & Assistance
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              IN10SIP focuses on making you job-ready through capability building.
            </p>
            <div className="bg-secondary/50 rounded-xl p-8">
              <h3 className="font-semibold text-foreground mb-4">What We Provide:</h3>
              <ul className="space-y-3 text-left max-w-md mx-auto">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Structured training aligned with industry needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Real internship experience with companies</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Portfolio development to showcase your skills</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 p-6 border-2 border-accent rounded-xl">
              <p className="text-foreground">
                <span className="font-semibold">Our Promise:</span>{" "}
                IN10SIP ensures you are ready and confident for opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Success Looks Like Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              What Success Looks Like
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Success on IN10SIP means:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {successPoints.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 bg-background rounded-xl border border-border"
                >
                  <GraduationCap className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-lg font-semibold text-accent mt-10">
              Success is capability, not just opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Are You Ready to Commit?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-2">
              If you are ready to learn, practice, and grow —
            </p>
            <p className="text-lg text-primary-foreground/80">
              IN10SIP is the right place to begin.
            </p>
            <Button variant="cta" size="lg" asChild className="cta-spacing">
              <Link to="/join">Start Your Internship Journey</Link>
            </Button>
            <p className="mt-4 text-sm text-primary-foreground/60">
              Your stream selection will reflect in your student panel after enrollment.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ForStudents;
