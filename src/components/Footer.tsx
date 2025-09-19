import React from 'react';

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        "CI/CD Pipeline Setup",
        "Docker Containerization", 
        "Kubernetes Orchestration",
        "Infrastructure as Code",
        "Monitoring & Observability"
      ]
    },
    {
      title: "Technologies",
      links: [
        "Docker & Podman",
        "Kubernetes & OpenShift",
        "Terraform & Ansible", 
        "Jenkins & GitLab CI",
        "AWS & Azure & GCP"
      ]
    },
    {
      title: "Resources",
      links: [
        "Documentation",
        "Best Practices",
        "Case Studies",
        "Blog & Tutorials",
        "Community Forum"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Careers",
        "Privacy Policy",
        "Terms of Service",
        "Contact Support"
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-700/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">DA</span>
              </div>
              <span className="text-white font-bold text-xl">DevOps Automation</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Enterprise-grade DevOps automation suite delivering 75% faster deployments with comprehensive CI/CD pipeline management.
            </p>
            <div className="flex space-x-4">
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/hesbon-angwenyi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/hesbon-angwenyi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.333-5.466-5.931 0-1.311.469-2.382 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.51 11.51 0 0 1 6 0c2.292-1.552 3.3-1.23 3.3-1.23.653 1.653.241 2.873.118 3.176.77.839 1.236 1.91 1.236 3.221 0 4.609-2.803 5.628-5.475 5.922.43.371.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.286 0 .317.216.688.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>

              {/* Email */}
              <a 
                href="mailto:hesbonmanyinsa96@gmail.com" 
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 13.065L.001 6h24L12 13.065zm0 2.221L0 8.35v9.65c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2V8.35l-12 6.936z"/>
                </svg>
              </a>

              {/* Phone */}
              <a 
                href="tel:+254743573380" 
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1v3.49c0 .55-.45 1-1 1C10.29 21 3 13.71 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 DevOps Automation Suite. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
