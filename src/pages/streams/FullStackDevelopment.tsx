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
  Code,
  Monitor,
  Server,
  Database,
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
    title: "Programming Fundamentals",
    topics: [
      "Programming logic & problem solving",
      "JavaScript fundamentals",
      "Data structures basics",
      "Version control with Git",
    ],
    icon: Code,
  },
  {
    number: 2,
    title: "Frontend Development",
    topics: [
      "HTML5 & CSS3 mastery",
      "React.js fundamentals",
      "State management",
      "Responsive design",
    ],
    icon: Monitor,
  },
  {
    number: 3,
    title: "Backend Development",
    topics: [
      "Node.js & Express",
      "API design & development",
      "Authentication & security",
      "Database integration",
    ],
    icon: Server,
  },
  {
    number: 4,
    title: "Databases & DevOps",
    topics: [
      "SQL & NoSQL databases",
      "Database design",
      "Cloud deployment",
      "CI/CD basics",
    ],
    icon: Database,
  },
  {
    number: 5,
    title: "Project Development",
    topics: [
      "Full stack project build",
      "Code review practices",
      "Documentation",
      "Portfolio showcase",
    ],
    icon: FolderOpen,
  },
];

const internshipOpportunities = [
  "Feature development",
  "Bug fixing & maintenance",
  "API development",
  "Frontend implementation",
  "Full stack projects",
];

const companyTypes = [
  "Tech Startups",
  "Software Companies",
  "Product Companies",
  "IT Services",
];

const skillsAcquired = [
  "Frontend development (React)",
  "Backend development (Node.js)",
  "Database management",
  "API design & integration",
  "Deployment & DevOps basics",
];

const deliverables = [
  "3–5 full stack projects",
  "GitHub portfolio",
  "Live deployed applications",
  "Technical documentation",
];

const careerPaths = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Software Engineer",
  "Web Developer",
];

const videos: StreamVideo[] = [
  {
    title: "What is Full Stack Development?",
    description: "Introduction to web development - understand how websites and apps are built from scratch.",
    duration: "8 mins",
    category: "awareness",
  },
  {
    title: "Developer Career Opportunities",
    description: "Explore the booming tech job market - from startups to global tech giants.",
    duration: "10 mins",
    category: "opportunity",
  },
  {
    title: "Why Learn to Code?",
    description: "Programming skills open doors in every industry. See why coding is the most valuable skill today.",
    duration: "7 mins",
    category: "awareness",
  },
  {
    title: "A Day in the Life of a Developer",
    description: "See how developers work, collaborate with teams, and solve real problems.",
    duration: "12 mins",
    category: "awareness",
  },
  {
    title: "Student Success Story",
    description: "From zero coding experience to a full-time developer role - hear a graduate's journey.",
    duration: "6 mins",
    category: "testimonial",
  },
  {
    title: "Tech Stack Overview",
    description: "Get familiar with React, Node.js, databases, and the tools you'll master in this program.",
    duration: "9 mins",
    category: "overview",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Aditya Kumar",
    role: "Full Stack Developer",
    company: "Tech Startup",
    quote: "I had zero coding background. The structured curriculum took me from basics to building full applications. The internship landed me my first dev job!",
    rating: 5,
  },
  {
    name: "Divya Sharma",
    role: "Frontend Developer",
    company: "Product Company",
    quote: "The React training was excellent. By the end of my internship, I had built 3 production applications and a portfolio that impressed every interviewer.",
    rating: 5,
  },
  {
    name: "Karthik Raman",
    role: "Backend Developer",
    company: "IT Services",
    quote: "Learning Node.js and databases together made everything click. The project-based approach meant I was job-ready from day one.",
    rating: 5,
  },
  {
    name: "Preethi Nair",
    role: "Software Engineer",
    company: "Fintech Startup",
    quote: "The mentorship was incredible. Having industry professionals guide me through real problems accelerated my learning tremendously.",
    rating: 4,
  },
];

const opportunities: Opportunity[] = [
  {
    title: "Massive Talent Demand",
    description: "India needs 1M+ developers annually. Tech companies are actively hiring at all experience levels.",
    icon: "trending",
  },
  {
    title: "Work From Anywhere",
    description: "Developer roles are the most remote-friendly. Work with global companies from your hometown.",
    icon: "global",
  },
  {
    title: "Top Salaries",
    description: "Entry-level developers earn ₹4-8 LPA, with experienced engineers earning ₹15-40 LPA. Fastest salary growth in any field.",
    icon: "money",
  },
  {
    title: "Endless Possibilities",
    description: "Build products that millions use. From apps to AI systems - your skills can create anything.",
    icon: "building",
  },
];

const FullStackDevelopment = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-14 lg:py-20 bg-accent">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-accent-foreground">
              Full Stack Development
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-semibold text-accent-foreground/90">
              From basics to building working applications
            </p>
            <p className="mt-6 text-lg text-accent-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Learn to build complete web applications from frontend to backend, databases to deployment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center cta-spacing">
              <StreamEnrollButton stream="full-stack-development" />
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
                    <span className="text-muted-foreground">Anyone wanting to enter the software development domain</span>
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
                Complete Full Stack Training
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                From programming fundamentals to building and deploying production applications.
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
                Real Development Experience
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Work on actual codebases and contribute to real software projects.
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
                  <Code className="h-5 w-5 text-accent" />
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
        salaryRange="₹4-40 LPA"
        jobGrowth="35%+ YoY"
        streamName="Full Stack Development"
      />

      {/* Testimonials Section */}
      <StreamTestimonials 
        testimonials={testimonials}
        streamName="Full Stack Development"
      />

      {/* Video Section */}
      <div id="videos">
        <StreamVideos 
          videos={videos}
          streamName="Full Stack Development"
        />
      </div>

      {/* Final CTA Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Ready to Start Your Journey in Full Stack Development?
            </h2>
            <p className="mt-6 text-lg opacity-90">
              Join the 12 Months program and build real-world capability with IN10SIP.
            </p>
            <div className="cta-spacing flex justify-center">
              <StreamEnrollButton stream="full-stack-development" />
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

export default FullStackDevelopment;
