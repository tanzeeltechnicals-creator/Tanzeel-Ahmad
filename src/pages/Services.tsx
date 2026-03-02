import { motion } from "motion/react";
import { Search, Users, Zap, ShieldCheck, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesPage = () => {
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
    <div className="min-h-screen bg-white">
      <header className="pt-40 pb-20 bg-brand-light border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-widest mb-12 hover:text-brand-dark transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="max-w-4xl">
            <p className="text-brand-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-4">Our Methodology</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
              How does our methodology ensure scalable AI adoption for professional firms?
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our four-pillar framework—Discovery, Engage, Apply AI, and Governance—systematically identifies operational bottlenecks, integrates custom interfaces, deploys production-ready LLM agents, and establishes enterprise-grade security guardrails.
            </p>
          </div>
        </div>
      </header>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((p, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
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
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
