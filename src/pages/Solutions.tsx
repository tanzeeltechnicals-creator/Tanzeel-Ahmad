import { motion } from "motion/react";
import { TrendingUp, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SolutionsPage = () => {
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
    <div className="min-h-screen bg-white">
      <header className="pt-40 pb-20 bg-brand-light border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-widest mb-12 hover:text-brand-dark transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="max-w-4xl">
            <p className="text-brand-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-4">Case Studies</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
              What quantified results can professional firms expect from bespoke AI system integration?
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Bespoke AI systems typically deliver 90% to 98% efficiency gains in document-heavy workflows, such as legal discovery or client onboarding.
            </p>
          </div>
        </div>
      </header>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((p, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 rounded-3xl border border-brand-border shadow-sm flex flex-col justify-between"
              >
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
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
