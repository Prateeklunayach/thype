import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <div className="bg-white py-12 sm:py-24 mt-8 sm:mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-4xl mb-12 sm:mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, x: 250 }}
            transition={{ duration: 0.6 }}
            className="text-[#1d1b2e] text-4xl sm:text-6xl font-bold mb-6 sm:mb-10 mt-8 sm:mt-12"
          >
            YOU'RE IN GOOD COMPANY
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, x: 250 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-base sm:text-xl leading-relaxed"
          >
            At White Widget, our mission is to make software that serves millions globally. We're an assembly of diverse, talented minds, where you're guaranteed to feel welcomed and supported. We're always looking for great people, so don't be shy and apply today.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, x: 250 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 sm:mt-8"
          >
            <button className="w-full sm:w-auto bg-[#1d1b2e] text-white px-6 py-3 rounded-lg hover:bg-[#2d2b3e] transition-colors">
              See openings
            </button>
          </motion.div>
        </div>

        {/* Image Grid Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-6xl mx-auto px-2 sm:px-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* First Column */}
            <motion.div 
              className="space-y-4 sm:space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className="rounded-xl overflow-hidden shadow-lg h-40 sm:h-48 md:h-56"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <img 
                  src="photo5.PNG" 
                  alt="Team activity" 
                  className="w-full h-full object-cover transform hover:filter hover:brightness-110 transition-all duration-300"
                />
              </motion.div>
              <motion.div 
                className="rounded-xl overflow-hidden shadow-lg h-48 md:h-56"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <img 
                  src="7.5.png" 
                  alt="Team members" 
                  className="w-full h-full object-cover transform hover:filter hover:brightness-110 transition-all duration-300"
                />
              </motion.div>
            </motion.div>

            {/* Second Column */}
            <motion.div 
              className="space-y-4 sm:space-y-6 mt-4 sm:mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div 
                className="rounded-xl overflow-hidden shadow-lg h-48 md:h-56"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <img 
                  src="photo1.JPEG" 
                  alt="Team photo" 
                  className="w-full h-full object-cover transform hover:filter hover:brightness-110 transition-all duration-300"
                />
              </motion.div>
              <motion.div 
                className="rounded-xl overflow-hidden shadow-lg h-48 md:h-56"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <img 
                  src="photo2.jpg" 
                  alt="Office culture" 
                  className="w-full h-full object-cover transform hover:filter hover:brightness-110 transition-all duration-300"
                />
              </motion.div>
            </motion.div>

            {/* Third Column */}
            <motion.div 
              className="space-y-4 sm:space-y-6 mt-4 sm:mt-24"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div 
                className="rounded-xl overflow-hidden shadow-lg h-48 md:h-56"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <img 
                  src="photo3.jpg" 
                  alt="Team gathering" 
                  className="w-full h-full object-cover transform hover:filter hover:brightness-110 transition-all duration-300"
                />
              </motion.div>
              <motion.div 
                className="rounded-xl overflow-hidden shadow-lg h-48 md:h-56"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <img 
                  src="photo4.PNG" 
                  alt="Office life" 
                  className="w-full h-full object-cover transform hover:filter hover:brightness-110 transition-all duration-300"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* What We Stand For Section */}
        <div className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#6B5ECD] rounded-full flex items-center justify-center text-white text-xl font-bold">
                  1
                </div>
                <h2 className="text-[#6B5ECD] text-4xl font-bold">WHAT WE STAND FOR</h2>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {/* People First */}
              <div className="p-6 bg-white rounded-xl border border-gray-200">
                <div className="mb-4 bg-white rounded-xl p-4">
                  <img 
                    src="8.1.png" 
                    alt="People First Icon" 
                    className="w-full h-32 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#1d1b2e] mb-4">People First</h3>
                <p className="text-gray-600 leading-relaxed">
                  We're only as good as our people, so we make sure to treat them well and give them what they need. We don't replace our people with AI.
                </p>
              </div>

              {/* Collaboration */}
              <div className="p-6 bg-white rounded-xl border border-gray-200">
                <div className="mb-4 bg-white rounded-xl p-4">
                  <img 
                    src="8.2.png" 
                    alt="Collaboration Icon" 
                    className="w-full h-32 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#1d1b2e] mb-4">Collaboration</h3>
                <p className="text-gray-600 leading-relaxed">
                  We don't work for clients; we work with them. We partner with others, because our job is to be of service; and there's always enough work to go around for good teams that deliver value.
                </p>
              </div>

              {/* Passion */}
              <div className="p-6 bg-white rounded-xl border border-gray-200">
                <div className="mb-4 bg-white rounded-xl p-4">
                  <img 
                    src="8.3.png" 
                    alt="Passion Icon" 
                    className="w-full h-32 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#1d1b2e] mb-4">Passion</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our work is driven by passion. We're serious about our work, but we don't take ourselves too seriously.
                </p>
              </div>

              {/* Initiative */}
              <div className="p-6 bg-white rounded-xl border border-gray-200">
                <div className="mb-4 bg-white rounded-xl p-4">
                  <img 
                    src="8.4.png" 
                    alt="Initiative Icon" 
                    className="w-full h-32 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#1d1b2e] mb-4">Initiative</h3>
                <p className="text-gray-600 leading-relaxed">
                  We take initiative in our work and encourage innovative thinking.
                </p>
              </div>

              {/* Excellence */}
              <div className="p-6 bg-white rounded-xl border border-gray-200">
                <div className="mb-4 bg-white rounded-xl p-4">
                  <img 
                    src="8.5.png" 
                    alt="Excellence Icon" 
                    className="w-full h-32 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#1d1b2e] mb-4">Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  We strive for excellence in everything we do.
                </p>
              </div>

              {/* Transparency */}
              <div className="p-6 bg-white rounded-xl border border-gray-200">
                <div className="mb-4 bg-white rounded-xl p-4">
                  <img 
                      src="8.6.png" 
                    alt="Transparency Icon" 
                    className="w-full h-32 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#1d1b2e] mb-4">Transparency</h3>
                <p className="text-gray-600 leading-relaxed">
                  We believe in open and honest communication.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Things You Won't Find Here Section */}
        <div className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#6B5ECD] rounded-full flex items-center justify-center text-white text-xl font-bold">
                  2
                </div>
                <h2 className="text-[#6B5ECD] text-4xl font-bold">THINGS YOU WON'T FIND HERE</h2>
              </div>
              <p className="text-gray-600 text-xl mt-4">
                We don't want to waste time when we could be enjoying the flow, so these are the things we like to skip on our playlists.
              </p>
            </motion.div>

            {/* Slider Section */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex gap-6 overflow-x-auto pb-8 hide-scrollbar"
            >
              {/* Card 1 - Boredom at work */}
              <div className="min-w-[400px] bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-2xl font-bold mb-4">Boredom at work</h3>
                <div className="rounded-xl overflow-hidden mb-4">
                  <img 
                    src="9.1.png" 
                    alt="No boredom at work" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <p className="text-gray-600">
                  We're not the machines, we build them! It's boring to work on just one project forever. We have both our own products and client work, and we always face new and exciting challenges.
                </p>
              </div>

              {/* Card 2 - Supervillain clients */}
              <div className="min-w-[400px] bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-2xl font-bold mb-4">Supervillain clients</h3>
                <div className="rounded-xl overflow-hidden mb-4">
                  <img 
                    src="9.2.png" 
                    alt="No supervillain clients" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <p className="text-gray-600">
                  We never accept work where there's any chance human beings could be exploited or harmed. We are stubbornly proud to be Widgeteers, and we know what we stand for.
                </p>
              </div>

              {/* Card 3 - Mandatory traffic */}
              <div className="min-w-[400px] bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-2xl font-bold mb-4">Mandatory traffic</h3>
                <div className="rounded-xl overflow-hidden mb-4">
                  <img 
                    src="9.3.png" 
                    alt="No mandatory traffic" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <p className="text-gray-600">
                  We only require a few days in the office per week in our hybrid setup, and we make it easier for people to enjoy living near work with housing allowances, gym benefits and weekly sports meets.
                </p>
              </div>

              {/* Card 4 - Lack of snacks */}
              <div className="min-w-[400px] bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-2xl font-bold mb-4">Lack of snacks</h3>
                <div className="rounded-xl overflow-hidden mb-4">
                  <img 
                    src="9.4.png" 
                    alt="No lack of snacks" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <p className="text-gray-600">
                  We have a lot of snacks! We appreciate your help eating our breakfast, lunch, and dinner servings, unlimited coffee, and a fully stocked pantry.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer Section */}
    
    </div>
    <footer className="w-full bg-black text-white py-8 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 sm:gap-12">
              {/* Left Section */}
              <div className="col-span-3">
                <h2 className="text-6xl font-bold mb-8">Let's get to work.</h2>
                <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1">
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
      </div>
    
  );
};

export default AboutSection; 