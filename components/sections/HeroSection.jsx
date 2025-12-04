// import Button from "../ui/Button";

// export default function HeroSection() {
//   return (
//     <section id="top" className="pt-24 pb-16">
//       <div className="container grid md:grid-cols-2 items-center gap-8">
//         <div>
//           <h1 className="text-4xl md:text-5xl font-bold leading-tight">Delivering Scalable Software & Cloud Solutions That Grow With Your Business</h1>
//           <p className="mt-4 text-slate-600 max-w-xl">Product-grade engineering, fast delivery, and measurable outcomes. We design, build, and operate web & mobile applications for startups and enterprises.</p>

//           <div className="mt-6 flex gap-3">
//             <Button href="#contact">Get a Free Consultation</Button>
//             <a href="#projects" className="inline-block px-4 py-2 rounded-md text-sm border border-slate-200">See Our Work</a>
//           </div>

//           <div className="mt-6 flex gap-6 text-sm text-slate-600">
//             <div><strong>10+</strong> years experience</div>
//             <div><strong>100+</strong> clients</div>
//             <div><strong>200+</strong> projects</div>
//           </div>
//         </div>

//         <div className="hidden md:block">
//           <div className="w-full h-72 bg-gradient-to-br from-slate-100 to-slate-50 rounded-lg flex items-center justify-center">
//             <div className="text-center text-slate-500">Hero illustration / image</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


 
"use client";
import { useEffect, useState } from 'react';

function Button({ href, children }) {
  return (
    <a 
      href={href}
      className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105"
    >
      <span className="relative z-10">{children}</span>
      <svg className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </a>
  );
}

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = document.getElementById('hero-visual')?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="top" className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12 lg:gap-16">
        {/* Content */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800/50 border border-zinc-700/50 rounded-full backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-zinc-300">Available for new projects</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Delivering Scalable
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Software & Cloud Solutions
            </span>
            <br />
            <span className="text-white">
              That Grow With Your Business
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed">
            Product-grade engineering, fast delivery, and measurable outcomes. We design, build, and operate web & mobile applications for startups and enterprises.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="#contact">Get a Free Consultation</Button>
            <a 
              href="#projects" 
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-600 hover:bg-zinc-800/50 transition-all duration-300"
            >
              See Our Work
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 pt-4">
            {[
              { value: '1+', label: 'Years Experience' },
              { value: '3+', label: 'Clients' },
              { value: '4+', label: 'Projects' },
            ].map((stat, i) => (
              <div key={i} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-zinc-500 mt-1">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="relative hidden lg:block">
          <div 
            id="hero-visual"
            className="relative w-full   bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-2xl border border-zinc-700/50 overflow-hidden backdrop-blur-sm"
            // style={{
            //   transform: `perspective(1000px) rotateY(${(mousePosition.x - 0.5) * 5}deg) rotateX(${(mousePosition.y - 0.5) * -5}deg)`,
            //   transition: 'transform 0.1s ease-out',
            // }}
          >
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-20 h-full w-full" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}></div>

           <img className='object-cover bg-amber-300' src="/images/person.webp" alt="" />
          </div>

          {/* Decorative dots */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}