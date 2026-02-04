import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  XCircle,
  GraduationCap,
  Users,
  Target,
  Award,
  Handshake,
  BookOpen,
  TrendingUp,
  Shield,
  Building,
  Heart,
  Lightbulb,
  FileCheck,
  ArrowRight,
} from "lucide-react";

const challengePoints = [
  "Students asking only about placement",
  "Difficulty proving real-world readiness",
  "Limited industry exposure for students",
  "Training outcomes not fully visible to companies",
];

const instituteRolePoints = [
  "The primary training authority",
  "The capability builder",
  "The readiness validator",
];

const ecosystemRolePoints = [
  { icon: BookOpen, text: "Deliver structured skill training" },
  { icon: Lightbulb, text: "Guide learning-based projects" },
  { icon: Target, text: "Prepare students for internship readiness" },
  { icon: FileCheck, text: "Validate basic capability benchmarks" },
  { icon: Award, text: "Support internship completion" },
];

const benefits = [
  {
    icon: ArrowRight,
    title: "Clear internship pathways for students",
  },
  {
    icon: TrendingUp,
    title: "Stronger student confidence and outcomes",
  },
  {
    icon: Handshake,
    title: "Better alignment with industry needs",
  },
  {
    icon: Building,
    title: "Improved credibility with companies",
  },
  {
    icon: Shield,
    title: "Reduced pressure to promise placement",
  },
];

const alignmentPoints = [
  "Align training outcomes with internship readiness",
  "Share industry expectation signals",
  "Respect institute curriculum autonomy",
  "Support outcome-based education",
];

const certificateTypes = [
  "Course Completion Certificates",
  "Internship Completion Certificates",
];

const certificateRepresents = [
  "Verified learning",
  "Demonstrated capability",
  "Practical exposure",
];

const visionPoints = [
  "A trusted internship ecosystem",
  "Stronger institute–industry collaboration",
  "Capability-first education culture",
];

const idealPartnerPoints = [
  "Value real-world capability",
  "Are outcome-focused",
  "Want to reduce placement pressure",
  "Believe in structured internships",
  "Want to build long-term credibility",
];

const ForInstitutes = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-14 lg:py-20 bg-accent">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-accent-foreground">
              For Training Institutes
            </h1>
            <div className="mt-8 space-y-4 text-lg text-accent-foreground/80">
              <p>
                IN10SIP partners with training institutes to bridge the gap
                between learning and real-world work.
              </p>
              <p>
                We believe institutes play a critical role in building capability —
              </p>
              <p className="font-medium text-accent-foreground">
                IN10SIP exists to extend that impact through structured internships.
              </p>
            </div>
            <Button variant="cta" size="lg" asChild className="cta-spacing">
              <Link to="/join">Join as Institute</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              The Challenge Institutes Face Today
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Most institutes deliver quality training, yet face challenges such as:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {challengePoints.map((item, index) => (
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
              These challenges are systemic — not a failure of institutes.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Approach Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              How IN10SIP Partners with Institutes
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-8">
              IN10SIP does not compete with institutes.
              <br />
              <span className="font-medium text-foreground">
                It complements and strengthens existing training models.
              </span>
            </p>
            <div className="bg-background rounded-xl border border-border p-8">
              <p className="text-center text-muted-foreground mb-6">
                Institutes remain:
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                {instituteRolePoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-accent/10 px-5 py-3 rounded-full"
                  >
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium text-sm">{point}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-accent font-semibold mt-8">
                IN10SIP adds the internship enablement layer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Institute Role Section */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Institute Role in the IN10SIP Ecosystem
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Partner institutes:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ecosystemRolePoints.map((item, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-foreground font-medium">{item.text}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-lg font-medium text-foreground mt-10">
              Institutes act as capability partners, not placement agents.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Benefits for Institutes
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              By partnering with IN10SIP, institutes gain:
            </p>
            <div className="grid gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 bg-accent/10 rounded-lg border border-accent/20"
                >
                  <benefit.icon className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{benefit.title}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8 italic">
              This allows institutes to focus on quality training, not marketing promises.
            </p>
          </div>
        </div>
      </section>

      {/* Alignment Section */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Aligned, Not Disrupted
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              IN10SIP does not dictate how institutes teach.
              <br />
              Instead, we:
            </p>
            <div className="inline-flex flex-col gap-4 text-left">
              {alignmentPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{point}</span>
                </div>
              ))}
            </div>
            <p className="text-lg font-semibold text-accent mt-10">
              Your training remains your identity.
            </p>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Meaningful Certification
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background rounded-xl border border-border p-8">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent" />
                  Partner institutes support:
                </h3>
                <ul className="space-y-3">
                  {certificateTypes.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <FileCheck className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-background rounded-xl border border-border p-8">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-accent" />
                  Certificates represent:
                </h3>
                <ul className="space-y-3">
                  {certificateRepresents.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-center text-lg font-medium text-foreground mt-10">
              This strengthens the value of your training programs.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              A Shared Ecosystem Vision
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              IN10SIP aims to build:
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {visionPoints.map((point, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6 text-center">
                    <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-6 w-6 text-accent" />
                    </div>
                    <p className="font-medium text-foreground">{point}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-lg font-semibold text-accent mt-10">
              Institutes are core partners in this journey.
            </p>
          </div>
        </div>
      </section>

      {/* Ideal Partner Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Is IN10SIP Right for Your Institute?
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              IN10SIP is ideal for institutes that:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {idealPartnerPoints.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-background p-5 rounded-xl border border-border"
                >
                  <GraduationCap className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Partner with IN10SIP
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-2">
              If your institute is committed to building capable, confident students,
            </p>
            <p className="text-lg text-primary-foreground/80">
              IN10SIP welcomes you as a partner.
            </p>
            <Button variant="cta" size="lg" asChild className="cta-spacing">
              <Link to="/join">Become an IN10SIP Partner Institute</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ForInstitutes;
