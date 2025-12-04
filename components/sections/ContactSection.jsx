"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", company: "", projectType: "", budget: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    if (!form.name || !form.email || !form.projectType || !form.message) {
      alert("Please fill in all required fields");
      return;
    }
    console.log("Lead:", form);
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  }

  return (
    <section id="contact" className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Let's Connect
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-3xl mx-auto">
            Ready to bring your vision to life? Get in touch with us to discuss your project and discover how we can help you achieve your goals.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Side - Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">Get In Touch</h3>
              
              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-zinc-800/50 border border-zinc-700/50 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Location</h4>
                    <p className="text-zinc-400 text-sm">Remote & Global</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-zinc-800/50 border border-zinc-700/50 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Response Time</h4>
                    <p className="text-zinc-400 text-sm">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              <div className="relative bg-zinc-800/50 border border-zinc-700/50 rounded-2xl p-6 backdrop-blur-sm">
                <h4 className="text-lg font-semibold text-white mb-4">Why Choose TechStackX?</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-zinc-300">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>100% Client Satisfaction Rate</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-300">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Fast Turnaround Times</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-300">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Modern Technology Stack</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-300">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Ongoing Support & Maintenance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:col-span-3">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              <div className="relative bg-zinc-800/50 border border-zinc-700/50 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Start Your Project</h3>
                
                <div className="space-y-4">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-zinc-400 mb-2">
                        Name <span className="text-red-400">*</span>
                      </label>
                      <input 
                        name="name" 
                        value={form.name} 
                        onChange={handleChange} 
                        placeholder="Your full name" 
                        className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700/50 rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/50 transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-zinc-400 mb-2">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input 
                        name="email" 
                        type="email"
                        value={form.email} 
                        onChange={handleChange} 
                        placeholder="your@email.com" 
                        className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700/50 rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/50 transition-colors duration-300"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm text-zinc-400 mb-2">Company</label>
                    <input 
                      name="company" 
                      value={form.company} 
                      onChange={handleChange} 
                      placeholder="Your company name" 
                      className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700/50 rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/50 transition-colors duration-300"
                    />
                  </div>

                  {/* Project Type and Budget Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-zinc-400 mb-2">
                        Project Type <span className="text-red-400">*</span>
                      </label>
                      <select 
                        name="projectType" 
                        value={form.projectType} 
                        onChange={handleChange} 
                        className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700/50 rounded-lg text-white focus:outline-none focus:border-blue-500/50 transition-colors duration-300 appearance-none"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23a1a1aa'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 0.75rem center',
                          backgroundSize: '1.25rem'
                        }}
                      >
                        <option value="" className="bg-zinc-900">Select project type</option>
                        <option value="web" className="bg-zinc-900">Web Development</option>
                        <option value="mobile" className="bg-zinc-900">Mobile App</option>
                        <option value="design" className="bg-zinc-900">UI/UX Design</option>
                        <option value="other" className="bg-zinc-900">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-zinc-400 mb-2">Budget Range</label>
                      <select 
                        name="budget" 
                        value={form.budget} 
                        onChange={handleChange} 
                        className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700/50 rounded-lg text-white focus:outline-none focus:border-blue-500/50 transition-colors duration-300 appearance-none"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23a1a1aa'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 0.75rem center',
                          backgroundSize: '1.25rem'
                        }}
                      >
                        <option value="" className="bg-zinc-900">Select budget range</option>
                        <option value="<5k" className="bg-zinc-900">&lt;$5k</option>
                        <option value="5-20k" className="bg-zinc-900">$5k–$20k</option>
                        <option value="20-100k" className="bg-zinc-900">$20k–$100k</option>
                        <option value="100k+" className="bg-zinc-900">$100k+</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-sm text-zinc-400 mb-2">
                      Project Details <span className="text-red-400">*</span>
                    </label>
                    <textarea 
                      name="message" 
                      value={form.message} 
                      onChange={handleChange} 
                      placeholder="Tell us about your project, goals, and requirements..." 
                      rows="5" 
                      className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700/50 rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/50 transition-colors duration-300 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button 
                    onClick={handleSubmit}
                    className="w-full group relative inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-zinc-900 text-base font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-white/20 hover:scale-[1.02]"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <span>Send Message</span>
                  </button>

                  {sent && (
                    <div className="flex items-center gap-2 text-sm text-green-400 bg-green-500/10 border border-green-500/20 rounded-lg p-3 animate-pulse">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Thanks — we received your message. We'll contact you shortly.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}