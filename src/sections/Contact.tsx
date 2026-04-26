import { useState } from 'react';
import { motion} from 'framer-motion';
import { MessageCircle, Mail, Instagram, Loader2 } from 'lucide-react';
import { fadeUp, fadeRight, staggerContainer } from '@/lib/animations/variants';
import { useToast } from '@/hooks/use-toast';

const budgetOptions = [
  'Under ₹25,000',
  '₹25,000 - ₹50,000',
  '₹50,000 - ₹1,00,000',
  '₹1,00,000+',
  'Not sure yet',
];

const serviceOptions = [
  'Social Media Management',
  'Performance Marketing',
  'Website Development',
  'AI Agents',
  'Full Package',
  'Not sure yet',
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    budget: '',
    service: '',
    message: '',
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby_P-0BlclcFvODgPyzAzxMhCOX1YmA1oi4JB6tb17Ng1G4_ln6pmjGvfaqx-uaUcgR/exec";

    try {
      // Use FormData to match what the Google Script expects
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        form.append(key, value);
      });

      // Google Apps Script usually requires 'no-cors' mode for simple POSTs
      // The data will still reach the sheet
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: form,
        mode: 'no-cors',
      });

      toast({
        title: 'Enquiry sent!',
        description: "We'll reach out within 24 hours.",
      });

      // Reset form
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        budget: '',
        service: '',
        message: '',
      });
    } catch {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please contact us directly via WhatsApp.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left - Form */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.span 
            variants={fadeUp}
            className="text-[10px] text-nera-textLight uppercase tracking-[0.2em] font-medium"
          >
            Let's Talk
          </motion.span>
          <motion.h2 
            variants={fadeUp}
            className="text-[32px] sm:text-[36px] lg:text-[42px] font-bold tracking-tight mt-4 leading-[1.1]"
          >
            Ready to grow?<br />
            Tell us about your brand.
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            className="text-nera-textMuted mt-4 text-sm leading-relaxed"
          >
            Fill in the details and we'll get back to you within 24 hours with a custom growth plan.
          </motion.p>

          <motion.form
            variants={fadeUp}
            onSubmit={handleSubmit}
            className="mt-8 space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="glow-focus w-full bg-white border border-gray-200 rounded-xl px-5 py-3.5 text-sm text-black placeholder:text-nera-textLight outline-none hover:border-black/10 transition-all"
              />
              <input
                type="text"
                name="company"
                placeholder="Brand / Company Name"
                value={formData.company}
                onChange={handleChange}
                className="glow-focus w-full bg-white border border-gray-200 rounded-xl px-5 py-3.5 text-sm text-black placeholder:text-nera-textLight outline-none hover:border-black/10 transition-all"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="glow-focus w-full bg-white border border-gray-200 rounded-xl px-5 py-3.5 text-sm text-black placeholder:text-nera-textLight outline-none hover:border-black/10 transition-all"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone / WhatsApp Number"
                value={formData.phone}
                onChange={handleChange}
                className="glow-focus w-full bg-white border border-gray-200 rounded-xl px-5 py-3.5 text-sm text-black placeholder:text-nera-textLight outline-none hover:border-black/10 transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="glow-focus w-full bg-white border border-gray-200 rounded-xl px-5 py-3.5 text-sm text-nera-textLight outline-none hover:border-black/10 transition-all appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                  }}
                >
                  <option value="">Monthly Budget</option>
                  {budgetOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              
              <div className="relative">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="glow-focus w-full bg-white border border-gray-200 rounded-xl px-5 py-3.5 text-sm text-nera-textLight outline-none hover:border-black/10 transition-all appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                  }}
                >
                  <option value="">Service Interested In</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            <textarea
              name="message"
              placeholder="Tell us about your brand and goals..."
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="glow-focus w-full bg-white border border-gray-200 rounded-xl px-5 py-3.5 text-sm text-black placeholder:text-nera-textLight outline-none hover:border-black/10 transition-all resize-none"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-scale w-full bg-black text-white font-medium rounded-xl px-6 py-4 text-sm hover:bg-[#222] transition-colors flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                'Send Enquiry'
              )}
            </button>
          </motion.form>
        </motion.div>

        {/* Right - Contact Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col justify-center"
        >
          <motion.div
            variants={fadeRight}
            className="bg-white rounded-2xl p-8 relative overflow-hidden border border-black/5 shadow-sm"
          >
            {/* Background Decoration */}
            <div 
              className="absolute top-0 right-0 w-40 h-40 rounded-full bg-nera-accent opacity-[0.03]"
              style={{ filter: 'blur(40px)', transform: 'translate(30%, -30%)' }}
            />

            <div className="relative z-10">
              <h3 className="text-xl font-semibold tracking-tight">
                Prefer a direct conversation?
              </h3>
              <p className="text-nera-textMuted text-sm mt-2 leading-relaxed">
                Skip the form. Connect with us directly and get an instant response.
              </p>

              <div className="mt-8 space-y-4">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/918796181517?text=Hi%20NERA%20Digital%20Services%2C%20I%27d%20like%20to%20discuss%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-black/5 hover:border-[#25D366]/30 hover:bg-[#25D366]/[0.03] transition-all group cursor-pointer"
                >
                  <div className="icon-box w-11 h-11 rounded-xl bg-[#25D366]/10 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/20 transition-colors">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">WhatsApp</div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:hello@neradigitals.com"
                  className="flex items-center gap-4 p-4 rounded-xl border border-black/5 hover:border-black/15 hover:bg-black/[0.02] transition-all group cursor-pointer"
                >
                  <div className="icon-box w-11 h-11 rounded-xl bg-black/[0.03] flex items-center justify-center shrink-0 group-hover:bg-black/[0.06] transition-colors">
                    <Mail className="w-5 h-5 text-black" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-nera-textMuted">hello@neradigitals.com</div>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/NERA_Digital_Services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-black/5 hover:border-[#E4405F]/30 hover:bg-[#E4405F]/[0.03] transition-all group cursor-pointer"
                >
                  <div className="icon-box w-11 h-11 rounded-xl bg-[#E4405F]/10 flex items-center justify-center shrink-0 group-hover:bg-[#E4405F]/20 transition-colors">
                    <Instagram className="w-5 h-5 text-[#E4405F]" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">Instagram</div>
                    <div className="text-sm text-nera-textMuted">@NERA_Digital_Services</div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}