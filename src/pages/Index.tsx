import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, GraduationCap, Briefcase, Building2, Award, Sparkles } from "lucide-react";
import NewsCarousel from "@/components/home/NewsCarousel";

const Index = () => {
  return (
    <Layout>
      {/* NEWS CAROUSEL */}
      <NewsCarousel />
      {/* SECTION 1: HERO SECTION */}
      <section className="relative py-14 lg:py-20 bg-accent">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-accent-foreground leading-tight">
              IN10SIP — Internship Enablement Ecosystem
            </h1>
            <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-accent-foreground/90">
              From Learning to Real-World Capability
            </h2>
            <p className="mt-6 text-lg md:text-xl text-accent-foreground/80 leading-relaxed max-w-3xl mx-auto">
              IN10SIP helps students prepare for internships through structured training and real project exposure — aligned with future industry needs.
              <br className="hidden md:block" />
              We focus on capability building, not placement promises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center cta-spacing">
              <Button variant="cta" size="lg" asChild>
                <Link to="/for-students">
                  Start Your Internship Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/for-companies">
                  For Companies: Declare Internship Needs
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY IN10SIP EXISTS */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Why IN10SIP Exists
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Students complete courses but struggle to apply their skills in real-world environments.
              </p>
              <p>
                Companies need interns — but not unprepared freshers.
              </p>
              <p className="text-foreground font-medium text-xl">
                This gap between learning and real work is the real problem.
              </p>
              <p>
                IN10SIP exists to bridge this gap by enabling students to build capability through training followed by structured internships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW IN10SIP WORKS */}
      <section className="py-12 bg-secondary/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How IN10SIP Works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-background p-6 rounded-xl shadow-sm border border-border">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mb-4 text-accent font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-3">Choose Your Stream</h3>
              <p className="text-muted-foreground text-sm">
                Students register and select a skill stream based on interest and career intent.
              </p>
            </div>
            <div className="bg-background p-6 rounded-xl shadow-sm border border-border">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mb-4 text-accent font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-3">Skill Training</h3>
              <p className="text-muted-foreground text-sm">
                Students undergo structured training delivered by partner institutes to build strong foundations.
              </p>
            </div>
            <div className="bg-background p-6 rounded-xl shadow-sm border border-border">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mb-4 text-accent font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-3">Internship Readiness</h3>
              <p className="text-muted-foreground text-sm">
                Readiness is validated through assignments, learning projects, and mentor review.
              </p>
            </div>
            <div className="bg-background p-6 rounded-xl shadow-sm border border-border">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mb-4 text-accent font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-3">Internship & Capability</h3>
              <p className="text-muted-foreground text-sm">
                Students work as interns on real or guided projects to build capability and portfolio proof.
              </p>
            </div>
          </div>
          <p className="text-center mt-10 text-lg text-muted-foreground font-medium">
            IN10SIP enables internships — not placement guarantees.
          </p>
        </div>
      </section>

      {/* SECTION 4: INTERNSHIP-READY SKILL STREAMS */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Internship-Ready Skill Streams
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-12">
              IN10SIP focuses on high-demand, project-based digital domains:
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <Link
                to="/streams/ux-ui-design"
                className="group bg-secondary/50 hover:bg-secondary p-6 rounded-xl transition-colors border border-transparent hover:border-accent/20"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  UX & UI Design
                </h3>
                <p className="text-muted-foreground text-sm">
                  Design intuitive user experiences and interfaces
                </p>
                <span className="inline-flex items-center text-accent font-medium cta-spacing text-sm">
                  Explore Stream <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
              <Link
                to="/streams/digital-marketing"
                className="group bg-secondary/50 hover:bg-secondary p-6 rounded-xl transition-colors border border-transparent hover:border-accent/20"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  Digital Marketing
                </h3>
                <p className="text-muted-foreground text-sm">
                  Master online marketing strategies and analytics
                </p>
                <span className="inline-flex items-center text-accent font-medium cta-spacing text-sm">
                  Explore Stream <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
              <Link
                to="/streams/full-stack-development"
                className="group bg-secondary/50 hover:bg-secondary p-6 rounded-xl transition-colors border border-transparent hover:border-accent/20"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  Full Stack Development
                </h3>
                <p className="text-muted-foreground text-sm">
                  Build complete web applications from front to back
                </p>
                <span className="inline-flex items-center text-accent font-medium cta-spacing text-sm">
                  Explore Stream <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
              <Link
                to="/streams/creative-video-design"
                className="group bg-secondary/50 hover:bg-secondary p-6 rounded-xl transition-colors border border-transparent hover:border-accent/20"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  Video & Creative Design
                </h3>
                <p className="text-muted-foreground text-sm">
                  Create compelling visual content and videos
                </p>
                <span className="inline-flex items-center text-accent font-medium cta-spacing text-sm">
                  Explore Stream <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </div>
            <p className="text-center mt-10 text-muted-foreground">
              Each stream follows a two-part structure:{" "}
              <span className="text-foreground font-medium">Skill Training → Internship for Capability Building</span>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: TRAINING + INTERNSHIP MODEL */}
      <section className="py-12 bg-secondary/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Training + Internship = Capability
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-background p-8 rounded-xl shadow-sm border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Skill Training</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Core concepts & tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Guided learning projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Mentor support</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Course Completion Certificate</span>
                </li>
              </ul>
            </div>
            <div className="bg-background p-8 rounded-xl shadow-sm border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Internship</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Real or simulated industry projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Structured mentorship</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Capability validation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Internship Completion Certificate</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-center mt-10 text-lg text-foreground font-medium">
            Students graduate with certificates, portfolio, and confidence.
          </p>
        </div>
      </section>

      {/* SECTION 6: FOR STUDENTS */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <GraduationCap className="h-8 w-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-bold">For Students</h2>
            </div>
            <p className="text-center text-lg text-muted-foreground mb-8">
              IN10SIP is designed for students who want more than classroom learning.
            </p>
            <div className="bg-secondary/50 p-8 rounded-xl">
              <p className="font-medium mb-4">You will gain:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">A clear internship readiness path</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Practical exposure through internships</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Strong portfolio (learning + real projects)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Confidence to face real work environments</span>
                </li>
              </ul>
            </div>
            <p className="text-center mt-8 text-muted-foreground italic">
              This platform is for serious learners, not shortcut seekers.
            </p>
            <div className="text-center cta-spacing">
              <Button variant="cta" size="lg" asChild>
                <Link to="/for-students">
                  Start as a Student
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FOR COMPANIES */}
      <section className="py-12 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Briefcase className="h-8 w-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-bold">For Companies</h2>
            </div>
            <p className="text-center text-lg text-muted-foreground mb-8">
              IN10SIP helps companies plan and prepare future intern requirements.
            </p>
            <div className="bg-background p-8 rounded-xl border border-border">
              <p className="font-medium mb-4">Companies can:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Declare future internship needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Define required skill areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Access interns with basic readiness</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Reduce onboarding and training effort</span>
                </li>
              </ul>
            </div>
            <p className="text-center mt-8 text-muted-foreground italic">
              Internships are structured, time-bound, and capability-oriented.
            </p>
            <div className="text-center cta-spacing">
              <Button variant="cta" size="lg" asChild>
                <Link to="/for-companies">
                  Declare Internship Needs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FOR TRAINING INSTITUTES */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Building2 className="h-8 w-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-bold">For Training Institutes</h2>
            </div>
            <p className="text-center text-lg text-muted-foreground mb-8">
              IN10SIP partners with institutes to strengthen outcome-driven education.
            </p>
            <div className="bg-secondary/50 p-8 rounded-xl">
              <p className="font-medium mb-4">Institutes benefit from:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Clear internship pathways for students</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Stronger student credibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Defined readiness benchmarks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Better industry alignment</span>
                </li>
              </ul>
            </div>
            <p className="text-center mt-8 text-muted-foreground italic">
              Institutes act as capability partners, not placement agents.
            </p>
            <div className="text-center cta-spacing">
              <Button variant="cta" size="lg" asChild>
                <Link to="/for-institutes">
                  Partner with IN10SIP
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: CERTIFICATION & OUTCOMES */}
      <section className="py-12 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Award className="h-8 w-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-bold">Meaningful Certification & Outcomes</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              IN10SIP issues certificates only on completion of defined milestones.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-background p-6 rounded-xl border border-border text-center">
                <Award className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-lg">Course Completion Certificate</h3>
                <p className="text-muted-foreground text-sm mt-2">
                  Validates successful completion of skill training
                </p>
              </div>
              <div className="bg-background p-6 rounded-xl border border-border text-center">
                <Award className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-lg">Internship Completion Certificate</h3>
                <p className="text-muted-foreground text-sm mt-2">
                  Validates real-world capability through internship
                </p>
              </div>
            </div>
            <p className="text-muted-foreground">
              These certificates represent verified learning and demonstrated capability, supported by real project portfolios.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 10: BUILT ON REAL EXPERIENCE */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="h-8 w-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-bold">Built on Real Experience</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              IN10SIP is built on years of real-world experience where students were trained, mentored, and converted into capable interns and professionals.
            </p>
            <p className="text-xl font-medium text-foreground">
              This platform systemises what already works.
            </p>
            {/* Space for future student stories or metrics */}
            <div className="mt-12 p-8 border-2 border-dashed border-border rounded-xl">
              <p className="text-muted-foreground italic">
                Student success stories and metrics coming soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: FINAL CTA */}
      <section className="py-12 bg-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Build Real Capability?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              If you are serious about learning, applying, and growing — IN10SIP is your starting point.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center cta-spacing">
              <Button variant="cta" size="lg" asChild>
                <Link to="/for-students">
                  Join as a Student
                </Link>
              </Button>
              <Button variant="cta" size="lg" asChild>
                <Link to="/for-companies">
                  Join as a Company
                </Link>
              </Button>
              <Button variant="cta" size="lg" asChild>
                <Link to="/for-institutes">
                  Partner as an Institute
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
