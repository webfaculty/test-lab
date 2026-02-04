import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  XCircle,
  Building2,
  ClipboardCheck,
  UserCheck,
  Briefcase,
  MessageSquare,
  Shield,
  Target,
  TrendingUp,
  Clock,
  Search,
  Award,
  Heart,
  ArrowRight,
} from "lucide-react";

const problemPoints = [
  "Interns lack basic skills",
  "Excessive training time is required",
  "Expectations are unclear",
  "Internships become unproductive",
];

const solutionPoints = [
  "Students are trained before internships",
  "Readiness is validated by institutes",
  "Internships are structured and time-bound",
  "Interns focus on learning and contribution",
];

const journeySteps = [
  {
    step: 1,
    title: "Company Registration",
    icon: Building2,
    description: "Create a company profile on IN10SIP. This is not a hiring portal — it is a planning and enablement system.",
  },
  {
    step: 2,
    title: "Declare Future Internship Needs",
    icon: ClipboardCheck,
    description: "Declare skill area (UX, Digital Marketing, Full Stack, Creative, etc.), expected number of interns, and basic capability expectations. This helps align training and readiness.",
  },
  {
    step: 3,
    title: "Access Internship-Ready Students",
    icon: UserCheck,
    description: "Companies are shown only students who are validated as internship-ready. No mass applications. No unprepared profiles.",
  },
  {
    step: 4,
    title: "Internship Execution",
    icon: Briefcase,
    description: "Internships are structured, learning-oriented, and capability-focused. Companies may assign projects, tasks, and mentors (if available).",
  },
  {
    step: 5,
    title: "Feedback & Closure",
    icon: MessageSquare,
    description: "At internship completion, companies provide completion confirmation and basic feedback. There is no obligation to hire.",
  },
];

const benefits = [
  {
    icon: UserCheck,
    title: "Access to prepared interns",
  },
  {
    icon: Clock,
    title: "Reduced onboarding effort",
  },
  {
    icon: Shield,
    title: "Lower internship risk",
  },
  {
    icon: Search,
    title: "Opportunity to evaluate talent before hiring",
  },
  {
    icon: TrendingUp,
    title: "Support in building a talent pipeline",
  },
];

const hiringPoints = [
  "Hire only if it makes sense",
  "Extend internship if needed",
  "Offer employment independently",
];

const ethicsPoints = [
  { icon: Target, text: "Clear internship scope" },
  { icon: Award, text: "Learning objectives" },
  { icon: Clock, text: "Defined timelines" },
  { icon: Heart, text: "Ethical treatment of interns" },
];

const trustPoints = [
  "Students are trained by partner institutes",
  "Readiness is validated before internships",
  "Internships follow defined structures",
  "The system is built on real-world experience",
];

const ForCompanies = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-14 lg:py-20 bg-accent">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-accent-foreground">
              For Companies
            </h1>
            <div className="mt-8 space-y-4 text-lg text-accent-foreground/80">
              <p>
                Hiring fresh interns is risky.
              </p>
              <p className="font-medium text-accent-foreground">
                Unprepared interns slow teams down instead of supporting them.
              </p>
              <p>
                IN10SIP helps companies access interns who are already trained on
                the basics and prepared for real-world work — without pressure to hire.
              </p>
            </div>
            <Button variant="cta" size="lg" asChild className="cta-spacing">
              <Link to="/join">Join as Company</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Why Internships Often Fail
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Most companies struggle with internships because:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {problemPoints.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 bg-destructive/5 rounded-lg border border-destructive/20"
                >
                  <XCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8 italic">
              This creates frustration on both sides.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              How IN10SIP Solves This
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              IN10SIP changes how internships are approached. We ensure:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {solutionPoints.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 bg-accent/10 rounded-lg border border-accent/20"
                >
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-lg font-medium text-foreground mt-8">
              This reduces risk and improves outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Company Journey Section */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Company Journey on IN10SIP
            </h2>
            <div className="space-y-6">
              {journeySteps.map((item) => (
                <Card key={item.step} className="border-border overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="bg-accent/20 p-6 flex items-center justify-center md:w-48 flex-shrink-0">
                        <div className="flex flex-col items-center gap-2">
                          <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center">
                            <item.icon className="h-6 w-6 text-accent-foreground" />
                          </div>
                          <span className="text-sm font-semibold text-accent">
                            Step {item.step}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Benefits for Companies
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              By participating in IN10SIP, companies gain:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-border hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="h-14 w-14 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-7 w-7 text-accent" />
                    </div>
                    <p className="font-medium text-foreground">{benefit.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Section */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Hiring Is Optional
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              IN10SIP does not push companies to hire.
            </p>
            <div className="inline-flex flex-col gap-4 text-left">
              {hiringPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <ArrowRight className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{point}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-8 italic">
              IN10SIP remains neutral and non-intrusive.
            </p>
          </div>
        </div>
      </section>

      {/* Ethics Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Responsible Internships
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              IN10SIP encourages:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ethicsPoints.map((item, index) => (
                <div
                  key={index}
                  className="bg-background p-6 rounded-xl border border-border text-center"
                >
                  <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <p className="font-medium text-foreground text-sm">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8 italic">
              This protects both companies and students.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Why You Can Trust IN10SIP
            </h2>
            <div className="grid gap-4">
              {trustPoints.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 bg-accent/10 rounded-lg border border-accent/20"
                >
                  <Shield className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-lg font-medium text-accent mt-10">
              IN10SIP exists to make internships work, not complicate them.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Plan Your Future Internship Needs
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-2">
              If your company wants interns who are prepared and motivated,
            </p>
            <p className="text-lg text-primary-foreground/80">
              IN10SIP can support your goals.
            </p>
            <Button variant="cta" size="lg" asChild className="cta-spacing">
              <Link to="/join">Declare Internship Needs</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ForCompanies;
