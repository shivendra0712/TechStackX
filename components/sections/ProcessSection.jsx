// const steps = [
//   { title: "Discovery", desc: "Stakeholder workshops, user interviews and technical audits to align on goals." },
//   { title: "Planning", desc: "Roadmap, prioritized backlog and architecture sketches with KPIs." },
//   { title: "UI/UX Design", desc: "User journeys, wireframes, and high-fidelity prototypes." },
//   { title: "Development", desc: "Agile sprints, code reviews, and continuous integration." },
//   { title: "Testing", desc: "Automated tests, security scans, and performance checks." },
//   { title: "Deployment", desc: "Canary or blue/green releases with monitoring and rollback plans." },
//   { title: "Maintenance", desc: "Ongoing support, monitoring, and feature improvements." }
// ];

// export default function ProcessSection() {
//   return (
//     <section id="process" className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
//       {/* Animated background gradient */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.1s' }}></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="space-y-4 mb-12">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
//             <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
//               How We Work
//             </span>
//           </h2>
//           <p className="text-base sm:text-lg text-zinc-400 max-w-2xl">
//             A transparent, iterative workflow that reduces risk and accelerates value.
//           </p>
//         </div>

//         {/* Process Steps Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {steps.map((s, i) => (
//             <div 
//               key={s.title} 
//               className="group relative bg-zinc-800/50 border border-zinc-700/50 rounded-2xl p-6 backdrop-blur-sm hover:bg-zinc-800/70 hover:border-zinc-600/50 transition-all duration-300"
//             >
//               {/* Hover glow effect */}
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              
//               <div className="relative flex gap-4 items-start">
//                 {/* Step number with gradient */}
//                 <div className="flex-shrink-0 relative">
//                   <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 group-hover:scale-110 transition-all duration-300">
//                     {i+1}
//                   </div>
//                   {/* Connector line for visual flow (except last item) */}
//                   {i < steps.length - 1 && i % 2 === 0 && (
//                     <div className="hidden md:block absolute top-12 left-1/2 w-0.5 h-8 bg-gradient-to-b from-zinc-700/50 to-transparent"></div>
//                   )}
//                 </div>

//                 {/* Step content */}
//                 <div className="flex-1">
//                   <h4 className="font-semibold text-lg text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
//                     {s.title}
//                   </h4>
//                   <p className="text-sm text-zinc-400 leading-relaxed">
//                     {s.desc}
//                   </p>
//                 </div>

//                 {/* Arrow icon for progression */}
//                 <svg 
//                   className="w-5 h-5 text-zinc-600 group-hover:text-blue-400 transition-colors duration-300 flex-shrink-0 mt-1" 
//                   fill="none" 
//                   stroke="currentColor" 
//                   viewBox="0 0 24 24"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                 </svg>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="mt-12 text-center">
//           <div className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-full backdrop-blur-sm">
//             <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//             <span className="text-sm text-zinc-300">Ready to start your project with our proven process?</span>
//             <a 
//               href="#contact" 
//               className="ml-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
//             >
//               Let's Talk →
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from 'react';
import { Search, Palette, Code, Rocket } from 'lucide-react';

const steps = [
  { 
    num: "01",
    icon: Search,
    title: "Discovery & Planning", 
    desc: "We start by understanding your vision, goals, and requirements through detailed consultation." 
  },
  { 
    num: "02",
    icon: Palette,
    title: "Design & Prototyping", 
    desc: "Creating wireframes, mockups, and interactive prototypes to visualize the solution." 
  },
  { 
    num: "03",
    icon: Code,
    title: "Development & Testing", 
    desc: "Building your application with clean code, thorough testing, and regular updates." 
  },
  { 
    num: "04",
    icon: Rocket,
    title: "Launch & Support", 
    desc: "Deploying to production and providing ongoing support and maintenance." 
  }
];

export default function ProcessSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 overflow-hidden" style={{
      backgroundColor: '#0d1117',
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
      `,
      backgroundSize: '50px 50px'
    }}>
      {/* Subtle overlay pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 20px 20px, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Our Process
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            A proven methodology that ensures your project is delivered on time,
            <br className="hidden sm:block" />
            within budget, and exceeds expectations.
          </p>
        </div>

        {/* Process Steps - Horizontal Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <div key={step.num} className="relative">
              {/* Connecting line between steps (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-[calc(50%+50px)] w-[calc(100%-100px)] h-[2px] bg-gray-700/30 z-0">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-600 rounded-full"></div>
                </div>
              )}
              
              <div className="relative z-10 text-center">
                {/* Number and Icon Container */}
                <div className="flex flex-col items-center mb-8">
                  {/* Large Number Circle */}
                  <div className="relative mb-4">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 flex items-center justify-center shadow-2xl">
                      <span className="text-4xl font-bold text-gray-900 tracking-tight">
                        {step.num}
                      </span>
                    </div>
                  </div>
                  
                  {/* Icon Circle Below */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 flex items-center justify-center shadow-xl  ">
                    <step.icon className="w-6 h-6 text-gray-900" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Title and Description */}
                <div className="px-2">
                  <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}