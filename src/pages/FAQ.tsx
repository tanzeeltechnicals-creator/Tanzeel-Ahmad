import { motion } from "motion/react";
import { ArrowLeft, HelpCircle, MessageCircle, Shield, Zap, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const FAQPage = () => {
  const categories = [
    {
      title: "General & Operations",
      icon: <Globe className="w-5 h-5" />,
      faqs: [
        {
          q: "Where is Crowne Assistant Systems located?",
          a: "Our primary engineering hub is located on Collins Street in Melbourne, Victoria, with a consulting office on Macquarie Street in Hobart, Tasmania. We serve professional firms across Australia and the APAC region."
        },
        {
          q: "Do you offer ongoing support after deployment?",
          a: "Yes. All our systems include a monthly optimization and support framework. This ensures your AI agents remain accurate, secure, and compliant with evolving Australian regulatory standards."
        },
        {
          q: "What industries do you specialize in?",
          a: "We specialize in professional services, including Legal, Wealth Management, Treasury, and Enterprise Operations. Our systems are bespoke-engineered for document-heavy and reasoning-intensive industries."
        }
      ]
    },
    {
      title: "Security & Compliance",
      icon: <Shield className="w-5 h-5" />,
      faqs: [
        {
          q: "Is my firm's data used to train public AI models?",
          a: "No. We utilize private enterprise instances of models (via Azure OpenAI or Google Cloud) and local inference where required. Your data is never used to train third-party or public models."
        },
        {
          q: "Where is our data stored?",
          a: "We prioritize Australian data sovereignty. All data is stored and processed within Australian-sovereign regions of GCP, AWS, or Azure, ensuring compliance with the Australian Privacy Principles."
        }
      ]
    },
    {
      title: "Technical & Integration",
      icon: <Zap className="w-5 h-5" />,
      faqs: [
        {
          q: "Can you integrate with our existing software (Clio, SharePoint, etc.)?",
          a: "Yes. Our engineering team specializes in custom API integrations and webhooks to ensure AI agents can read from and write to your existing professional software ecosystem seamlessly."
        },
        {
          q: "What is the typical timeline for a pilot project?",
          a: "A Targeted Pilot typically takes 4 to 6 weeks from discovery to deployment, allowing your firm to see quantified ROI within the first quarter."
        }
      ]
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": categories.flatMap(cat => cat.faqs).map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
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
            <p className="text-brand-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-4">Support Hub</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
              Frequently Asked <span className="italic font-light">Questions</span>.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Find answers to common questions about our engineering process, security frameworks, and operational support for professional services.
            </p>
          </div>
        </div>
      </header>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-4">
                <h2 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-8">Categories</h2>
                {categories.map((cat, i) => (
                  <a 
                    key={i} 
                    href={`#cat-${i}`} 
                    className="flex items-center gap-3 p-4 rounded-xl border border-brand-border hover:border-brand-gold hover:bg-brand-light transition-all group"
                  >
                    <div className="text-gray-400 group-hover:text-brand-gold transition-colors">{cat.icon}</div>
                    <span className="text-sm font-bold text-brand-dark">{cat.title}</span>
                  </a>
                ))}
                
                <div className="mt-12 p-8 bg-brand-dark rounded-2xl text-white">
                  <MessageCircle className="w-8 h-8 text-brand-gold mb-6" />
                  <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
                  <p className="text-sm text-gray-400 mb-8 leading-relaxed">
                    Our engineering team is available for a direct consultation to discuss your specific firm requirements.
                  </p>
                  <Link to="/contact" className="inline-block w-full py-4 bg-brand-gold text-white text-center text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all">
                    Contact Engineering
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-24">
              {categories.map((cat, i) => (
                <div key={i} id={`cat-${i}`} className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-12 border-b border-brand-border pb-6">
                    <div className="text-brand-gold">{cat.icon}</div>
                    <h2 className="text-2xl font-bold tracking-tight">{cat.title}</h2>
                  </div>
                  <div className="space-y-12">
                    {cat.faqs.map((faq, j) => (
                      <motion.div 
                        key={j}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: j * 0.1 }}
                      >
                        <h3 className="text-xl font-bold mb-4 text-brand-dark">{faq.q}</h3>
                        <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
