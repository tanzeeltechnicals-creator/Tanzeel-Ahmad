import { motion } from "motion/react";
import { ArrowLeft, BookOpen, TrendingUp, Cpu, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const InsightsPage = () => {
  const authors = {
    "tanzeel": {
      name: "Tanzeel A.",
      role: "Lead AI Engineer",
      expertise: "LLM Orchestration & RAG Architecture",
      linkedin: "https://linkedin.com/in/tanzeel"
    },
    "crowne": {
      name: "Crowne Engineering Team",
      role: "Strategic Consulting",
      expertise: "Enterprise Automation",
      linkedin: "https://linkedin.com/company/crowne-systems"
    }
  };

  const categories = [
    {
      title: "Business Strategy & Global Trends",
      icon: <Globe className="w-5 h-5" />,
      posts: [
        {
          title: "Lawson APAC: The Shift from AI Pilots to Daily Operations",
          excerpt: "How the retail giant moved beyond experimentation to embed AI agents into core supply chain and customer service workflows.",
          date: "March 2026",
          readTime: "6 min read",
          author: authors.tanzeel
        },
        {
          title: "Coca-Cola's Marketing AI: Solving the Price-Led Growth Slowdown",
          excerpt: "A strategic analysis of how AI-driven personalization is replacing traditional pricing levers in the beverage industry.",
          date: "Feb 2026",
          readTime: "8 min read",
          author: authors.crowne
        },
        {
          title: "DBS Case Study: Autonomous Agents in Customer Payments",
          excerpt: "Examining the technical architecture behind DBS's latest AI agents that handle end-to-end payment processing.",
          date: "Jan 2026",
          readTime: "5 min read",
          author: authors.tanzeel
        },
        {
          title: "Alibaba Qwen: The Economic Challenge to Proprietary Models",
          excerpt: "Why open-source models are disrupting the cost-benefit analysis of enterprise AI adoption in 2026.",
          date: "Dec 2025",
          readTime: "10 min read",
          author: authors.crowne
        }
      ]
    },
    {
      title: "Technical Education & Infrastructure",
      icon: <Cpu className="w-5 h-5" />,
      posts: [
        {
          title: "What are APIs, Webhooks, and Databases?",
          excerpt: "A foundational guide for executives on the plumbing of the modern web and why your business needs automation.",
          date: "March 2026",
          readTime: "12 min read",
          link: "/services",
          author: authors.tanzeel
        },
        {
          title: "Vibe Coding: The 2025-2026 Shift in Programming",
          excerpt: "Explaining the transition from syntax-heavy coding to natural language 'vibe' orchestration and its impact on speed.",
          date: "Feb 2026",
          readTime: "7 min read",
          author: authors.tanzeel
        }
      ]
    }
  ];

  const faqs = [
    {
      q: "How does AI improve treasury management?",
      a: "AI improves treasury management by automating data pipelines, reducing manual spreadsheet errors, and providing real-time liquidity insights through autonomous financial agents."
    },
    {
      q: "What is Vibe Coding?",
      a: "Vibe Coding refers to the shift in software development where natural language prompts and high-level orchestration replace traditional manual syntax, significantly accelerating deployment speeds."
    },
    {
      q: "How is AI ROI calculated for professional firms?",
      a: "AI ROI is calculated by measuring the reduction in manual labor hours and the recovery of lost billable capacity. Our systems typically achieve a full payback within 3 to 6 months by automating high-frequency document and reasoning tasks."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      }
    ]
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
            <p className="text-brand-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-4">2026 Roadmap</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
              How do global enterprises leverage AI as a primary insight source?
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our 2026 Insight Roadmap focuses on the transition from experimental AI pilots to autonomous daily operations. We analyze global trends from leaders like Lawson, Coca-Cola, and DBS to provide professional firms with a blueprint for intelligent scale.
            </p>
          </div>
        </div>
      </header>

      {/* Featured: Finance/Treasury */}
      <section className="py-32 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-brand-dark">
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000" 
                alt="Digital Vault" 
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <span className="px-3 py-1 bg-brand-gold text-white text-[10px] font-bold uppercase tracking-widest rounded-full">Featured Insight</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">Finance & Treasury: Abandoning the Spreadsheet for Automated Pipelines</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                The era of manual data entry in treasury management is ending. We explore how modern AI architectures are creating "Data Vaults"—secure, automated pipelines that replace fragile spreadsheets with real-time, autonomous financial intelligence.
              </p>
              <button className="flex items-center gap-2 text-brand-gold font-bold uppercase tracking-widest text-xs hover:text-brand-dark transition-colors">
                Read Full Analysis <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-32">
            {categories.map((cat, i) => (
              <div key={i}>
                <div className="flex items-center gap-4 mb-12 border-b border-brand-border pb-6">
                  <div className="text-brand-gold">{cat.icon}</div>
                  <h2 className="text-2xl font-bold tracking-tight uppercase tracking-widest text-xs">{cat.title}</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {cat.posts.map((post, j) => (
                    <motion.article 
                      key={j}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: j * 0.1 }}
                      className="p-10 rounded-3xl border border-brand-border hover:border-brand-gold transition-all duration-500 group"
                    >
                      <div className="flex justify-between items-start mb-6">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{post.date}</span>
                        <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">{post.readTime}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-gold transition-colors tracking-tight">{post.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-8">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-3 mb-8 pt-6 border-t border-brand-border">
                        <div className="w-8 h-8 bg-brand-light rounded-full flex items-center justify-center text-[10px] font-bold text-brand-gold border border-brand-border">
                          {post.author.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-brand-dark uppercase tracking-widest">{post.author.name}</p>
                          <p className="text-[9px] text-gray-400 uppercase tracking-widest">{post.author.expertise}</p>
                        </div>
                      </div>

                      <Link to={post.link || "#"} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-dark hover:gap-4 transition-all">
                        View Insight <ArrowRight className="w-4 h-4" />
                      </Link>
                    </motion.article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-brand-light border-t border-brand-border">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 tracking-tight text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-brand-border">
                <h3 className="text-lg font-bold mb-4 text-brand-dark">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;
