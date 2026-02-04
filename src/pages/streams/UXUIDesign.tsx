import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Clock,
  Calendar,
  Briefcase,
  GraduationCap,
  Award,
  Users,
  Palette,
  Search,
  Layers,
  PenTool,
  FolderOpen,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import StreamEnrollButton from "@/components/streams/StreamEnrollButton";
import StreamVideos, { StreamVideo } from "@/components/streams/StreamVideos";
import StreamTestimonials, { Testimonial } from "@/components/streams/StreamTestimonials";
import StreamOpportunities, { Opportunity } from "@/components/streams/StreamOpportunities";

const trainingModules = [
  {
    number: 1,
    title: "Design Fundamentals",
    topics: [
      "Design principles & visual hierarchy",
      "Color theory & typography",
      "Layout systems & grids",
      "Design psychology",
    ],
    icon: Palette,
  },
  {
    number: 2,
    title: "UX Research & Strategy",
    topics: [
      "User research methods",
      "Persona development",
      "User journey mapping",
      "Information architecture",
    ],
    icon: Search,
  },
  {
    number: 3,
    title: "UI Design & Systems",
    topics: [
      "Component-based design",
      "Design systems & style guides",
      "Responsive design principles",
      "Accessibility standards",
    ],
    icon: Layers,
  },
  {
    number: 4,
    title: "Prototyping & Tools",
    topics: [
      "Figma mastery",
      "Interactive prototyping",
      "Design handoff workflows",
      "Usability testing",
    ],
    icon: PenTool,
  },
  {
    number: 5,
    title: "Portfolio Projects",
    topics: [
      "End-to-end app design",
      "Website redesign project",
      "Case study documentation",
      "Portfolio presentation",
    ],
    icon: FolderOpen,
  },
];

const internshipOpportunities = [
  "Product design for startups",
  "Mobile app UI design",
  "Website UX improvement projects",
  "Design system creation",
  "User research studies",
];

const companyTypes = [
  "Tech Startups",
  "Digital Agencies",
  "Product Companies",
  "E-commerce Platforms",
];

const skillsAcquired = [
  "User research & analysis",
  "Wireframing & prototyping",
  "Visual design & branding",
  "Design system creation",
  "Usability testing",
];

const deliverables = [
  "3–5 portfolio-ready case studies",
  "Complete design system",
  "Interactive prototypes",
  "UX research documentation",
];

const careerPaths = [
  "UX Designer",
  "UI Designer",
  "Product Designer",
  "UX Researcher",
  "Interaction Designer",
];

const videos: StreamVideo[] = [
  {
    title: "What is UX/UI Design?",
    description: "Introduction to the world of user experience and interface design. Learn the difference between UX and UI, and why both matter.",
    duration: "8 mins",
    category: "awareness",
    // youtubeId: "YOUR_VIDEO_ID" // Add YouTube ID when available
  },
  {
    title: "Career Opportunities in Design",
    description: "Explore the growing demand for UX/UI designers in India and globally. Understand salary ranges and career growth paths.",
    duration: "10 mins",
    category: "opportunity",
  },
  {
    title: "Day in the Life of a UX Designer",
    description: "Watch how professional designers work, collaborate with teams, and solve real user problems.",
    duration: "12 mins",
    category: "awareness",
  },
  {
    title: "Student Success Story: From Beginner to Designer",
    description: "Hear from a past student who completed the program and landed their dream design role.",
    duration: "6 mins",
    category: "testimonial",
  },
  {
    title: "Why Companies Need Designers",
    description: "Understanding the business value of good design and why every company is hiring UX/UI talent.",
    duration: "7 mins",
    category: "opportunity",
  },
  {
    title: "Design Tools & Industry Standards",
    description: "Overview of Figma, design systems, and the tools you'll master during training.",
    duration: "9 mins",
    category: "overview",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    role: "Junior UX Designer",
    company: "Tech Startup",
    quote: "The program gave me hands-on experience that no other course offered. The internship phase helped me build a portfolio that got me hired within 2 months of completing the program.",
    rating: 5,
  },
  {
    name: "Rahul Menon",
    role: "UI Designer",
    company: "Digital Agency",
    quote: "I was a complete beginner with no design background. The structured curriculum and mentor support helped me transition from marketing to design. Best decision I made!",
    rating: 5,
  },
  {
    name: "Ananya Reddy",
    role: "Product Designer",
    company: "E-commerce Platform",
    quote: "The real-world projects during internship were invaluable. I learned more in 6 months of internship than I would have in years of self-study.",
    rating: 5,
  },
  {
    name: "Vikram Patel",
    role: "UX Researcher",
    company: "SaaS Company",
    quote: "The user research module was exceptional. It taught me how to understand users deeply and create designs that truly solve their problems.",
    rating: 4,
  },
];

const opportunities: Opportunity[] = [
  {
    title: "High Demand Industry",
    description: "UX/UI design roles have grown 30% year-over-year. Companies across all industries are actively hiring design talent to improve their digital products.",
    icon: "trending",
  },
  {
    title: "Work Anywhere",
    description: "Design roles are highly remote-friendly. Work with companies globally from anywhere, or join exciting startups and agencies in major cities.",
    icon: "global",
  },
  {
    title: "Competitive Salaries",
    description: "Entry-level UX/UI designers in India earn ₹4-8 LPA, with experienced designers earning ₹12-25 LPA. International roles offer even higher compensation.",
    icon: "money",
  },
  {
    title: "Diverse Industries",
    description: "From fintech to healthcare, e-commerce to education – every industry needs designers. Choose a domain that excites you and make an impact.",
    icon: "building",
  },
];

