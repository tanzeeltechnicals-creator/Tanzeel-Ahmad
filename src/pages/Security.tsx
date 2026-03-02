import { motion } from "motion/react";
import { 
  ShieldCheck, 
  Lock, 
  Server, 
  FileText, 
  UserCheck, 
  Globe,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

const Security = () => {
  const securityFeatures = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Encryption",
      desc: "All data is encrypted using AES-256 at rest and TLS 1.3 in transit. We maintain strict cryptographic standards for all professional client data.",
      tags: ["AES-256", "TLS 1.3"]
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Hosting Infrastructure",
      desc: "Primary infrastructure hosted on Google Cloud Platform (GCP) and AWS within Australian regions (Sydney/Melbourne) for data sovereignty.",
      tags: ["GCP", "AWS", "AU-Sovereign"]
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Access Governance",
      desc: "Strict Role-Based Access Control (RBAC) and mandatory Multi-Factor Authentication (MFA) for all engineering and support personnel.",
      tags: ["RBAC", "MFA", "Zero Trust"]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Compliance Framework",
      desc: "Adherence to Australian Privacy Principles (APP) and GDPR-style data handling practices. Regular internal audits and security reviews.",
      tags: ["APP", "GDPR", "ISO 27001 Ready"]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Legal & NDAs",
      desc: "Standard Mutual Non-Disclosure Agreements (NDAs) available for all discovery phases. Clear data ownership and exit clauses in all contracts.",
      tags: ["NDA", "IP Ownership"]
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "AI Guardrails",
      desc: "Custom-built prompt injection protection and output validation layers to ensure AI systems operate within defined ethical and legal bounds.",
      tags: ["Safety Layers", "Validation"]
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Enterprise Security & Compliance | Crowne Assistant Systems",
    "description": "Our comprehensive security framework for AI automation in professional services.",
    "mainEntity": {
      "@type": "Service",
      "name": "AI Security & Compliance",
      "provider": {
        "@type": "Organization",
        "name": "Crowne Assistant Systems"
      },
      "serviceType": "Security & Compliance",
      "areaServed": "Australia"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      {/* Security Header */}
      <header className="pt-40 pb-20 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-widest mb-12 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl">
            <p className="text-brand-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-4">Enterprise Trust Pack</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
              How does our security framework protect sensitive professional client data?
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              We implement a Zero Trust architecture utilizing AES-256 encryption at rest and TLS 1.3 in transit, hosted exclusively on Australian-sovereign GCP and AWS regions. This ensures data privacy, prevents third-party model training on firm data, and maintains strict compliance with the Australian Privacy Principles and global GDPR standards.
            </p>
          </div>
        </div>
      </header>

      {/* Security Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((f, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-3xl border border-brand-border bg-brand-light hover:bg-white hover:shadow-xl transition-all duration-500"
              >
                <div className="w-12 h-12 bg-white flex items-center justify-center rounded-xl shadow-sm mb-8 text-brand-gold">
                  {f.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-dark">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-8">
                  {f.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {f.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 bg-white border border-brand-border rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-32 bg-brand-light border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 tracking-tight">Our Infrastructure Partners</h2>
          <div className="flex flex-wrap justify-center gap-16 opacity-40 grayscale">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" className="h-10 w-auto" referrerPolicy="no-referrer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" alt="Google Cloud" className="h-10 w-auto" referrerPolicy="no-referrer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" alt="Azure" className="h-10 w-auto" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* Compliance Wording */}
      <section className="py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Data Handling & Privacy Statement</h2>
          <div className="prose prose-sm text-gray-600 space-y-6">
            <p>
              Crowne Assistant Systems operates under the strict guidance of the <strong>Privacy Act 1988 (Cth)</strong> and the <strong>Australian Privacy Principles (APP)</strong>. 
              We recognize that professional services firms handle highly sensitive client data, and our systems are engineered to ensure that this data is never used for model training by third-party providers.
            </p>
            <p>
              <strong>Zero-Retention Policy:</strong> Where possible, we implement zero-retention policies for API calls to LLM providers, ensuring that your firm's data is processed in-memory and never stored on external servers beyond the immediate transaction.
            </p>
            <p>
              <strong>Sovereign Hosting:</strong> All primary databases and application servers are hosted within Australian data centers. This ensures that your data remains subject to Australian law and jurisdiction at all times.
            </p>
            <p>
              <strong>Audit Logs:</strong> Comprehensive audit logging is maintained for all system interactions, providing a clear trail of data access and processing for compliance reporting.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Security;
