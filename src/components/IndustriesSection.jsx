import React, { useState } from 'react';
import { motion } from 'framer-motion';

const IndustriesSection = () => {
  const [expandedIndustry, setExpandedIndustry] = useState(null);

  const industries = [
    {
      id: '01',
      title: 'TRANSPORT AND LOGISTICS',
      content: 'Innovative solutions for modern transportation and logistics challenges.'
    },
    {
      id: '02',
      title: 'FINANCIAL SERVICES',
      content: 'Digital transformation solutions for the financial sector.'
    },
    {
      id: '03',
      title: 'E-COMMERCE AND RETAIL',
      content: 'Cutting-edge platforms for modern retail experiences.'
    },
    {
      id: '04',
      title: 'HEALTHCARE',
      content: 'Digital healthcare solutions for better patient care.'
    },
    {
      id: '05',
      title: 'COMMUNICATIONS',
      content: 'Advanced communication solutions for the digital age.'
    },
    {
      id: '06',
      title: 'NEWS AND PUBLISHING',
      content: 'Modern publishing platforms for the digital era.'
    },
    {
      id: '07',
      title: 'MEDIA AND ENTERTAINMENT',
      content: 'Engaging digital experiences for media and entertainment.'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-[#1d1b2e] text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-6xl font-bold mb-6">INDUSTRIES</h2>
          <p className="text-[#98ff98] text-xl">
            Over a decade of experience informs our
            <br />
            deep expertise in a wide range of industries.
          </p>
        </motion.div>

        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="border-t border-white/20 py-6"
            >
              <button
                onClick={() => setExpandedIndustry(expandedIndustry === industry.id ? null : industry.id)}
                className="w-full"
              >
                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-6">
                    <span className="text-white/50 font-mono">{industry.id}</span>
                    <h3 className="text-2xl font-bold group-hover:text-[#98ff98] transition-colors">
                      {industry.title}
                    </h3>
                  </div>
                  <motion.span
                    animate={{ rotate: expandedIndustry === industry.id ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-3xl text-white/50 group-hover:text-[#98ff98]"
                  >
                    +
                  </motion.span>
                </div>
                {expandedIndustry === industry.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pl-16 text-white/70"
                  >
                    <p>{industry.content}</p>
                  </motion.div>
                )}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IndustriesSection;