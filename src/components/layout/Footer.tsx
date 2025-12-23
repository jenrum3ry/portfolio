import { Link } from "react-router-dom";
import { Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">
              Jennifer Rumery
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Product Manager passionate about building user-centered products 
              that drive meaningful business outcomes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Case Studies", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-body text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-4">
              
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              
                href="mailto:hello@example.com"
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="font-body text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Jennifer Rumery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
