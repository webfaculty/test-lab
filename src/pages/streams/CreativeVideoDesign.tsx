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
  Video,
  Palette,
  Camera,
  Film,
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
      "Visual design principles",
      "Color & composition",
      "Typography basics",
      "Brand identity design",
    ],
    icon: Palette,
  },
  {
    number: 2,
    title: "Graphic Design",
    topics: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Social media graphics",
      "Print design basics",
    ],
    icon: Palette,
  },
  {
    number: 3,
    title: "Video Production",
    topics: [
      "Video fundamentals",
      "Shooting techniques",
      "Lighting & audio",
      "Storyboarding",
    ],
    icon: Camera,
  },
  {
    number: 4,
    title: "Video Editing & Motion",
    topics: [
      "Adobe Premiere Pro",
      "After Effects basics",
      "Motion graphics",
      "Sound design",
    ],
    icon: Film,
  },
  {
    number: 5,
    title: "Creative Projects",
    topics: [
      "Brand video projects",
      "Social media content",
      "Portfolio creation",
      "Showreel development",
    ],
    icon: FolderOpen,
  },
];

const internshipOpportunities = [
  "Brand video production",
  "Social media content creation",
  "Graphic design projects",
  "Motion graphics",
  "Marketing collaterals",
];

const companyTypes = [
  "Creative Agencies",
  "Production Houses",
  "Media Companies",
  "Marketing Agencies",
];

const skillsAcquired = [
  "Graphic design (Adobe Suite)",
  "Video production & editing",
  "Motion graphics",
  "Brand content creation",
  "Storytelling & scripting",
];

const deliverables = [
  "Creative portfolio",
  "Video showreel",
  "Brand design projects",
  "Social media content samples",
];

const careerPaths = [
  "Graphic Designer",
  "Video Editor",
  "Motion Graphics Artist",
  "Content Creator",
  "Creative Designer",
];

const videos: StreamVideo[] = [
  {
    title: "What is Creative Design?",
    description: "Introduction to graphic design, video production, and motion graphics - the creative industry landscape.",
    duration: "8 mins",
    category: "awareness",
  },
  {
    title: "Creative Career Paths",
    description: "Explore opportunities from freelancing to agency work, content creation to brand design.",
    duration: "10 mins",
    category: "opportunity",
  },
  {
    title: "The Power of Visual Content",
    description: "Why every brand needs designers - the business value of compelling visuals.",
    duration: "7 mins",
    category: "opportunity",
  },
  {
    title: "Behind the Scenes: Content Creation",
    description: "See how professionals plan, shoot, and edit videos and graphics for real clients.",
    duration: "12 mins",
    category: "awareness",
  },
  {
    title: "Student Showreel Stories",
    description: "Watch portfolios created by program graduates and hear their creative journey.",
    duration: "6 mins",
    category: "testimonial",
  },
  {
    title: "Tools & Software Overview",
    description: "Get introduced to Adobe Suite, video editing software, and the tools you'll master.",
    duration: "9 mins",
    category: "overview",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Akash Menon",
    role: "Video Editor",
    company: "Production House",
    quote: "Learning Premiere Pro and After Effects together was a game-changer. My showreel from the internship got me hired within weeks of completing the program.",
    rating: 5,
  },
  {
    name: "Meera Joshi",
    role: "Graphic Designer",
    company: "Creative Agency",
    quote: "The brand design projects were challenging but incredibly rewarding. I now work on campaigns for major brands - something I never imagined possible!",
    rating: 5,
  },
  {
    name: "Rohan Das",
    role: "Motion Graphics Artist",
    company: "Media Company",
    quote: "Motion graphics seemed intimidating at first, but the structured modules broke it down perfectly. Now I create animations for TV commercials!",
    rating: 5,
  },
  {
    name: "Shalini Reddy",
    role: "Content Creator",
    company: "Freelance",
    quote: "The program gave me both technical skills and business sense. I now run my own content creation business with multiple recurring clients.",
    rating: 4,
  },
];

const opportunities: Opportunity[] = [
  {
    title: "Content Boom",
    description: "Short-form video and visual content are exploding. Brands need creators who can produce scroll-stopping content.",
    icon: "trending",
  },
  {
    title: "Freelance Freedom",
    description: "Creative skills are highly freelance-friendly. Build your own schedule and client base, or join a creative agency.",
    icon: "global",
  },
  {
    title: "Growing Compensation",
    description: "Entry-level designers earn ₹3-6 LPA, with experienced creatives earning ₹12-25 LPA. Freelancers can earn even more.",
    icon: "money",
  },
  {
    title: "Creative Expression",
    description: "Unlike other careers, creativity lets you express yourself while solving business problems. Every project is different.",
    icon: "building",
  },
];

const CreativeVideoDesign = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-14 lg:py-20 bg-accent">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-accent-foreground">
              Creative / Video & Design
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-semibold text-accent-foreground/90">
              From learning tools to producing real content
            </p>
            <p className="mt-6 text-lg text-accent-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Master video production, motion graphics, and creative design to produce compelling visual content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center cta-spacing">
              <StreamEnrollButton stream="creative-video-design" />
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
                    <span className="text-muted-foreground">Anyone wanting to enter the creative design domain</span>
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
                Complete Creative & Video Training
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                From design fundamentals to professional video production and editing.
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
                Real Creative Experience
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Create actual content for brands and businesses under professional guidance.
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
                  <Video className="h-5 w-5 text-accent" />
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
        salaryRange="₹3-25 LPA"
        jobGrowth="28%+ YoY"
        streamName="Creative / Video & Design"
      />

      {/* Testimonials Section */}
      <StreamTestimonials 
        testimonials={testimonials}
        streamName="Creative / Video & Design"
      />

      {/* Video Section */}
      <div id="videos">
        <StreamVideos 
          videos={videos}
          streamName="Creative / Video & Design"
        />
      </div>

      {/* Final CTA Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Ready to Start Your Journey in Creative / Video & Design?
            </h2>
            <p className="mt-6 text-lg opacity-90">
              Join the 12 Months program and build real-world capability with IN10SIP.
            </p>
            <div className="cta-spacing flex justify-center">
              <StreamEnrollButton stream="creative-video-design" />
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

export default CreativeVideoDesign;
