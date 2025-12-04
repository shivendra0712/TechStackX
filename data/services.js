import { Code, Palette, Database, Cloud, Smartphone, Search } from 'lucide-react';
export const services = [
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
    {
      icon: Code,
      title: "Product Strategy & Discovery",
      description: "Market research, roadmap, MVP specs.",
      included: [
        "Market Research & Analysis",
        "Product Roadmap Planning",
        "MVP Specification",
        "Competitive Analysis",
        "User Stories & Requirements",
        "Feature Prioritization"
      ],
      technologies: ["Miro", "Figma", "Jira", "Notion", "Google Analytics", "Mixpanel"]
    },
    {
      icon: Code,
      title: "Custom Web Development",
      description: "Enterprise-grade web apps optimized for performance.",
      included: [
        "Custom Web Applications",
        "Enterprise Solutions",
        "Performance Optimization",
        "Scalable Architecture",
        "Third-party Integrations",
        "Maintenance & Support"
      ],
      technologies: ["React", "Next.js", "Vue.js", "TypeScript", "Node.js", "GraphQL"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native & cross-platform apps with great UX.",
      included: [
        "Native iOS & Android",
        "Cross-platform Development",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
        "App Performance Tuning"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "App Store Connect"]
    },
    {
      icon: Cloud,
      title: "Cloud Architecture & Migration",
      description: "Design and migrate to cloud for scalability.",
      included: [
        "Cloud Strategy & Planning",
        "Infrastructure Design",
        "Migration Services",
        "Cost Optimization",
        "Multi-cloud Solutions",
        "Disaster Recovery"
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Terraform", "CloudFormation", "Kubernetes"]
    },
    {
      icon: Code,
      title: "DevOps & SRE",
      description: "CI/CD, automation, and reliability engineering.",
      included: [
        "CI/CD Pipeline Setup",
        "Infrastructure Automation",
        "Monitoring & Alerting",
        "Site Reliability Engineering",
        "Performance Optimization",
        "Incident Management"
      ],
      technologies: ["Jenkins", "GitHub Actions", "Docker", "Kubernetes", "Prometheus", "Grafana"]
    },
    {
      icon: Database,
      title: "Data Engineering & Analytics",
      description: "Pipelines, warehousing and dashboards.",
      included: [
        "Data Pipeline Development",
        "Data Warehousing",
        "ETL/ELT Processes",
        "Analytics Dashboards",
        "Real-time Data Processing",
        "Data Quality Management"
      ],
      technologies: ["Apache Spark", "Airflow", "Snowflake", "BigQuery", "Tableau", "Power BI"]
    },
    {
      icon: Code,
      title: "Security & Compliance",
      description: "Audits, pen testing, and regulation support.",
      included: [
        "Security Audits",
        "Penetration Testing",
        "Compliance Assessment",
        "GDPR & HIPAA Support",
        "Vulnerability Management",
        "Security Training"
      ],
      technologies: ["OWASP", "Burp Suite", "Metasploit", "AWS Security", "SSL/TLS", "IAM"]
    }
  ];