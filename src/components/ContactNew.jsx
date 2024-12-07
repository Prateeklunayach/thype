import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const ContactNew = () => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: 'India',
    help: '',
    findUs: ''
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (4.5MB = 4.5 * 1024 * 1024 bytes)
      if (file.size > 4.5 * 1024 * 1024) {
        alert('File size exceeds 4.5MB limit');
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form Data:', formData);
    console.log('Selected File:', selectedFile);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Contact Form Section */}
      <div className="min-h-screen bg-[#1d1b2e] text-white px-4 md:px-8 lg:px-16 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Section */}
            <div className="lg:sticky lg:top-32 lg:h-fit">
              <h1 className="text-6xl md:text-7xl font-bold mb-8">LET'S TALK</h1>
              <p className="text-lg mb-4 text-white/80">
                We'd love to connect with you and learn more about what we can build together. Tell us a few details and we'll be in touch.
              </p>
              <p className="text-lg">
                Or reach out directly — {' '}
                <a href="mailto:hey@whitewidget.com" className="text-[#98ff98] hover:underline">
                  hey@whitewidget.com
                </a>
              </p>
            </div>

            {/* Right Section - Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Input Fields */}
                <div className="space-y-10">
                  {/* Name Input */}
                  <div>
                    <label className="block text-sm uppercase mb-3 text-white/70">Your Name</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-transparent border-b border-white/30 focus:border-[#98ff98] outline-none transition-colors text-lg"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-sm uppercase mb-3 text-white/70">Business Email Address</label>
                    <input
                      type="email"
                      required
                      className="w-full bg-transparent border-b border-white/30 focus:border-[#98ff98] outline-none transition-colors text-lg"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  {/* Company Input */}
                  <div>
                    <label className="block text-sm uppercase mb-3 text-white/70">Company</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-transparent border-b border-white/30 focus:border-[#98ff98] outline-none transition-colors text-lg"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>

                  {/* Country Select */}
                  <div>
                    <label className="block text-sm uppercase mb-3 text-white/70">Country</label>
                    <div className="relative">
                      <select
                        required
                        className="w-full bg-transparent border-b border-white/30 focus:border-[#98ff98] outline-none appearance-none transition-colors text-lg"
                        value={formData.country}
                        onChange={(e) => setFormData({...formData, country: e.target.value})}
                      >
                        <option value="India" className="bg-[#1d1b2e]">India</option>
                        <option value="USA" className="bg-[#1d1b2e]">USA</option>
                        <option value="UK" className="bg-[#1d1b2e]">UK</option>
                        <option value="Other" className="bg-[#1d1b2e]">Other</option>
                      </select>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                          <path d="M1 1L6 6L11 1" stroke="white" strokeWidth="2"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Help Textarea */}
                  <div>
                    <label className="block mb-3 text-sm uppercase text-white/70">How can we help?</label>
                    <textarea
                      required
                      className="w-full bg-transparent border-b border-white/30 focus:border-[#98ff98] outline-none min-h-[100px] transition-colors resize-none text-lg"
                      value={formData.help}
                      onChange={(e) => setFormData({...formData, help: e.target.value})}
                    />
                  </div>

                  {/* Find Us Input */}
                  <div>
                    <label className="block text-sm uppercase mb-3 text-white/70">How did you find out about us?</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-transparent border-b border-white/30 focus:border-[#98ff98] outline-none transition-colors text-lg"
                      value={formData.findUs}
                      onChange={(e) => setFormData({...formData, findUs: e.target.value})}
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="block text-sm uppercase mb-4 text-white/70">
                      Attach a project brief (Optional, max 4.5MB)
                    </label>
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="px-6 py-3 bg-white/10 rounded-lg cursor-pointer hover:bg-white/20 transition-colors"
                      >
                        Choose File
                      </button>
                      <span className="text-white/50">
                        {selectedFile ? selectedFile.name : 'No file Chosen'}
                      </span>
                      <input
                        ref={fileInputRef}
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#98ff98] text-[#1d1b2e] rounded-lg font-medium text-lg hover:bg-[#7aff7a] transition-colors mt-8"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            {/* Left Section */}
            <div className="col-span-3">
              <h2 className="text-6xl font-bold mb-8">Let's get to work.</h2>
              <button 
                className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1"
              >
                Talk to us
              </button>
            </div>

            {/* Middle Section - Navigation */}
            <div className="col-span-1">
              <nav className="space-y-4">
                <a href="/" className="block hover:text-gray-300 transition-colors duration-200">Home</a>
                <a href="/work" className="block hover:text-gray-300 transition-colors duration-200">Work</a>
                <a href="/capabilities" className="block hover:text-gray-300 transition-colors duration-200">Capabilities</a>
                <a href="/industries" className="block hover:text-gray-300 transition-colors duration-200">Industries</a>
                <a href="/company" className="block hover:text-gray-300 transition-colors duration-200">Company</a>
                <a href="/insights" className="block hover:text-gray-300 transition-colors duration-200">Insights</a>
                <a href="/contact" className="block hover:text-gray-300 transition-colors duration-200">Contact</a>
              </nav>
            </div>

            {/* Right Section - Offices */}
            <div className="col-span-1">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Manila Office</h3>
                  <p className="text-gray-400">South Triangle, Quezon City, PH</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Hong Kong Office</h3>
                  <p className="text-gray-400">Sheung Wan, Central, HK</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Copyright */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <p className="text-gray-400">
                White Widget is a top software development company in Asia and the Philippines.
              </p>
              <p className="text-gray-400">
                Copyright © White Widget {new Date().getFullYear()}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default ContactNew; 

