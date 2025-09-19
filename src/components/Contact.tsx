import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here (API call, email service, etc.)
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Your <span className="text-cyan-400">DevOps Journey</span>
            </h2>
            <p className="text-xl text-gray-300">
              Let's discuss how we can transform your deployment pipeline and accelerate your
              development workflow
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Get Started</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="ci-cd">CI/CD Pipeline Setup</option>
                    <option value="containerization">Docker Containerization</option>
                    <option value="kubernetes">Kubernetes Orchestration</option>
                    <option value="terraform">Infrastructure as Code</option>
                    <option value="monitoring">Monitoring & Observability</option>
                    <option value="consultation">DevOps Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your current infrastructure and goals..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Schedule Consultation
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-4">Why Choose Our DevOps Suite?</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    75% faster deployment times guaranteed
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Enterprise-grade security and compliance
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    24/7 monitoring and support
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Multi-cloud deployment flexibility
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-4">Quick Response</h3>
                <p className="text-gray-300 mb-4">
                  Get a detailed DevOps assessment and custom automation roadmap within 24 hours.
                </p>
                <div className="text-cyan-400 font-semibold space-y-2">
                  <a
                    href="mailto:hesbonangwenyi96@gmail.com"
                    className="hover:underline block"
                  >
                    📧 hesbonangwenyi96@gmail.com
                  </a>
                  <a
                    href="tel:+254743573380"
                    className="hover:underline block"
                  >
                    📞 +254 743 573 380
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
