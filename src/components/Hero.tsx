import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 opacity-20 animate-fadeUp">
        <img 
          src="https://d64gsuwffb70l.cloudfront.net/68cae6df3aadd5ea68d69518_1758127880901_69ed6bf8.webp"
          alt="DevOps Pipeline"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-green-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center text-center">
        <div className="max-w-4xl">

          {/* TITLE */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fadeUp">
            DevOps
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Automation</span>
            <br />Suite
          </h1>

          {/* DESCRIPTION */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed animate-fadeUp [animation-delay:0.15s]">
            Comprehensive CI/CD pipeline automation with Docker, Kubernetes, and Terraform.
            <span className="text-green-400 font-semibold"> Reduced deployment time by 75%.</span>
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fadeUp [animation-delay:0.3s]">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Automation
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              View Dashboard
            </button>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fadeUp [animation-delay:0.45s]">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">75%</div>
              <div className="text-gray-300">Faster Deployments</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">Pipelines Automated</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
