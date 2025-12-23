import { Mail, Linkedin, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Email Card */}
          <a
            href="mailto:jennifer-rumery@outlook.com"
            className="group bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all border border-gray-200 hover:border-[#B8733E]"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#B8733E]/10 rounded-lg group-hover:bg-[#B8733E]/20 transition-colors">
                <Mail className="w-6 h-6 text-[#B8733E]" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#B8733E] transition-colors">
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
            className="group bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all border border-gray-200 hover:border-[#B8733E]"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#B8733E]/10 rounded-lg group-hover:bg-[#B8733E]/20 transition-colors">
                <Linkedin className="w-6 h-6 text-[#B8733E]" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#B8733E] transition-colors flex items-center gap-2">
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
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
          <h2 className="text-2xl font-serif text-gray-900 mb-4">
            What I'm Looking For
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              I'm currently exploring <strong>senior product management opportunities</strong> where 
              I can apply my experience in AI products, platform development, and user research 
              to solve meaningful problems.
            </p>
            <p>
              My ideal role involves:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Strategic product leadership with cross-functional teams</li>
              <li>Building AI-powered products that improve people's workflows</li>
              <li>User research and data-driven decision making</li>
              <li>0-to-1 product development or platform architecture</li>
              <li>Healthcare technology or similarly impactful domains</li>
            </ul>
            <p className="pt-4">
              Even if you're not hiring, I'm always happy to connect with fellow product 
              leaders and discuss interesting product challenges.
            </p>
          </div>
        </div>

        {/* Response Time */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            I typically respond to emails within 24-48 hours
          </p>
        </div>
      </div>
    </div>
  );
}
