import React from 'react';

const PipelineDashboard = () => {
  const pipelines = [
    {
      name: "Frontend Deployment",
      status: "success",
      duration: "2m 34s",
      image: "https://d64gsuwffb70l.cloudfront.net/68cae6df3aadd5ea68d69518_1758127908891_c5406747.webp",
      lastRun: "5 minutes ago"
    },
    {
      name: "API Gateway",
      status: "running",
      duration: "1m 45s",
      image: "https://d64gsuwffb70l.cloudfront.net/68cae6df3aadd5ea68d69518_1758127911210_782d9349.webp",
      lastRun: "2 minutes ago"
    },
    {
      name: "Database Migration",
      status: "success",
      duration: "4m 12s",
      image: "https://d64gsuwffb70l.cloudfront.net/68cae6df3aadd5ea68d69518_1758127914016_29c0e65a.webp",
      lastRun: "15 minutes ago"
    },
    {
      name: "Microservices Suite",
      status: "success",
      duration: "3m 28s",
      image: "https://d64gsuwffb70l.cloudfront.net/68cae6df3aadd5ea68d69518_1758127916360_e1389205.webp",
      lastRun: "8 minutes ago"
    },
    {
      name: "Infrastructure Provisioning",
      status: "pending",
      duration: "6m 15s",
      image: "https://d64gsuwffb70l.cloudfront.net/68cae6df3aadd5ea68d69518_1758127919066_abe718d4.webp",
      lastRun: "1 minute ago"
    },
    {
      name: "Security Scanning",
      status: "success",
      duration: "2m 56s",
      image: "https://d64gsuwffb70l.cloudfront.net/68cae6df3aadd5ea68d69518_1758127921212_33e0ea31.webp",
      lastRun: "12 minutes ago"
    },
    {
      name: "Load Testing",
      status: "running",
      duration: "5m 43s",
      image: "https://d64gsuwffb70l.cloudfront.net/68cae6df3aadd5ea68d69518_1758127922952_db8145f5.webp",
      lastRun: "3 minutes ago"
    },
    {
      name: "Production Release",
      status: "success",
      duration: "8m 21s",
      image: "https://d64gsuwffb70l.cloudfront.net/68cae6df3aadd5ea68d69518_1758127924803_36ca92a8.webp",
      lastRun: "25 minutes ago"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'text-green-400 bg-green-400/20 border-green-400/50';
      case 'running': return 'text-blue-400 bg-blue-400/20 border-blue-400/50';
      case 'pending': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/50';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/50';
    }
  };

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Live Pipeline <span className="text-cyan-400">Dashboard</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time monitoring of active CI/CD workflows with comprehensive metrics and status tracking
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pipelines.map((pipeline, index) => (
            <div key={index} className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="mb-4">
                <img 
                  src={pipeline.image} 
                  alt={pipeline.name}
                  className="w-full h-32 rounded-lg object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {pipeline.name}
              </h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Status</span>
                  <span className={`text-xs px-2 py-1 rounded-full border ${getStatusColor(pipeline.status)} capitalize`}>
                    {pipeline.status}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Duration</span>
                  <span className="text-sm text-white font-mono">{pipeline.duration}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Last Run</span>
                  <span className="text-sm text-gray-300">{pipeline.lastRun}</span>
                </div>
              </div>
              
              {pipeline.status === 'running' && (
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div className="bg-blue-400 h-2 rounded-full animate-pulse" style={{width: '65%'}}></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PipelineDashboard;