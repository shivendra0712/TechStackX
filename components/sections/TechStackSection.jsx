

// import { techstack } from "../../data/techstack";

// function TechList({ title, items }) {
//   return (
//     <div className="space-y-4">
//       <h4 className="text-lg font-semibold text-white">{title}</h4>
//       <div className="flex flex-wrap gap-3">
//         {items.map(i => (
//           <div 
//             key={i.name} 
//             className="group relative bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-3 backdrop-blur-sm hover:bg-zinc-800/70 hover:border-zinc-600/50 transition-all duration-300"
//           >
//             {/* Hover glow effect */}
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            
//             <div className="relative">
//               <div className="text-sm font-medium text-white">{i.name}</div>
//               <div className="text-xs text-zinc-400 mt-1">{i.desc}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function TechStackSection() {
//   return (
//     <section id="tech" className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
//       {/* Animated background gradient */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute top-0 right-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.2s' }}></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="space-y-4 mb-12">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
//             <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
//               Our Technology Stack
//             </span>
//           </h2>
//           <p className="text-base sm:text-lg text-zinc-400 max-w-2xl">
//             Proven, scalable technologies we use to build reliable products.
//           </p>
//         </div>

//         {/* Tech Stack Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <TechList title="Frontend" items={techstack.frontend} />
//           <TechList title="Backend" items={techstack.backend} />
//           <TechList title="Mobile" items={techstack.mobile} />
//           <TechList title="Cloud" items={techstack.cloud} />
//           <TechList title="DevOps" items={techstack.devops} />
//           <TechList title="Security" items={techstack.security} />
//         </div>
//       </div>
//     </section>
//   );
// }