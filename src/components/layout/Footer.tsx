import { Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/lib/routes';

export default function Footer() {
  return (
    <footer className="bg-[#3a3a3a] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-serif mb-4">Jennifer Rumery</h3>
            <p className="text-gray-300 text-sm">
              Building AI products that give veterinarians their time back. 
              Product manager with 15+ years in veterinary technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to={ROUTES.PROJECTS}
                  className="text-gray-300 hover:text-[#B8733E] transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.BLOG}
                  className="text-gray-300 hover:text-[#B8733E] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.EDUCATION_CERTIFICATIONS}
                  className="text-gray-300 hover:text-[#B8733E] transition-colors"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.CONTACT}
                  className="text-gray-300 hover:text-[#B8733E] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex flex-col space-y-3">
              <a
                href="mailto:jennifer-rumery@outlook.com"
                className="flex items-center gap-2 text-gray-300 hover:text-[#B8733E] transition-colors"
              >
                <Mail size={20} />
                <span className="text-sm">jennifer-rumery@outlook.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/jennifer-rumery/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-[#B8733E] transition-colors"
              >
                <Linkedin size={20} />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-600 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Jennifer Rumery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
