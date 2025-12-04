

// "use client";

// import { useState } from "react";
// import { faq } from "../../data/faq";

// export default function FAQSection() {
//     const [openIndex, setOpenIndex] = useState(0); // First item open by default

//     const toggleFAQ = (index) => {
//         setOpenIndex(openIndex === index ? -1 : index);
//     };

//     return (
//         <section id="faq" className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
//             {/* Animated background gradient */}
//             <div className="absolute inset-0 opacity-30">
//                 <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
//                 <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.4s' }}></div>
//             </div>

//             <div className="relative max-w-7xl mx-auto">
//                 {/* Section Header */}
//                 <div className="space-y-4 mb-12">
//                     <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
//                         <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
//                             Frequently Asked Questions
//                         </span>
//                     </h2>
//                     <p className="text-base sm:text-lg text-zinc-400 max-w-2xl">
//                         Quick answers to common questions about our services and process.
//                     </p>
//                 </div>
//                 {/* FAQ Accordion */}
//                 <div className="space-y-4 max-w-5xl">
//                     {faq.map((item, index) => (
//                         <div
//                             key={index}
//                             className="group relative bg-zinc-800/30 border border-zinc-700/50 rounded-2xl backdrop-blur-sm overflow-hidden transition-all duration-300 hover:bg-zinc-800/50"
//                         >
//                             {/* Hover glow effect */}
//                             <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//                             {/* Question Header - Clickable */}
//                             <button
//                                 onClick={() => toggleFAQ(index)}
//                                 className="relative w-full flex items-center justify-between p-6 text-left focus:outline-none"
//                             >
//                                 <h3 className="font-semibold text-white text-base sm:text-lg pr-8 leading-relaxed">
//                                     {item.q}
//                                 </h3>

//                                 {/* Toggle Icon */}
//                                 <div className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-700/50 border border-zinc-600/50 flex items-center justify-center transition-all duration-300 group-hover:bg-zinc-600/50 group-hover:border-zinc-500/50">
//                                     <svg
//                                         className={`w-4 h-4 text-zinc-300 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
//                                         fill="none"
//                                         stroke="currentColor"
//                                         viewBox="0 0 24 24"
//                                     >
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                                     </svg>
//                                 </div>
//                             </button>

//                             {/* Answer - Collapsible */}
//                             <div
//                                 className={`relative overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//                                     }`}
//                             >
//                                 <div className="px-6 pb-6 pt-0">
//                                     <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
//                                         {item.a}
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* CTA Section */}
//                 <div className="mt-12 text-center">
//                     <p className="text-zinc-400 mb-4">Still have questions?</p>
//                     <a
//                         href="#contact"
//                         className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105"
//                     >
//                         <span className="relative z-10">Get in Touch</span>
//                         <svg className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                         </svg>
//                         <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                     </a>
//                 </div>
//             </div>
//         </section>
//     );
// }

"use client";

import { useState } from "react";
import { faq } from "../../data/faq";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.4s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl">
            Quick answers to common questions about our services and process.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 max-w-5xl">
          {faq.map((item, index) => (
            <div
              key={index}
              className="group relative bg-zinc-800/30 border border-zinc-700/50 rounded-2xl backdrop-blur-sm overflow-hidden transition-all duration-300 hover:bg-zinc-800/50"
            >
              {/* Hover glow effect — pointer-events-none so it doesn't block clicks */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              {/* Question Header - Clickable */}
              <button
                onClick={() => toggleFAQ(index)}
                className="relative w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                aria-expanded={openIndex === index}
                aria-controls={`faq-panel-${index}`}
              >
                <h3 className="font-semibold text-white text-base sm:text-lg pr-8 leading-relaxed">
                  {item.q}
                </h3>

                {/* Toggle Icon */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-700/50 border border-zinc-600/50 flex items-center justify-center transition-all duration-300 group-hover:bg-zinc-600/50 group-hover:border-zinc-500/50">
                  <svg
                    className={`w-4 h-4 text-zinc-300 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Answer - Collapsible */}
              <div
                id={`faq-panel-${index}`}
                className={`relative overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 pt-0">
                  <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-zinc-400 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 cursor-pointer"
          >
            <span className="relative z-10">Get in Touch</span>
            <svg className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </a>
        </div>
      </div>
    </section>
  );
}
