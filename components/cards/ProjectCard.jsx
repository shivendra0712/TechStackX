export default function ProjectCard({ project }) {
  return (
    <article className="group relative bg-zinc-800/50 border border-zinc-700/50 rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-zinc-800/70 hover:border-zinc-600/50 transition-all duration-300">
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
      
      <div className="relative">
        {/* Project Image */}
        <div className="relative overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
          
          {/* Category badge (optional - add category to your project data) */}
          <div className="absolute top-4 left-4 px-3 py-1 bg-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 rounded-full text-xs text-zinc-300">
            {project.category || 'Web App'}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>
          
          {/* Summary */}
          <p className="text-sm mt-2 text-zinc-400 leading-relaxed line-clamp-2">
            {project.summary}
          </p>

          {/* Tech Stack */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.slice(0, 3).map((tech, i) => (
              <span 
                key={i}
                className="px-2 py-1 text-xs bg-zinc-900/50 border border-zinc-700/50 rounded-md text-zinc-300"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="px-2 py-1 text-xs text-zinc-500">
                +{project.tech.length - 3} more
              </span>
            )}
          </div>

          {/* CTA Link */}
          <div className="mt-6">
            <a 
              href={project.link || "#"} 
              className="group/link inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              View case study
              <svg 
                className="w-4 h-4 transition-transform group-hover/link:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}