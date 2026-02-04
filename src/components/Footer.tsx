import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const companyLinks = [
  { label: "About IN10SIP", path: "/about" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Streams", path: "/streams" },
  { label: "FAQs", path: "/faqs" },
  { label: "Contact Us", path: "/contact" },
];

const programLinks = [
  { label: "UX/UI Design", path: "/streams/ux-ui-design" },
  { label: "Digital Marketing", path: "/streams/digital-marketing" },
  { label: "Full Stack Development", path: "/streams/full-stack-development" },
  { label: "Creative / Video & Design", path: "/streams/creative-video-design" },
];

const audienceLinks = [
  { label: "For Students", path: "/for-students" },
  { label: "For Companies", path: "/for-companies" },
  { label: "For Institutes", path: "/for-institutes" },
];

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground">
      {/* Row 1 - Main Footer Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1 - Brand */}
          <div className="lg:col-span-1">
            <Logo variant="light" size="small" />
            <p className="mt-3 text-lg font-medium text-footer-foreground">
              3 Problems. 1 Solution.
            </p>
            <div className="mt-4 space-y-1 text-sm leading-relaxed">
              <p className="text-footer-foreground">
                Students <span className="text-accent">Get Industry Ready</span> for Jobs
              </p>
              <p className="text-footer-foreground">
                Companies <span className="text-accent">Get Industry Ready</span> Talents
              </p>
              <p className="text-footer-foreground">
                Institutes <span className="text-accent">Get Industry Ready</span> Enable Platform
              </p>
            </div>
            <Button variant="cta-footer" asChild className="cta-spacing">
              <Link to="/join">Join IN10SIP</Link>
            </Button>
          </div>

          {/* Column 2 - Company Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-footer-foreground mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Programs / Streams */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-footer-foreground mb-4">
              Programs
            </h3>
            <ul className="space-y-3">
              {programLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Audience Pages */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-footer-foreground mb-4">
              Get Started
            </h3>
            <ul className="space-y-3">
              {audienceLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Row 2 - Copyright */}
      <div className="border-t border-footer-muted/20">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-footer-muted">
            © 2026 IN10SIP. All rights reserved.
          </p>
          <p className="text-sm text-footer-muted font-medium">
            A Product By BUIZLAB
          </p>
          <p className="text-sm text-footer-muted">
            IN10SIP — Enabling Internships. Building Capability.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
