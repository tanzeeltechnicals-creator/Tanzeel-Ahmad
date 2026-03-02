import { motion } from "motion/react";
import { 
  Cpu, 
  Database, 
  Zap, 
  Layers, 
  Globe, 
  ArrowLeft,
  ExternalLink,
  Bot,
  Cloud,
  Code
} from "lucide-react";
import { Link } from "react-router-dom";

const TechStack = () => {
  const partners = [
    {
      name: "OpenAI",
      category: "Large Language Models",
      desc: "Integration of GPT-4o and o1 models for advanced reasoning, creative drafting, and complex problem-solving in professional workflows.",
      url: "https://openai.com",
      icon: <Bot className="w-5 h-5" />
    },
    {
      name: "Anthropic Claude",
      category: "Large Language Models",
      desc: "Leveraging Claude 3.5 Sonnet for high-precision document analysis, coding assistance, and nuanced natural language understanding.",
      url: "https://anthropic.com",
      icon: <Bot className="w-5 h-5" />
    },
    {
      name: "Google Gemini",
      category: "Multimodal AI",
      desc: "Utilizing Gemini 1.5 Pro for massive context window processing and native multimodal capabilities across enterprise data sets.",
      url: "https://deepmind.google/technologies/gemini/",
      icon: <Globe className="w-5 h-5" />
    },
    {
      name: "Microsoft",
      category: "Cloud & Enterprise",
      desc: "Deployment via Azure OpenAI Service to ensure enterprise-grade security, compliance, and seamless integration with the Microsoft 365 ecosystem.",
      url: "https://azure.microsoft.com",
      icon: <Cloud className="w-5 h-5" />
    },
    {
      name: "Nvidia",
      category: "Compute Infrastructure",
      desc: "Optimizing local inference and specialized model training using Nvidia's industry-leading GPU architecture and CUDA software stack.",
      url: "https://nvidia.com",
      icon: <Cpu className="w-5 h-5" />
    },
    {
      name: "Pinecone",
      category: "Vector Databases",
      desc: "Implementing high-performance vector search for Retrieval-Augmented Generation (RAG) to provide AI agents with long-term memory.",
      url: "https://pinecone.io",
      icon: <Database className="w-5 h-5" />
    },
    {
      name: "Supabase",
      category: "Backend Infrastructure",
      desc: "Utilizing PostgreSQL with pgvector for robust, scalable data storage and real-time database capabilities in custom AI applications.",
      url: "https://supabase.com",
      icon: <Database className="w-5 h-5" />
    },
    {
      name: "Zapier",
      category: "Workflow Automation",
      desc: "Connecting AI agents to over 6,000+ apps to automate repetitive tasks and bridge the gap between legacy software and modern AI.",
      url: "https://zapier.com",
      icon: <Zap className="w-5 h-5" />
    },
    {
      name: "Make",
      category: "Advanced Automation",
      desc: "Designing complex, multi-step visual automations and data transformations to orchestrate sophisticated AI-driven business processes.",
      url: "https://make.com",
      icon: <Layers className="w-5 h-5" />
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Our Tech Stack & Partners | Crowne Assistant Systems",
    "description": "The enterprise-grade AI and automation technologies we use to build professional service systems.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": partners.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": p.name,
        "url": p.url
      }))
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      {/* Header */}
      <header className="pt-40 pb-20 bg-brand-light border-b border-brand-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-widest mb-12 hover:text-brand-dark transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl">
            <p className="text-brand-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-4">Entity Association</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
              Which technologies power our bespoke AI automation systems?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We engineer our solutions using a world-class stack of AI models, vector databases, and automation platforms. By partnering with industry leaders like OpenAI, Anthropic, and Microsoft, we ensure our clients benefit from the most advanced, secure, and scalable technology available in the global AI ecosystem.
            </p>
          </div>
        </div>
      </header>

      {/* Tech Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((p, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="p-10 rounded-3xl border border-brand-border bg-white hover:border-brand-gold hover:shadow-xl transition-all duration-500 group"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 bg-brand-light flex items-center justify-center rounded-xl text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-colors">
                    {p.icon}
                  </div>
                  <a 
                    href={p.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-brand-gold transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gold mb-2">{p.category}</p>
                <h3 className="text-2xl font-bold mb-4 text-brand-dark">{p.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {p.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Statement */}
      <section className="py-32 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8">
            Seamless <span className="italic font-light text-brand-gold">Interoperability</span>.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-12">
            Our systems are designed to be platform-agnostic, allowing us to select the optimal combination of models and infrastructure for your specific professional requirements. Whether you require the reasoning power of GPT-4o or the privacy of local inference, our stack is built for maximum flexibility and performance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/#contact" className="bg-brand-gold text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all duration-500">
              Discuss Your Stack
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechStack;
