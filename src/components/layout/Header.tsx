import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/routes";

const navLinks = [
  { name: "Home", path: ROUTES.HOME },
  { name: "Projects", path: ROUTES.PROJECTS },
  { name: "Blog", path: ROUTES.BLOG },
  { name: "Education", path: ROUTES.EDUCATION_CERTIFICATIONS },
  { name: "Contact", path: ROUTES.CONTACT },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-[#3a3a3a] backdrop-blur-md border-b border-gray-600">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to={ROUTES.HOME} className="font-display text-2xl font-semibold text-white">
            Jennifer Rumery
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body text-sm font-medium transition-colors hover:text-[#B8733E] ${
                  location.pathname === link.path
                    ? "text-[#B8733E] underline decoration-2 underline-offset-4"
                    : "text-gray-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild size="sm" className="font-body">
              <a href={`${import.meta.env.BASE_URL}Jennifer%20Rumery%20SrPM%20Resume.pdf`} download className="flex items-center">
                <Download className="mr-2 h-4 w-4" /> Resume
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 font-body text-sm font-medium transition-colors hover:text-[#B8733E] ${
                  location.pathname === link.path
                    ? "text-[#B8733E] underline decoration-2 underline-offset-4"
                    : "text-gray-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild size="sm" className="font-body w-full mt-4">
              <a href={`${import.meta.env.BASE_URL}Jennifer%20Rumery%20SrPM%20Resume.pdf`} download onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
