import { motion } from "motion/react";
import { ArrowLeft, Play, Cpu, Zap, Video, Sparkles, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const VideoGenPage = () => {
  const workflows = [
    {
      title: "Real Estate Local Business Commercial Generator",
      subtitle: "N8N Canvas Orchestration",
      desc: "Autonomous generation of local real estate advertisements using the latest multimodal AI models. Orchestrated on a custom N8N canvas for seamless data-to-video pipelines.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000",
      tags: ["N8N", "Real Estate", "Automation"],
      link: "#"
    },
    {
      title: "Auto-VSL Generator",
      subtitle: "E-Commerce & Product Marketing",
      desc: "Automated Video Sales Letter (VSL) generation for e-commerce stores. Converts product descriptions and features into high-converting video assets.",
      image: "https://h2t3s41br5.ufs.sh/f/tRwylxVK0I5PVxOiJQ0NcYCQvFdUTZaAn3r8BgWKu0491RIk",
      tags: ["VSL", "E-Commerce", "Conversion"],
      link: "https://h2t3s41br5.ufs.sh/f/tRwylxVK0I5PVxOiJQ0NcYCQvFdUTZaAn3r8BgWKu0491RIk"
    },
    {
      title: "What if? Reel Generator",
      subtitle: "Content Creator Suite",
      desc: "Generates viral 'What if?' style reels for social media platforms. Designed for content creators looking to scale their short-form video production.",
      image: "https://h2t3s41br5.ufs.sh/f/tRwylxVK0I5PGTLRtrH3SQlDAs4xEcWXfa5OrR9KC01dtwLU",
      tags: ["Reels", "Social Media", "Viral"],
      link: "https://h2t3s41br5.ufs.sh/f/tRwylxVK0I5PGTLRtrH3SQlDAs4xEcWXfa5OrR9KC01dtwLU"
    },
    {
      title: "Auto B-Roll Editor",
      subtitle: "Video Editor Efficiency",
      desc: "Intelligent B-roll selection and insertion for long-form video content. Reduces editing time by 70% by automatically matching visuals to spoken narrative.",
      image: "https://h2t3s41br5.ufs.sh/f/tRwylxVK0I5PLZUeZjl2BAWMl1gUDYCk95mzRIHpQEOdrqxK",
      tags: ["B-Roll", "Editing", "Workflow"],
      link: "https://h2t3s41br5.ufs.sh/f/tRwylxVK0I5PLZUeZjl2BAWMl1gUDYCk95mzRIHpQEOdrqxK"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="pt-40 pb-20 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold rounded-full blur-[150px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-widest mb-12 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl">
            <p className="text-brand-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-4">Creative Engineering</p>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8">
              Video Gen <span className="italic font-light">Automations</span> & <br /> Workflows.
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
              Explore our custom-engineered video generation pipelines. We bridge the gap between generative AI models and production-ready workflows for real estate, e-commerce, and content creators.
            </p>
          </div>
        </div>
      </header>

      {/* Workflows Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {workflows.map((w, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden bg-brand-light border border-brand-border mb-8">
                  <img 
                    src={w.image} 
                    alt={w.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 bg-brand-gold text-white rounded-full flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500">
                      <Play className="w-6 h-6 fill-current" />
                    </div>
                  </div>
                  <div className="absolute top-6 left-6 flex gap-2">
                    {w.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-dark text-[9px] font-bold uppercase tracking-widest rounded-full border border-brand-border">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="max-w-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-brand-light rounded-lg text-brand-gold">
                      <Video className="w-5 h-5" />
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">{w.subtitle}</p>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 tracking-tight group-hover:text-brand-gold transition-colors">{w.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {w.desc}
                  </p>
                  <a 
                    href={w.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-dark hover:gap-4 transition-all"
                  >
                    View Workflow <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Association */}
      <section className="py-32 bg-brand-light border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-brand-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8">The Engine</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-16">
            Powered by <span className="italic font-light">Advanced</span> Infrastructure.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Cpu />, name: "Nvidia H100s" },
              { icon: <Zap />, name: "N8N Orchestration" },
              { icon: <Sparkles />, name: "Stable Video Diffusion" },
              { icon: <Video />, name: "Custom FFmpeg Pipelines" }
            ].map((tech, i) => (
              <div key={i} className="p-8 bg-white rounded-2xl border border-brand-border flex flex-col items-center gap-4">
                <div className="text-brand-gold">{tech.icon}</div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-dark">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-brand-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
            Ready to <span className="italic font-light text-brand-gold">Automate</span> Your Production?
          </h2>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed">
            We build bespoke video generation systems tailored to your specific industry requirements. Reduce your production costs by up to 90%.
          </p>
          <Link to="/contact" className="inline-block bg-brand-gold text-white px-12 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all duration-500">
            Start Your Workflow
          </Link>
        </div>
      </section>
    </div>
  );
};

export default VideoGenPage;
