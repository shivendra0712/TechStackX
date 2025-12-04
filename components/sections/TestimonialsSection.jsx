import { testimonials } from "../../data/testimonials";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.3s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl">
            Real feedback from companies we've helped scale and succeed.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <div 
              key={t.name} 
              className="group relative bg-zinc-800/50 border border-zinc-700/50 rounded-2xl p-6 backdrop-blur-sm hover:bg-zinc-800/70 hover:border-zinc-600/50 transition-all duration-300"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              
              <div className="relative">
                {/* Quote icon */}
                <div className="absolute -top-2 -left-2 text-blue-500/20 text-4xl font-serif">"</div>
                
                {/* Client info */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <img 
                      src={t.photo} 
                      alt={t.name} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-zinc-700/50 group-hover:border-blue-500/50 transition-colors duration-300" 
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-zinc-400">{t.company}</div>
                  </div>
                </div>

                {/* Testimonial message */}
                <p className="text-sm text-zinc-300 leading-relaxed italic">
                  "{t.message}"
                </p>

                {/* Star rating decoration */}
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className="w-4 h-4 text-yellow-500/80" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}