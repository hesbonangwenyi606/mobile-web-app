import React from "react";
import CountUp from "react-countup";

const Metrics = () => {
  const metrics = [
    {
      title: "Deployment Frequency",
      value: 15,
      suffix: "x",
      description: "Daily deployments increased from 2 to 30",
      trend: "+1400%",
      color: "text-cyan-400",
      duration: 2.5,
    },
    {
      title: "Lead Time Reduction",
      value: 75,
      suffix: "%",
      description: "From 4 hours to 1 hour average deployment",
      trend: "-75%",
      color: "text-green-400",
      duration: 2,
    },
    {
      title: "Failure Recovery",
      value: 12,
      suffix: "min",
      description: "Mean time to recovery dramatically improved",
      trend: "-85%",
      color: "text-blue-400",
      duration: 2.5,
    },
    {
      title: "Success Rate",
      value: 99.7,
      suffix: "%",
      description: "Pipeline success rate with automated testing",
      trend: "+15%",
      color: "text-purple-400",
      duration: 3,
      decimals: 1, // to display 99.7 instead of 100
    },
  ];

  const benefits = [
    "Automated testing reduces manual errors by 90%",
    "Infrastructure as Code ensures consistent environments",
    "Container orchestration provides seamless scaling",
    "Monitoring and alerting enable proactive issue resolution",
    "GitOps workflow improves collaboration and traceability",
    "Multi-cloud deployment reduces vendor lock-in risks",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Measurable <span className="text-cyan-400">Impact</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Quantified improvements in deployment efficiency, reliability, and
            team productivity
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div
                className={`text-4xl font-bold mb-2 ${metric.color} group-hover:scale-110 transition-transform duration-300`}
              >
                <CountUp
                  start={0}
                  end={metric.value}
                  duration={metric.duration}
                  suffix={metric.suffix}
                  decimals={metric.decimals || 0}
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {metric.title}
              </h3>
              <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                {metric.description}
              </p>
              <div className={`text-sm font-semibold ${metric.color}`}>
                {metric.trend}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Enterprise Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700/30 transition-colors duration-200"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Schedule DevOps Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
