import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PricingPage = () => {
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
    <div className="min-h-screen bg-white">
      <header className="pt-40 pb-20 bg-brand-light border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-widest mb-12 hover:text-brand-dark transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="max-w-4xl">
            <p className="text-brand-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-4">The Investment</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
              How is the investment for AI automation structured to ensure a positive return?
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our pricing model replaces traditional licensing with an ROI-based framework consisting of a fixed build cost and a monthly optimization fee.
            </p>
          </div>
        </div>
      </header>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {tiers.map((t, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-3xl border border-brand-border flex flex-col justify-between hover:border-brand-gold transition-all duration-500"
              >
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
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
