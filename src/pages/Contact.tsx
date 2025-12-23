import { Mail, Linkedin, ExternalLink, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-4">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm always interested in discussing product strategy, user research 
            methodologies, or opportunities in AI and healthcare technology.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif text-gray-900 mb-4">Get in Touch</h2>
            
            {/* Email Card */}
            <a
              href="mailto:jennifer-rumery@outlook.com"
              className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all border border-gray-200 hover:border-[#B8733E] block"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#B8733E]/10 rounded-lg group-hover:bg-[#B8733E]/20 transition-colors">
                  <Mail className="w-6 h-6 text-[#B8733E]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-[#B8733E] transition-colors">
                    Email
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Best for detailed inquiries or opportunities
                  </p>
                  <p className="text-[#B8733E] font-medium text-sm">
                    jennifer-rumery@outlook.com
                  </p>
                </div>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/jennifer-rumery/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all border border-gray-200 hover:border-[#B8733E] block"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#B8733E]/10 rounded-lg group-hover:bg-[#B8733E]/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-[#B8733E]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-[#B8733E] transition-colors flex items-center gap-2">
                    LinkedIn
                    <ExternalLink className="w-4 h-4" />
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Professional background and network
                  </p>
                  <p className="text-[#B8733E] font-medium text-sm">
                    /in/jennifer-rumery
                  </p>
                </div>
              </div>
            </a>

            {/* Location Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#B8733E]/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#B8733E]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Location
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Eau Claire, WI (Open to remote)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-serif text-gray-900 mb-2">Send a Message</h2>
            <p className="text-gray-600 text-sm mb-6">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Web3Forms Access Key - Hidden Field */}
              <input type="hidden" name="access_key" value="bb1a0df4-cf9d-431e-a291-ed3629feca14" />
              
              {/* Optional: Redirect after submission */}
              <input type="hidden" name="redirect" value="false" />
              
              {/* Optional: Custom subject line */}
              <input type="hidden" name="subject" value="New Contact Form Submission from Portfolio" />

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8733E] focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8733E] focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Company Field (Optional) */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company <span className="text-gray-500">(optional)</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Your company"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8733E] focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="How can I help you?"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8733E] focus:border-transparent outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full bg-[#B8733E] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#A0632E] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                <Mail className="w-4 h-4" />
              </button>

              {/* Status Messages */}
              {formStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-sm">
                  Thanks for reaching out! I'll get back to you soon.
                </div>
              )}
              {formStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm">
                  Oops! Something went wrong. Please try emailing me directly at jennifer-rumery@outlook.com
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
