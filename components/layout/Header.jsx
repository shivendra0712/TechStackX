// export default function Header() {
//   const links = [
//     { href: "#top", label: "Home" },
//     { href: "#services", label: "Services" },
//     { href: "#projects", label: "Projects" },
//     { href: "#contact", label: "Contact" },
//   ];

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur">
//       <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
//         <div className="logo">YourCompany</div>
//         <ul className="flex gap-6">
//           {links.map(l => (
//             <li key={l.href}>
//               <a href={l.href} className="hover:underline">{l.label}</a>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// }


"use client";
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#top');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: "#top", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-zinc-900/95 backdrop-blur-xl border-b border-zinc-800/50 shadow-lg' 
          : 'bg-zinc-900/95 backdrop-blur-xl'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          {/* <div className="relative">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center font-bold text-white text-xs sm:text-sm shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-300 group-hover:scale-110">
              Y
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
          </div> */}
          <span className="text-base sm:text-lg font-semibold text-white tracking-tight">
            TechStackX
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1 bg-zinc-800/50 rounded-full px-2 py-2 border border-zinc-700/50 backdrop-blur-sm">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setActiveSection(l.href)}
                className={`relative block px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === l.href
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {activeSection === l.href && (
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30"></span>
                )}
                <span className="relative z-10">{l.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-300 hover:text-white transition-colors rounded-lg hover:bg-zinc-800/50"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-96 border-t border-zinc-800/50' : 'max-h-0'
        }`}
      >
        <ul className="px-4 py-4 space-y-1 bg-zinc-900/95 backdrop-blur-xl">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => {
                  setActiveSection(l.href);
                  setMobileMenuOpen(false);
                }}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === l.href
                    ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}