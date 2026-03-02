import { motion } from "motion/react";
import { Mail, MapPin, Linkedin, ArrowLeft, Send } from "lucide-react";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
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
            <p className="text-brand-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-4">Get Started</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
              Ready to <span className="italic font-light">Evolve</span> Your Firm?
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Complete the form below to initiate our Discovery phase. Our engineering team will review your requirements and respond within 24 hours.
            </p>
          </div>
        </div>
      </header>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-bold mb-12 tracking-tight">Contact Engineering</h2>
            
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 bg-emerald-50 border border-emerald-100 rounded-3xl text-center"
              >
                <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">Enquiry Received</h3>
                <p className="text-emerald-700">
                  Thank you for reaching out. A senior engineer will be in contact shortly to schedule your Discovery Meeting.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Full Name</label>
                    <input required type="text" className="w-full p-4 bg-brand-light border border-brand-border rounded-xl focus:outline-none focus:border-brand-gold transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Work Email</label>
                    <input required type="email" className="w-full p-4 bg-brand-light border border-brand-border rounded-xl focus:outline-none focus:border-brand-gold transition-colors" placeholder="john@firm.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Company / Firm</label>
                  <input required type="text" className="w-full p-4 bg-brand-light border border-brand-border rounded-xl focus:outline-none focus:border-brand-gold transition-colors" placeholder="Crowne Legal" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Primary Objective</label>
                  <select className="w-full p-4 bg-brand-light border border-brand-border rounded-xl focus:outline-none focus:border-brand-gold transition-colors">
                    <option>Workflow Automation</option>
                    <option>Custom LLM Integration</option>
                    <option>Document Processing</option>
                    <option>Strategic Consulting</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Message / Context</label>
                  <textarea rows={5} className="w-full p-4 bg-brand-light border border-brand-border rounded-xl focus:outline-none focus:border-brand-gold transition-colors" placeholder="Tell us about your current bottlenecks..."></textarea>
                </div>
                <button type="submit" className="w-full py-5 bg-brand-dark text-white font-bold uppercase tracking-widest hover:bg-brand-gold transition-all duration-500">
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>

          <div className="lg:pt-24">
            <div className="space-y-12">
              <div>
                <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-brand-gold">Direct Contact</h4>
                <div className="space-y-4">
                  <a href="mailto:engineering@crowne.systems" className="flex items-center gap-4 text-gray-600 hover:text-brand-dark transition-colors">
                    <Mail className="w-5 h-5" />
                    engineering@crowne.systems
                  </a>
                  <a href="#" className="flex items-center gap-4 text-gray-600 hover:text-brand-dark transition-colors">
                    <Linkedin className="w-5 h-5" />
                    LinkedIn / Crowne Systems
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-brand-gold">Engineering Hubs</h4>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 text-gray-600">
                    <MapPin className="w-5 h-5 shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-brand-dark">Melbourne, VIC</p>
                      <p className="text-sm">Collins Street, Financial District</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 text-gray-600">
                    <MapPin className="w-5 h-5 shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-brand-dark">Hobart, TAS</p>
                      <p className="text-sm">Macquarie Street, Consulting Office</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