const UXUIDesign = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-14 lg:py-20 bg-accent">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-accent-foreground">
              UX / UI Design
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-semibold text-accent-foreground/90">
              From user thinking to interface execution
            </p>
            <p className="mt-6 text-lg text-accent-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Master the art of creating user-centered digital experiences. Learn to research, design, and prototype interfaces that users love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center cta-spacing">
              <StreamEnrollButton stream="ux-ui-design" />
              <Button variant="outline" size="lg" asChild className="bg-accent-foreground/10 border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/20">
                <a href="#videos">Watch Videos First</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview Stats Section */}
      <section id="program-overview" className="py-12 bg-muted">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <Clock className="h-10 w-10 text-accent mx-auto mb-4" />
              <p className="text-3xl font-bold text-foreground">12 Months</p>
              <p className="text-muted-foreground mt-2">Total Duration</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <GraduationCap className="h-10 w-10 text-accent mx-auto mb-4" />
              <p className="text-3xl font-bold text-foreground">6–7 Months</p>
              <p className="text-muted-foreground mt-2">Training Phase</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <Briefcase className="h-10 w-10 text-accent mx-auto mb-4" />
              <p className="text-3xl font-bold text-foreground">5–6 Months</p>
              <p className="text-muted-foreground mt-2">Internship Phase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & Requirements Section */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Eligibility & Requirements
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Who can join this program and what's needed to move to the internship phase.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Who Can Join */}
              <div className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Users className="h-6 w-6 text-accent" />
                  Who Can Join
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">College students (any year)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Graduates seeking employment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Professionals planning to switch careers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Anyone wanting to enter the design domain</span>
                  </li>
                </ul>
              </div>

              {/* Internship Requirements */}
              <div className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-accent" />
                  Internship Requirements
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Complete all training modules and assignments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Available for 4–8 hours/day, Monday to Friday</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Commit to minimum 6 months internship duration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Submit all course deliverables within 6–7 months</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Phase Section */}
      <section className="py-12 bg-muted">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Comprehensive UX/UI Training
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                A structured curriculum covering everything from design fundamentals to advanced prototyping.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {trainingModules.map((module) => {
                const IconComponent = module.icon;
                return (
                  <AccordionItem
                    key={module.number}
                    value={`module-${module.number}`}
                    className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-sm"
                  >
                    <AccordionTrigger className="hover:no-underline py-5">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                          {module.number}
                        </div>
                        <div className="flex items-center gap-3">
                          <IconComponent className="h-5 w-5 text-accent" />
                          <span className="text-lg font-semibold text-foreground text-left">
                            {module.title}
                          </span>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 pl-14">
                      <ul className="space-y-2">
                        {module.topics.map((topic, index) => (
                          <li key={index} className="flex items-center gap-2 text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Internship Phase Section */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Real-World Design Experience
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Work on actual design projects with guidance from industry mentors.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Internship Opportunities */}
              <div className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Internship Opportunities
                </h3>
                <ul className="space-y-3">
                  {internshipOpportunities.map((opportunity, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{opportunity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Types */}
              <div className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Company Types
                </h3>
                <ul className="space-y-3">
                  {companyTypes.map((company, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{company}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-accent font-medium">
                  Work with real companies on actual projects. Gain hands-on experience that matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Outcomes Section */}
      <section className="py-12 bg-muted">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Program Outcomes
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                What you'll gain after completing the 12-month journey
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Skills Acquired */}
              <div className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-3">
                  <Palette className="h-5 w-5 text-accent" />
                  Skills Acquired
                </h3>
                <ul className="space-y-3">
                  {skillsAcquired.map((skill, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-3">
                  <FolderOpen className="h-5 w-5 text-accent" />
                  Deliverables
                </h3>
                <ul className="space-y-3">
                  {deliverables.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Certificates */}
              <div className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-3">
                  <Award className="h-5 w-5 text-accent" />
                  Certificates
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">IN10SIP Course Completion Certificate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">Internship Experience Certificate</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Career Paths
            </h2>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              {careerPaths.map((path, index) => (
                <span
                  key={index}
                  className="bg-accent/10 text-accent px-6 py-3 rounded-full text-lg font-semibold"
                >
                  {path}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <StreamOpportunities 
        opportunities={opportunities}
        salaryRange="₹4-25 LPA"
        jobGrowth="30%+ YoY"
        streamName="UX/UI Design"
      />

      {/* Testimonials Section */}
      <StreamTestimonials 
        testimonials={testimonials}
        streamName="UX/UI Design"
      />

      {/* Video Section */}
      <div id="videos">
        <StreamVideos 
          videos={videos}
          streamName="UX / UI Design"
        />
      </div>

      {/* Final CTA Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Ready to Start Your Journey in UX / UI Design?
            </h2>
            <p className="mt-6 text-lg opacity-90">
              Join the 12 Months program and build real-world capability with IN10SIP.
            </p>
            <div className="cta-spacing flex justify-center">
              <StreamEnrollButton stream="ux-ui-design" />
            </div>
            <p className="mt-4 text-sm opacity-75">
              You can only enroll in one stream at a time. Choose wisely!
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UXUIDesign;
