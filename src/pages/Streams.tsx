import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  Clock, 
  BookOpen, 
  Palette, 
  Megaphone, 
  Code, 
  Video,
  ArrowRight
} from "lucide-react";

const streams = [
  {
    title: "UX / UI Design",
    slug: "ux-ui-design",
    tagline: "From user thinking to interface execution",
    description: "Master the art of creating user-centered digital experiences. Learn to research, design, and prototype interfaces that users love.",
    duration: "12 Months",
    modules: "5 Training Modules",
    careers: ["UX Designer", "UI Designer", "Product Designer"],
    icon: Palette,
    ctaText: "Explore UX/UI Stream",
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    tagline: "From learning campaigns to executing growth",
    description: "Learn to plan, execute, and optimize digital marketing campaigns across multiple channels to drive real business growth.",
    duration: "12 Months",
    modules: "5 Training Modules",
    careers: ["Digital Marketing Executive", "Social Media Manager", "SEO Specialist"],
    icon: Megaphone,
    ctaText: "Explore Digital Marketing Stream",
  },
  {
    title: "Full Stack Development",
    slug: "full-stack-development",
    tagline: "From basics to building working applications",
    description: "Learn to build complete web applications from frontend to backend, databases to deployment.",
    duration: "12 Months",
    modules: "5 Training Modules",
    careers: ["Full Stack Developer", "Frontend Developer", "Backend Developer"],
    icon: Code,
    ctaText: "Explore Full Stack Stream",
  },
  {
    title: "Creative / Video & Design",
    slug: "creative-video-design",
    tagline: "From learning tools to producing real content",
    description: "Master video production, motion graphics, and creative design to produce compelling visual content.",
    duration: "12 Months",
    modules: "5 Training Modules",
    careers: ["Graphic Designer", "Video Editor", "Motion Graphics Artist"],
    icon: Video,
    ctaText: "Explore Creative Stream",
  },
];

const Streams = () => {
  return (
    <Layout>
      {/* Hero / Intro Section */}
      <section className="py-14 lg:py-20 bg-accent">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-accent-foreground">
              Internship-Ready Skill Streams
            </h1>
            <p className="mt-6 text-lg text-accent-foreground/80 leading-relaxed max-w-3xl mx-auto">
              IN10SIP offers focused, project-based skill streams designed to prepare students for internships and real-world work.
            </p>
            <div className="mt-10 bg-accent-foreground/10 rounded-xl p-8 max-w-2xl mx-auto">
              <p className="text-lg font-semibold text-accent-foreground mb-4">
                Each stream includes:
              </p>
              <div className="grid gap-3 sm:grid-cols-2 text-left">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-foreground flex-shrink-0" />
                  <span className="text-accent-foreground">Skill training</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-foreground flex-shrink-0" />
                  <span className="text-accent-foreground">Internship execution</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-foreground flex-shrink-0" />
                  <span className="text-accent-foreground">Portfolio development</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-foreground flex-shrink-0" />
                  <span className="text-accent-foreground">Two certificates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Streams Overview Section */}
      <section className="py-12 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Choose Your Stream
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Each stream is a 12-month journey: 6–7 months of structured training followed by 5–6 months of real internship experience.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            {streams.map((stream) => {
              const IconComponent = stream.icon;
              return (
                <div
                  key={stream.slug}
                  className="bg-card border border-border rounded-xl p-8 flex flex-col hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-7 w-7 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {stream.title}
                      </h3>
                      <p className="text-accent font-medium mt-1">
                        {stream.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {stream.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 text-accent" />
                      <span>{stream.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BookOpen className="h-4 w-4 text-accent" />
                      <span>{stream.modules}</span>
                    </div>
                  </div>

                  {/* Career Paths */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-foreground mb-3">
                      Career paths:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {stream.careers.map((career, index) => (
                        <span
                          key={index}
                          className="bg-accent/10 text-accent text-sm px-3 py-1 rounded-full font-medium"
                        >
                          {career}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto cta-spacing">
                    <Button variant="cta" asChild className="w-full sm:w-auto">
                      <Link to={`/streams/${stream.slug}`} className="flex items-center gap-2">
                        {stream.ctaText}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Ready to choose your stream?
            </h2>
            <p className="mt-6 text-lg opacity-90">
              Start your journey towards internship readiness today.
            </p>
            <div className="cta-spacing">
              <Button variant="cta" size="lg" asChild>
                <Link to="/join">Join IN10SIP</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Streams;
