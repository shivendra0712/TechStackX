// import { projects } from "../../data/projects";
// import ProjectCard from "../cards/ProjectCard";

// export default function ProjectsSection() {
//   return (
//     <section id="projects" className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
//       {/* Animated background gradient */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="space-y-4 mb-12">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
//             <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
//               Selected Projects
//             </span>
//           </h2>
//           <p className="text-base sm:text-lg text-zinc-400 max-w-2xl">
//             A handpicked showcase of recent work — problems, approach, and measurable outcomes.
//           </p>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map(p => <ProjectCard key={p.slug} project={p} />)}
//         </div>

//         {/* CTA Link */}
//         <div className="mt-12 text-center">
//           <a 
//             href="#projects" 
//             className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors duration-300"
//           >
//             View Case Studies
//             <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//             </svg>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

import { projects } from "../../data/projects";
import ProjectCard from "../cards/ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Selected Projects
            </span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl">
            A handpicked showcase of recent work — problems, approach, and measurable outcomes.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => <ProjectCard key={p.slug} project={p} />)}
        </div>

        {/* CTA Link */}
        {/* <div className="mt-12 text-center">
          <a 
            href="#projects" 
            className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors duration-300"
          >
            View Case Studies
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div> */}
      </div>
    </section>
  );
}