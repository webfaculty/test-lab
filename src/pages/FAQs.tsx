import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle } from "lucide-react";

const faqs = [
  {
    question: "Do you guarantee jobs?",
    answer: (
      <>
        <p>
          IN10SIP prepares you to be job-ready through structured training and real internship experience.
        </p>
        <p className="mt-3">
          We focus on building your capability, confidence, and portfolio — the foundations that make you employable.
        </p>
      </>
    ),
  },
  {
    question: "Can companies hire interns after the internship?",
    answer: (
      <>
        <p>
          Yes, companies can choose to hire interns if they wish. However, there is no obligation to do so.
        </p>
        <p className="mt-3">
          The internship is designed to be a learning experience first, with potential employment as a possible outcome.
        </p>
      </>
    ),
  },
  {
    question: "Is this only for one institute?",
    answer: (
      <>
        <p>
          No. IN10SIP is a multi-institute ecosystem.
        </p>
        <p className="mt-3">
          We partner with multiple training institutes to deliver skill training and validate student readiness for internships.
        </p>
      </>
    ),
  },
  {
    question: "What skill streams are available?",
    answer: (
      <>
        <p className="mb-4">
          Currently, IN10SIP offers four skill streams:
        </p>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
            <span>UX / UI Design</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
            <span>Digital Marketing</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
            <span>Full Stack Development</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
            <span>Creative / Video & Design</span>
          </li>
        </ul>
        <p className="mt-4">
          Each stream includes structured training, internship execution, and portfolio development.
        </p>
      </>
    ),
  },
  {
    question: "How long does the program take?",
    answer: (
      <>
        <p>
          The duration varies by skill stream and individual progress.
        </p>
        <p className="mt-3">
          The program includes a training phase followed by an internship phase.
        </p>
        <p className="mt-3">
          Most students complete the full journey within 6–12 months.
        </p>
      </>
    ),
  },
  {
    question: "What certificates do I receive?",
    answer: (
      <>
        <p className="mb-4">
          Upon successful completion, students receive:
        </p>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
            <span>Course Completion Certificate (after training)</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
            <span>Internship Completion Certificate (after the internship)</span>
          </li>
        </ul>
        <p className="mt-4">
          These certificates represent verified capability, not just attendance.
        </p>
      </>
    ),
  },
  {
    question: "How do I get validated as internship-ready?",
    answer: (
      <>
        <p>
          Validation happens through the training institute.
        </p>
        <p className="mt-3">
          Students must complete all training modules, assignments, and learning projects to the required standard.
        </p>
        <p className="mt-3">
          Only validated students are matched with internship opportunities.
        </p>
      </>
    ),
  },
];

const FAQs = () => {
  return (
    <Layout>
      {/* Page Intro Section */}
      <section className="py-14 lg:py-20 bg-accent">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-accent-foreground">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg text-accent-foreground/80">
              Find answers to common questions about IN10SIP.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-12 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-sm"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Still have questions?
            </h2>
            <p className="mt-6 text-lg opacity-90">
              Get in touch with us or join IN10SIP to learn more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center cta-spacing">
              <Button variant="cta" size="lg" asChild>
                <Link to="/for-students">Join IN10SIP</Link>
              </Button>
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQs;
