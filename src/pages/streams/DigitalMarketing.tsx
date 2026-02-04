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
  Megaphone,
  FileText,
  Search,
  BarChart3,
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
    title: "Marketing Fundamentals",
    topics: [
      "Marketing principles & psychology",
      "Digital marketing landscape",
      "Customer journey mapping",
      "Brand positioning",
    ],
    icon: Megaphone,
  },
  {
    number: 2,
    title: "Content & Social Media",
    topics: [
      "Content strategy & creation",
      "Social media marketing",
      "Community management",
      "Influencer collaboration",
    ],
    icon: FileText,
  },
  {
    number: 3,
    title: "SEO & SEM",
    topics: [
      "Search engine optimization",
      "Keyword research & strategy",
      "Google Ads fundamentals",
      "PPC campaign management",
    ],
    icon: Search,
  },
  {
    number: 4,
    title: "Analytics & Performance",
    topics: [
      "Google Analytics mastery",
      "Data-driven decision making",
      "A/B testing & optimization",
      "ROI measurement",
    ],
    icon: BarChart3,
  },
  {
    number: 5,
    title: "Campaign Projects",
    topics: [
      "End-to-end campaign planning",
      "Multi-channel execution",
      "Performance reporting",
      "Portfolio documentation",
    ],
    icon: FolderOpen,
  },
];

const internshipOpportunities = [
  "Social media campaign management",
  "Content marketing execution",
  "SEO optimization projects",
  "Performance marketing",
  "Brand awareness campaigns",
];

const companyTypes = [
  "Marketing Agencies",
  "E-commerce Brands",
  "Startups",
  "Media Companies",
];

const skillsAcquired = [
  "Campaign planning & execution",
  "Social media management",
  "SEO & content optimization",
  "Analytics & reporting",
  "Performance marketing",
];

const deliverables = [
  "3–5 campaign case studies",
  "Content portfolio",
  "Analytics reports",
  "Marketing strategy documents",
];

const careerPaths = [
  "Digital Marketing Executive",
  "Social Media Manager",
  "SEO Specialist",
  "Content Marketer",
  "Performance Marketer",
];

const videos: StreamVideo[] = [
  {
    title: "What is Digital Marketing?",
    description: "Introduction to the digital marketing ecosystem - understand how businesses reach customers online.",
    duration: "8 mins",
    category: "awareness",
  },
  {
    title: "Marketing Career Paths",
    description: "Explore diverse career opportunities from SEO to social media management and performance marketing.",
    duration: "10 mins",
    category: "opportunity",
  },
  {
    title: "The Power of Digital",
    description: "Why businesses are shifting budgets to digital and the growing demand for marketing talent.",
    duration: "7 mins",
    category: "opportunity",
  },
  {
    title: "Day in the Life of a Digital Marketer",
    description: "See how marketers plan campaigns, analyze data, and drive growth for real brands.",
    duration: "12 mins",
    category: "awareness",
  },
  {
    title: "Student Success Story",
    description: "Hear from a program graduate who now manages marketing for a growing startup.",
    duration: "6 mins",
    category: "testimonial",
  },
  {
    title: "Marketing Tools Overview",
    description: "Get familiar with the tools you'll master - Google Analytics, Ads, social platforms, and more.",
    duration: "9 mins",
    category: "overview",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Sneha Krishnan",
    role: "Digital Marketing Executive",
    company: "E-commerce Startup",
    quote: "The hands-on campaign experience was invaluable. I managed real ad budgets during my internship and learned what actually works, not just theory.",
    rating: 5,
  },
  {
    name: "Arjun Nair",
    role: "SEO Specialist",
    company: "Digital Agency",
    quote: "Coming from a non-marketing background, I was nervous. But the structured modules and mentor support helped me transition smoothly. Now I handle SEO for 10+ clients!",
    rating: 5,
  },
  {
    name: "Kavitha Rao",
    role: "Social Media Manager",
    company: "Consumer Brand",
    quote: "The program taught me to think strategically, not just post content. I learned to tie every campaign to business goals and measure real impact.",
    rating: 5,
  },
  {
    name: "Mohammed Farhan",
    role: "Performance Marketer",
    company: "SaaS Company",
    quote: "Google Ads and analytics were completely new to me. The training phase gave me confidence, and the internship gave me proof of my skills.",
    rating: 4,
  },
];

const opportunities: Opportunity[] = [
  {
    title: "Explosive Industry Growth",
    description: "Digital ad spending in India is growing 25%+ annually. Every company needs marketers who understand digital channels.",
    icon: "trending",
  },
  {
    title: "Remote-Friendly Careers",
    description: "Marketing roles are highly flexible. Work from anywhere, manage campaigns globally, and choose your work style.",
    icon: "global",
  },
  {
    title: "Competitive Compensation",
    description: "Entry-level digital marketers earn ₹3-6 LPA, with experienced specialists earning ₹10-20 LPA. Performance bonuses are common.",
    icon: "money",
  },
  {
    title: "Every Industry Needs You",
    description: "From healthcare to fintech, education to entertainment - marketing skills are universally in demand.",
    icon: "building",
  },
];

const DigitalMarketing = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-14 lg:py-20 bg-accent">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-accent-foreground">
              Digital Marketing
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-semibold text-accent-foreground/90">
              From learning campaigns to executing growth
            </p>
            <p className="mt-6 text-lg text-accent-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Learn to plan, execute, and optimize digital marketing campaigns across multiple channels to drive real business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center cta-spacing">
              <StreamEnrollButton stream="digital-marketing" />
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
                    <span className="text-muted-foreground">Anyone wanting to enter the digital marketing domain</span>
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
                Complete Digital Marketing Training
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                From fundamentals to advanced strategies across all digital marketing channels.
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
                Real Campaign Experience
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Execute actual marketing campaigns for real brands and businesses.
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
                  <Megaphone className="h-5 w-5 text-accent" />
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
        salaryRange="₹3-20 LPA"
        jobGrowth="25%+ YoY"
        streamName="Digital Marketing"
      />

      {/* Testimonials Section */}
      <StreamTestimonials 
        testimonials={testimonials}
        streamName="Digital Marketing"
      />

      {/* Video Section */}
      <div id="videos">
        <StreamVideos 
          videos={videos}
          streamName="Digital Marketing"
        />
      </div>

      {/* Final CTA Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Ready to Start Your Journey in Digital Marketing?
            </h2>
            <p className="mt-6 text-lg opacity-90">
              Join the 12 Months program and build real-world capability with IN10SIP.
            </p>
            <div className="cta-spacing flex justify-center">
              <StreamEnrollButton stream="digital-marketing" />
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

export default DigitalMarketing;
