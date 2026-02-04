import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Building2, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Page Intro Section */}
      <section className="py-14 lg:py-20 bg-accent">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-accent-foreground">
              About IN10SIP
            </h1>
            <p className="mt-6 text-xl md:text-2xl font-semibold text-accent-foreground/90">
              Build Capability. Create Careers. Strengthen Ecosystems.
            </p>
            <p className="mt-6 text-lg text-accent-foreground/80 leading-relaxed max-w-3xl mx-auto">
              IN10SIP connects students, institutions, and companies through real work, real learning, and real outcomes.
            </p>
            <p className="mt-4 text-lg text-accent-foreground/80 leading-relaxed max-w-3xl mx-auto">
              We enable capability-first learning where internships are earned, skills are applied, and careers are built on performance — not promises.
            </p>
            <p className="mt-6 text-xl font-semibold text-accent-foreground">
              👉 Learn. Apply. Perform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center cta-spacing">
              <Button variant="cta" size="lg" asChild>
                <Link to="/for-students">For Students</Link>
              </Button>
              <Button variant="cta" size="lg" asChild>
                <Link to="/for-institutes">For Institutions</Link>
              </Button>
              <Button variant="cta" size="lg" asChild>
                <Link to="/for-companies">For Companies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why IN10SIP Section */}
      <section className="py-12 bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center">
              A Shared Solution for All
            </h2>
            <p className="mt-8 text-lg text-muted-foreground text-center">
              Over years of experience, we've learned that:
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="h-8 w-8 text-accent" />
                  <h3 className="font-semibold text-foreground">For Students</h3>
                </div>
                <p className="text-muted-foreground">
                  Internships before jobs work for students
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="h-8 w-8 text-accent" />
                  <h3 className="font-semibold text-foreground">For Employers</h3>
                </div>
                <p className="text-muted-foreground">
                  Capability matters more than certificates for employers
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-8 w-8 text-accent" />
                  <h3 className="font-semibold text-foreground">For Institutions</h3>
                </div>
                <p className="text-muted-foreground">
                  Practical outcomes matter more than theory for institutions
                </p>
              </div>
            </div>
            <p className="mt-8 text-lg text-muted-foreground text-center">
              IN10SIP systemises this approach into a scalable model that benefits everyone involved.
            </p>
          </div>
        </div>
      </section>

      {/* The IN10SIP Ecosystem Section */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center">
              How IN10SIP Works
            </h2>
            <p className="mt-8 text-lg text-muted-foreground text-center">
              IN10SIP brings together:
            </p>
            <ul className="mt-8 space-y-4 max-w-2xl mx-auto">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-lg text-foreground">Students who want real experience</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-lg text-foreground">Institutions that want stronger outcomes</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-lg text-foreground">Companies that need skilled, reliable talent</span>
              </li>
            </ul>
            <p className="mt-8 text-lg text-muted-foreground text-center">
              Through structured training, practical assignments, and earned internships, learners grow by doing real work in real environments.
            </p>
          </div>
        </div>
      </section>

      {/* What IN10SIP Believes Section */}
      <section className="py-12 bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center">
              Our Core Principles
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-foreground">Capability comes before employability</p>
                </div>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-foreground">Internships should be earned, not handed out</p>
                </div>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-foreground">Training without application is incomplete</p>
                </div>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-foreground">No placement promises build long-term trust</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Building Trust Through Performance
            </h2>
            <p className="mt-8 text-lg text-muted-foreground">
              IN10SIP is a readiness system.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              We create ready professionals, strong institutions, and reliable talent pipelines.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Our focus is long-term value — for students, institutions, and companies alike.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Join the IN10SIP Ecosystem
            </h2>
            <p className="mt-6 text-lg opacity-90">
              IN10SIP is built for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center cta-spacing">
              <Button variant="cta" size="lg" asChild>
                <Link to="/for-students">For Students</Link>
              </Button>
              <Button variant="cta" size="lg" asChild>
                <Link to="/for-companies">For Companies</Link>
              </Button>
              <Button variant="cta" size="lg" asChild>
                <Link to="/for-institutes">For Institutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
