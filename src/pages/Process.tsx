import { motion } from "motion/react";
import { MessageSquare, Layers, Target, Cpu, TrendingUp, LifeBuoy, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ProcessPage = () => {
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
    "name": "How to Deploy AI Automation in Professional Services",
    "description": "Our standardized 6-step engineering flow for AI adoption.",
    "step": steps.map((s, i) => ({
      "@type": "HowToStep",
      "position": i + 1,
      "name": s.title,
      "text": s.desc
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
      <header className="pt-40 pb-20 bg-brand-light border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-widest mb-12 hover:text-brand-dark transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="max-w-4xl">
            <p className="text-brand-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-4">The Workflow</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
              What is the standardized process for deploying AI automation in a professional services environment?
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We execute a rigorous six-step engineering flow designed to move your firm from legacy operations to AI-native efficiency.
            </p>
          </div>
        </div>
      </header>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {steps.map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessPage;
