'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sun, Zap, Users, Award, Globe, Mail, Phone, Shield, Lightbulb, Leaf } from 'lucide-react';

// FAQ Data Array
const faqData = [
  {
    id: 1,
    question: "What renewable energy services does Fazna Solar offer?",
    answer: "We specialize in comprehensive renewable energy development including solar PV installations, onshore and offshore wind projects, and project finance structuring across Asia, Middle East, and Africa markets.",
    icon: <Sun className="w-5 h-5" />,
    category: "services"
  },
  {
    id: 2,
    question: "What is your project development expertise?",
    answer: "Our expertise spans development of solar and wind power projects across multiple continents, with deep technical knowledge in project finance structuring and implementation in dynamic emerging markets.",
    icon: <Globe className="w-5 h-5" />,
    category: "expertise"
  },
  {
    id: 3,
    question: "How large is your construction and technical team?",
    answer: "We maintain a comprehensive team structure with 37 staff members including project managers, construction managers, QC inspectors, HSE officers, and site engineers, plus specialized workers for mechanical and installation works.",
    icon: <Users className="w-5 h-5" />,
    category: "team"
  },
  {
    id: 4,
    question: "What equipment and tools do you use for installations?",
    answer: "We utilize professional-grade equipment including Milwaukee rivet guns, Bosch and Makita battery-operated tools, Stanley torque wrenches, digital levels, laser machines, and comprehensive scaffolding systems for safe and efficient installations.",
    icon: <Zap className="w-5 h-5" />,
    category: "equipment"
  },
  {
    id: 5,
    question: "What quality certifications does Fazna Solar hold?",
    answer: "We are certified with ISO 9001:2015 for quality management, ISO 14001:2015 for environmental management, and ISO 45001:2019 for occupational health and safety management systems.",
    icon: <Award className="w-5 h-5" />,
    category: "certifications"
  },
  {
    id: 6,
    question: "How can I contact Fazna Solar for project inquiries?",
    answer: "You can reach us through our Dubai office (+971 527822747, info@faznasolar.com) or our India subsidiary AYE TOTES PVT LTD (+91 7981505254, cb@faznasolar.com). We're ready to discuss your renewable energy projects.",
    icon: <Mail className="w-5 h-5" />,
    category: "contact"
  },
  {
    id: 7,
    question: "What sustainability practices does Fazna Solar implement?",
    answer: "We implement eco-friendly installation methods, minimize waste through recycling programs, use energy-efficient equipment, and prioritize sustainable supply chains to reduce our carbon footprint across all operations.",
    icon: <Leaf className="w-5 h-5" />,
    category: "sustainability"
  },
  {
    id: 8,
    question: "What safety standards does Fazna Solar follow?",
    answer: "We adhere to international safety standards including OSHA guidelines, conduct regular safety training for all personnel, implement comprehensive risk assessment protocols, and maintain strict compliance with local safety regulations in all operational regions.",
    icon: <Shield className="w-5 h-5" />,
    category: "safety"
  },
  {
    id: 9,
    question: "How does Fazna Solar stay innovative in the renewable energy sector?",
    answer: "We continuously invest in R&D, collaborate with leading technology providers, participate in industry conferences, and implement regular training programs to ensure our team stays at the forefront of renewable energy innovations and best practices.",
    icon: <Lightbulb className="w-5 h-5" />,
    category: "innovation"
  }
];


const FAQItem = ({ faq, isOpen, toggleOpen } : any) => {
  return (
    <motion.div
      layout
      className="border border-card-border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden bg-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.button
        className="w-full px-6 py-5 text-left flex items-center justify-between  rounded-xl"
        onClick={toggleOpen}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center space-x-4">
          <motion.div
            className="text-primary bg-primary/10 p-3 rounded-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {faq.icon}
          </motion.div>
          <h3 className="text-lg font-semibold text-foreground pr-4">
            {faq.question}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pl-[4.5rem]">
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-muted-foreground leading-relaxed"
              >
                {faq.answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FaznaFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Extract unique categories for filter
  const categories = [...new Set(faqData.map(faq => faq.category))];
  
  // Filter FAQs based on active category
  const filteredFAQs = activeCategory === 'all' 
    ? faqData 
    : faqData.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (id: any) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-20 px-4 bg-background min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Got Questions?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our solar energy solutions and services
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="space-y-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                layout
              >
                <FAQItem
                  faq={faq}
                  isOpen={openFAQ === faq.id}
                  toggleOpen={() => toggleFAQ(faq.id)}
                />
              </motion.div>
            ))
          ) : (
            <motion.div 
              className="text-center py-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-muted-foreground text-lg">No questions found in this category.</p>
            </motion.div>
          )}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-card rounded-2xl p-10 shadow-lg border border-card-border bg-gradient-to-br from-card to-card/80">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Our renewable energy experts are ready to provide personalized consultation for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <motion.a
                  href="mailto:info@faznasolar.com"
                  className="inline-flex items-center justify-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium hover:bg-primary/90 transition-all shadow-md"
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  <span>Email Us</span>
                </motion.a>
                <motion.a
                  href="tel:+971527822747"
                  className="inline-flex items-center justify-center space-x-2 border border-input bg-background text-foreground px-8 py-4 rounded-xl font-medium hover:bg-muted transition-all shadow-sm"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  <span>Call Us</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FaznaFAQ;