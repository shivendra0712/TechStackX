import React from 'react';
import { Code, Palette, Database, Cloud, Smartphone, Search } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Complete web applications from frontend to backend, built with modern frameworks and best practices.",
    included: [
      "React & Next.js Applications",
      "Node.js Backend Development",
      "RESTful API Design",
      "Database Architecture",
      "Authentication Systems",
      "Real-time Features"
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "MongoDB"]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that users love, backed by solid user experience principles.",
    included: [
      "User Interface Design",
      "User Experience Research",
      "Wireframing & Prototyping",
      "Design Systems",
      "Responsive Design",
      "Accessibility Standards"
    ],
    technologies: ["Figma", "Adobe Creative Suite", "Tailwind CSS", "Framer Motion", "CSS3", "HTML5"]
  },
  {
    icon: Database,
    title: "Backend & APIs",
    description: "Robust server architectures and APIs that scale with your business needs.",
    included: [
      "RESTful API Development",
      "GraphQL Implementation",
      "Database Design & Optimization",
      "Third-party Integrations",
      "Payment Processing",
      "Data Migration Services"
    ],
    technologies: ["Express.js", "Fastify", "GraphQL", "PostgreSQL", "Redis", "Docker"]
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment strategies for modern applications.",
    included: [
      "Cloud Architecture Design",
      "CI/CD Pipeline Setup",
      "Container Orchestration",
      "Monitoring & Analytics",
      "Performance Optimization",
      "Security Implementation"
    ],
    technologies: ["AWS", "Vercel", "Docker", "GitHub Actions", "Terraform", "Kubernetes"]
  },
  {
    icon: Smartphone,
    title: "Mobile-First Development",
    description: "Responsive web applications that work perfectly across all devices and screen sizes.",
    included: [
      "Progressive Web Apps (PWA)",
      "Mobile-Responsive Design",
      "Touch-Friendly Interfaces",
      "Offline Functionality",
      "Performance Optimization",
      "Cross-Browser Compatibility"
    ],
    technologies: ["PWA", "Service Workers", "Responsive Design", "Mobile Testing", "Touch Events", "Webkit"]
  },
   {
      icon: Search,
      title: "SEO & Performance",
      description: "Optimized applications that rank well in search engines and load lightning-fast.",
      included: [
        "Technical SEO Optimization",
        "Performance Auditing",
        "Core Web Vitals",
        "Page Speed Optimization",
        "Meta Tags & Schema",
        "Analytics Integration"
      ],
      technologies: ["Next.js SEO", "Lighthouse", "Google Analytics", "Search Console", "GTM", "Structured Data"]
    },
  
];

const ServiceCard = ({ icon: Icon, title, description, included, technologies }) => {
  return (
    <div className="group relative bg-zinc-800/50 border border-zinc-700/50 rounded-2xl p-8 backdrop-blur-sm hover:bg-zinc-800/70 hover:border-zinc-600/50 transition-all duration-300">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
      
      <div className="relative">
        {/* Icon and Header */}
        <div className="flex items-start gap-6 mb-6">
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-4 rounded-xl flex-shrink-0 border border-zinc-700/50 group-hover:border-blue-500/50 transition-colors duration-300">
            <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-zinc-400 text-base leading-relaxed">{description}</p>
          </div>
        </div>

        {/* What's Included */}
        <div className="mb-6">
          <h4 className="text-lg font-bold text-white mb-3">What's Included:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {included.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <svg className="w-5 h-5 text-zinc-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-zinc-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="text-lg font-bold text-white mb-3">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-zinc-700/50 text-zinc-300 px-3 py-1.5 rounded-full text-sm font-medium hover:bg-zinc-700 transition-colors duration-200 border border-zinc-600/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              What We Offer
            </span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl">
            End-to-end IT services tailored to your product needs — pick what you need or partner across the lifecycle.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* CTA Button */}
        {/* <div className="flex justify-center">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Get Service Quote
          </a>
        </div> */}
      </div>
    </section>
  );
}