import { motion } from "motion/react";
import { 
  Cpu, 
  Layers, 
  Zap, 
  ShieldCheck, 
  ArrowUpRight, 
  ChevronRight, 
  Mail, 
  MapPin, 
  Linkedin,
  Menu,
  X,
  Search,
  Users,
  TrendingUp,
  MessageSquare,
  Target,
  LifeBuoy,
  Lock,
  Shield,
  BookOpen,
  Video
} from "lucide-react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Security from "./pages/Security";
import TechStack from "./pages/TechStack";
import ServicesPage from "./pages/Services";
import ProcessPage from "./pages/Process";
import SolutionsPage from "./pages/Solutions";
import PricingPage from "./pages/Pricing";
import ContactPage from "./pages/Contact";
import InsightsPage from "./pages/Insights";
import FAQPage from "./pages/FAQ";
import VideoGenPage from "./pages/VideoGen";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = location.pathname === "/security" || location.pathname === "/contact";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Process", path: "/process" },
    { name: "Solutions", path: "/solutions" },
    { name: "Pricing", path: "/pricing" },
    { name: "Video Gen", path: "/video-gen" },
    { name: "Insights", path: "/insights" },
    { name: "Tech Stack", path: "/tech-stack" },
    { name: "Security", path: "/security" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "py-4 glass-card" : `py-8 ${isDark ? "bg-brand-dark/50" : "bg-transparent"}`}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-dark flex items-center justify-center rounded-sm">
            <span className="text-brand-gold font-serif text-xl font-bold">C</span>
          </div>
          <span className={`font-serif text-2xl tracking-tighter font-bold hidden sm:block ${isDark ? "text-white" : "text-brand-dark"}`}>CROWNE</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link 
            to="/contact" 
            className="hidden sm:block bg-brand-dark text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-brand-gold transition-all duration-300"
          >
            Enquire Now
          </Link>
          <button 
            className={`p-2 rounded-sm transition-colors ${isDark ? "text-white hover:bg-white/10" : "text-brand-dark hover:bg-brand-light"}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Full Screen Mobile/Burger Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed inset-0 bg-brand-dark z-[60] flex flex-col p-12"
        >
          <div className="flex justify-between items-center mb-20">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white flex items-center justify-center rounded-sm">
                <span className="text-brand-dark font-serif text-xl font-bold">C</span>
              </div>
              <span className="font-serif text-2xl tracking-tighter font-bold text-white">CROWNE</span>
            </Link>
            <button onClick={() => setIsMenuOpen(false)} className="text-white">
              <X className="w-10 h-10" />
            </button>
          </div>

          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl md:text-6xl font-bold text-white hover:text-brand-gold transition-colors tracking-tighter"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto pt-12 border-t border-white/10">
            <Link 
              to="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className="inline-block bg-brand-gold text-white px-12 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all duration-500"
            >
              Start Your Project
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 md:pt-40 overflow-hidden grid-bg">
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
            </span>
            Engineering Excellence in Australia
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8">
            AI SYSTEMS <br />
            <span className="italic font-light text-brand-gold">CRAFTED</span> FOR <br />
            PROFESSIONALS.
          </h1>
          <p className="text-lg text-gray-600 max-w-lg mb-10 leading-relaxed">
            Bespoke automation and software integration for Australian professional services. 
            We bridge the gap between legacy operations and the future of AI through human-centric engineering.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="group bg-brand-dark text-white px-8 py-4 text-sm font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-brand-gold transition-all duration-500">
              View Solutions
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <button className="px-8 py-4 text-sm font-bold uppercase tracking-widest border border-brand-border hover:border-brand-dark transition-all duration-300">
              Our Process
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 aspect-square rounded-2xl overflow-hidden border border-brand-border shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522071823991-b99c223a7097?auto=format&fit=crop&q=80&w=1000" 
              alt="Crowne Engineering Team Collaboration" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-xl">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-brand-gold font-bold mb-1">Our Engineering Hub</p>
                  <h3 className="text-xl font-serif font-bold text-brand-dark">Melbourne HQ Collaboration</h3>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-mono font-bold">12+</p>
                  <p className="text-[10px] uppercase tracking-widest opacity-60">Senior Engineers</p>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-brand-gold/5 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

const LogoGrid = () => {
  const partners = [
    { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
    { name: "Anthropic", logo: "https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg" },
    { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Azure", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
    { name: "Google Cloud", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
    { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" }
  ];

  return (
    <div className="py-20 border-y border-brand-border bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold mb-12">Integrated with Industry Standards</p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-12 items-center">
          {partners.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
            >
              <img 
                src={p.logo} 
                alt={p.name} 
                className="h-8 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const pillars = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Discovery",
      subtitle: "The Audit Phase",
      desc: "Deep-dive analysis of your current technical debt and operational bottlenecks to identify high-impact AI opportunities.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Engage",
      subtitle: "The Integration Phase",
      desc: "Seamlessly embedding custom AI interfaces into your existing professional workflows without disrupting day-to-one operations.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-100"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Apply AI",
      subtitle: "The Automation Phase",
      desc: "Deploying production-ready LLM agents and autonomous systems that handle complex reasoning and data extraction tasks.",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-100"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Governance",
      subtitle: "The Security Phase",
      desc: "Implementing enterprise-grade guardrails and compliance frameworks tailored for Australian professional standards.",
      color: "text-violet-600",
      bgColor: "bg-violet-50",
      borderColor: "border-violet-100"
    }
  ];

  return (
    <section id="services" className="py-32 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 max-w-4xl">
          <p className="text-brand-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Our Methodology</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">
            How does our methodology ensure scalable AI adoption for professional firms?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-12">
            Our four-pillar framework—Discovery, Engage, Apply AI, and Governance—systematically identifies operational bottlenecks, integrates custom interfaces, deploys production-ready LLM agents, and establishes enterprise-grade security guardrails. This structured approach mitigates technical debt while ensuring all AI implementations align with Australian professional standards and firm-wide strategic objectives.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((p, i) => (
            <article 
              key={i} 
              className={`p-8 rounded-2xl border ${p.borderColor} ${p.bgColor} transition-all duration-500 hover:shadow-xl hover:-translate-y-1`}
            >
              <div className={`w-12 h-12 ${p.color} bg-white flex items-center justify-center rounded-xl shadow-sm mb-8`}>
                {p.icon}
              </div>
              <p className={`text-[10px] font-bold uppercase tracking-widest ${p.color} mb-2`}>{p.subtitle}</p>
              <h3 className="text-2xl font-bold mb-4 text-brand-dark">{p.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {p.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: "Annual Client Savings", value: "$2.4M+", prefix: "" },
    { label: "Efficiency Increase", value: "92", suffix: "%" },
    { label: "Hours Automated Yearly", value: "15k+", suffix: "" },
    { label: "Data Sovereignty", value: "100", suffix: "%" }
  ];

  return (
    <section className="py-24 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((s, i) => (
            <div key={i} className="text-center lg:text-left">
              <p className="text-6xl md:text-7xl font-black tracking-tighter mb-2 text-brand-gold">
                {s.prefix}{s.value}{s.suffix}
              </p>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudies = () => {
  const projects = [
    {
      client: "Tier-1 National Law Firm",
      problem: "Manual document review and discovery taking 40+ hours per week per associate, causing significant burnout and billing leakage.",
      system: "Custom RAG-based LLM agent integrated with Clio and SharePoint for semantic search and automated drafting.",
      result: "Review time reduced from 40 hours to 4 hours per case. 90% efficiency gain. $1.2M recovered in billable capacity annually.",
      improvement: "90%"
    },
    {
      client: "Boutique Wealth Management",
      problem: "Client onboarding processing delay of 5 days due to manual data entry and complex compliance verification.",
      system: "Intelligent Document Processing (IDP) pipeline using GPT-4o vision for automated KYC/AML verification.",
      result: "Onboarding time reduced from 5 days to 2 hours. 98% faster processing. Error rate reduced from 12% to <1%.",
      improvement: "98%"
    }
  ];

  return (
    <section id="solutions" className="py-32 bg-brand-light scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 max-w-4xl">
          <p className="text-brand-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Case Studies</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">
            What quantified results can professional firms expect from bespoke AI system integration?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-12">
            Bespoke AI systems typically deliver 90% to 98% efficiency gains in document-heavy workflows, such as legal discovery or client onboarding. By automating high-frequency manual tasks, firms recover significant billable capacity—often exceeding $1.2M annually—while reducing error rates from double digits to less than 1% through intelligent document processing.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((p, i) => (
            <article key={i} className="bg-white p-12 rounded-3xl border border-brand-border shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-8 border-b border-brand-border pb-4">
                  Project: {p.client}
                </h3>
                
                <div className="space-y-8">
                  <section>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">Problem</h4>
                    <p className="text-gray-700 leading-relaxed">{p.problem}</p>
                  </section>

                  <section>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">System Built</h4>
                    <p className="font-mono text-sm text-brand-dark bg-brand-light p-4 rounded-lg border border-brand-border">
                      {p.system}
                    </p>
                  </section>

                  <section>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">Quantified Result</h4>
                    <p className="text-xl font-serif font-bold text-brand-dark mb-4">{p.result}</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold">
                      <TrendingUp className="w-4 h-4" />
                      {p.improvement} Improvement
                    </div>
                  </section>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      title: "Discovery Meeting",
      desc: "Initial consultation to map operational bottlenecks and AI readiness across your firm.",
      icon: <MessageSquare className="w-5 h-5" />
    },
    {
      title: "Engage: Strategic",
      desc: "High-level roadmap development and architectural planning for enterprise-wide AI adoption.",
      icon: <Layers className="w-5 h-5" />
    },
    {
      title: "Engage: Targeted",
      desc: "Focused pilot programs to prove value in specific high-impact professional workflows.",
      icon: <Target className="w-5 h-5" />
    },
    {
      title: "Apply AI",
      desc: "Full-scale deployment of custom LLM agents and production-ready automation pipelines.",
      icon: <Cpu className="w-5 h-5" />
    },
    {
      title: "Optimize",
      desc: "Continuous monitoring and refinement of model performance, accuracy, and latency.",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      title: "Support",
      desc: "Ongoing engineering support and governance updates for evolving Australian standards.",
      icon: <LifeBuoy className="w-5 h-5" />
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How We Work: The Crowne AI Automation Flow",
    "description": "Our standardized 6-step process for integrating AI into professional services.",
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.title,
      "itemListElement": [{
        "@type": "HowToDirection",
        "text": step.desc
      }]
    }))
  };

  return (
    <section id="process" className="py-32 bg-white border-t border-brand-border scroll-mt-24">
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
      
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 text-center max-w-4xl mx-auto">
          <p className="text-brand-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4">The Workflow</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">
            What is the standardized process for deploying AI automation in a professional services environment?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-12">
            We execute a rigorous six-step engineering flow starting with a Discovery Meeting to map bottlenecks, followed by Strategic and Targeted engagement phases. We then Apply AI through full-scale deployment, Optimize model performance for accuracy and latency, and provide ongoing Support to ensure long-term compliance with evolving Australian regulatory frameworks.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {steps.map((s, i) => (
            <div key={i} className="relative group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-light border border-brand-border rounded-full flex items-center justify-center font-mono text-sm font-bold group-hover:bg-brand-dark group-hover:text-white transition-all duration-300">
                  0{i + 1}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-brand-gold">{s.icon}</div>
                    <h3 className="text-xl font-bold tracking-tight">{s.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-6 top-6 w-12 h-px bg-brand-border"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const tiers = [
    {
      name: "Targeted Pilot",
      build: "$10,000",
      monthly: "$1,500",
      payback: "3 Months",
      example: "Lead automation system: $10k build → saves $3.5k/month in manual labor.",
      features: ["Single Workflow Automation", "Custom LLM Integration", "Monthly Performance Tuning", "Australian Data Sovereignty"]
    },
    {
      name: "Strategic Core",
      build: "$25,000",
      monthly: "$3,500",
      payback: "4.5 Months",
      example: "Legal Discovery Agent: $25k build → recovers $7k/month in billable capacity.",
      features: ["Multi-System Integration", "Advanced RAG Architecture", "Weekly Optimization Sprints", "Enterprise Governance Pack"]
    },
    {
      name: "Enterprise Scale",
      build: "Custom",
      monthly: "Variable",
      payback: "6 Months Avg.",
      example: "Firm-wide AI OS: Replaces $250k/year in legacy software & manual overhead.",
      features: ["Full Operational Automation", "Private Model Hosting", "Dedicated Engineering Support", "Performance-Based Incentives"]
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 max-w-4xl">
          <p className="text-brand-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4">The Investment</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">
            How is the investment for AI automation structured to ensure a positive return?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-12">
            Our pricing model replaces traditional licensing with an ROI-based framework consisting of a fixed build cost and a monthly optimization fee. This structure ensures that systems pay for themselves within three to six months by directly reducing manual labor costs or recovering lost billable hours, providing a clear financial payback period.
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((t, i) => (
            <article key={i} className="p-10 rounded-3xl border border-brand-border flex flex-col justify-between hover:border-brand-gold transition-all duration-500">
              <div>
                <h3 className="text-xl font-bold mb-6 text-brand-dark">{t.name}</h3>
                
                <div className="space-y-6 mb-10">
                  <div className="flex justify-between items-end border-b border-brand-border pb-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Fixed Build Cost</p>
                      <p className="text-3xl font-black tracking-tighter">{t.build}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Monthly Opt.</p>
                      <p className="text-lg font-bold">{t.monthly}</p>
                    </div>
                  </div>

                  <div className="bg-brand-gold/5 p-4 rounded-xl border border-brand-gold/10">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-brand-gold mb-1">System Payback Period</p>
                    <p className="text-2xl font-serif font-bold italic">{t.payback}</p>
                  </div>

                  <div className="bg-brand-light p-4 rounded-xl border border-brand-border">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">ROI Example</p>
                    <p className="text-sm font-medium leading-relaxed italic">"{t.example}"</p>
                  </div>
                </div>

                <ul className="space-y-4 mb-10">
                  {t.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-brand-gold rounded-full"></div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full py-4 bg-brand-dark text-white text-xs font-bold uppercase tracking-widest hover:bg-brand-gold transition-all duration-300">
                Select Framework
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section id="contact" className="py-32 bg-brand-dark text-white relative overflow-hidden scroll-mt-24">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold rounded-full blur-[120px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <p className="text-brand-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8">Ready to Evolve?</p>
        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-12">
          LET'S BUILD THE <br />
          <span className="italic font-light">FUTURE</span> TOGETHER.
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link to="/contact" className="bg-brand-gold text-white px-12 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all duration-500">
            Book a Consultation
          </Link>
          <Link to="/contact" className="border border-white/20 px-12 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all duration-300">
            Contact Engineering
          </Link>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-brand-dark flex items-center justify-center rounded-sm">
                <span className="text-brand-gold font-serif text-lg font-bold">C</span>
              </div>
              <span className="font-serif text-xl tracking-tighter font-bold">CROWNE</span>
            </div>
            <p className="text-gray-500 max-w-sm text-sm leading-relaxed mb-8">
              Crowne Assistant Systems & Consulting. <br />
              Premium AI automation and software integration for Australian professional services.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-brand-border flex items-center justify-center rounded-full hover:border-brand-dark transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-brand-border flex items-center justify-center rounded-full hover:border-brand-dark transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-8">Locations</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>Melbourne, VIC <br /> Engineering Hub</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>Hobart, TAS <br /> Consulting Office</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/" className="hover:text-brand-dark transition-colors">Home</Link></li>
              <li><Link to="/insights" className="hover:text-brand-dark transition-colors font-bold text-brand-gold">2026 Insights Roadmap</Link></li>
              <li><Link to="/video-gen" className="hover:text-brand-dark transition-colors">Video Gen Automations</Link></li>
              <li><Link to="/faq" className="hover:text-brand-dark transition-colors">Frequently Asked Questions</Link></li>
              <li><Link to="/tech-stack" className="hover:text-brand-dark transition-colors">Our Tech Stack</Link></li>
              <li><Link to="/security" className="hover:text-brand-dark transition-colors">Security & Trust Pack</Link></li>
              <li><Link to="/services" className="hover:text-brand-dark transition-colors">Services</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-brand-border gap-6">
          <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
            © {new Date().getFullYear()} Crowne Assistant Systems. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">ABN: 12 345 678 910</span>
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Made in Australia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Home = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://crowne.systems/#organization",
        "name": "Crowne Assistant Systems",
        "url": "https://crowne.systems",
        "logo": "https://crowne.systems/logo.png",
        "sameAs": [
          "https://linkedin.com/company/crowne-systems"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+61-3-0000-0000",
          "contactType": "customer service",
          "areaServed": "AU",
          "availableLanguage": "en"
        }
      },
      {
        "@type": "Service",
        "name": "AI Automation & Software Integration",
        "provider": { "@id": "https://crowne.systems/#organization" },
        "serviceType": "AI Engineering",
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "description": "Bespoke AI systems and autonomous agents crafted for Australian professional services firms."
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
      <Hero />
      <LogoGrid />
      <Stats />
      <CaseStudies />
      <CTA />
    </>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/security" element={<Security />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/video-gen" element={<VideoGenPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
