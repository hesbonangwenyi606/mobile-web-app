import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Docker Containerization",
      description: "Streamlined application packaging and deployment with consistent environments across all stages.",
      image: "https://d64gsuwffb70l.cloudfront.net/68cae6df3aadd5ea68d69518_1758127885764_81a1776e.webp",
      features: ["Multi-stage builds", "Container optimization", "Registry management"]
    },
    {
      title: "Kubernetes Orchestration", 
      description: "Automated container orchestration with scaling, load balancing, and self-healing capabilities.",
      image: "https://d64gsuwffb70l.cloudfront.net/68cae6df3aadd5ea68d69518_1758127894578_2e05a277.webp",
      features: ["Auto-scaling", "Rolling updates", "Service mesh"]
    },
    {
      title: "Terraform Infrastructure",
      description: "Infrastructure as Code for consistent, versioned, and automated cloud resource management.",
      image: "https://d64gsuwffb70l.cloudfront.net/68cae6df3aadd5ea68d69518_1758127898377_669fc9f2.webp",
      features: ["Multi-cloud support", "State management", "Resource planning"]
    },
    {
      title: "Jenkins CI/CD",
      description: "Automated build, test, and deployment pipelines with comprehensive monitoring and reporting.",
      image: "https://d64gsuwffb70l.cloudfront.net/68cae6df3aadd5ea68d69518_1758127901485_2f25b317.webp",
      features: ["Pipeline as Code", "Parallel execution", "Plugin ecosystem"]
    },
    {
      title: "AWS Integration",
      description: "Native cloud services integration for scalable, secure, and cost-effective deployments.",
      image: "https://d64gsuwffb70l.cloudfront.net/68cae6df3aadd5ea68d69518_1758127904742_068a961f.webp",
      features: ["ECS/EKS support", "IAM integration", "CloudFormation"]
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Enterprise-Grade <span className="text-cyan-400">DevOps Stack</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive automation suite leveraging industry-leading technologies for seamless CI/CD workflows
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="mb-6">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-16 h-16 rounded-lg object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;