import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  Palette as DesignIcon,
  Cpu as AIIcon,
  Code as WebDevIcon,
  Cloud as CloudIcon,
  Smartphone as MobileIcon,
  ShieldCheck as SecurityIcon,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isCapabilitiesOpen, setIsCapabilitiesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const navRef = useRef(null);
  const dropdownRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past initial 100px
        setIsNavVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or near top
        setIsNavVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Handle hover area for navbar
  const handleMouseEnter = () => {
    setIsHovering(true);
    setIsNavVisible(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (window.scrollY > 100) {
      setIsNavVisible(false);
    }
  };

  return (
    <>
      {/* Invisible hover area - always present at top of page */}
      <div 
      
        className="fixed top-0 left-0 w-full h-16 z-40"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      {/* Animated Navbar */}
      <AnimatePresence>
        {(isNavVisible || isHovering) && (
          <motion.nav
          style={{backgroundColor: "#f6f6f6"}}
            ref={navRef}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
              {/* Logo */}
              <Link to="/" className="flex items-center">
                <img src="0.1.jpeg" alt="Logo" className="h-8 sm:h-12" />
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                <div className="hidden lg:flex items-center gap-x-12">
                  <Link
                    to="/about"
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                  >
                    About us
                  </Link>

                  {/* Capabilities Dropdown */}
                  <div 
                    ref={dropdownRef} 
                    className="relative group"
                    onMouseEnter={() => setIsCapabilitiesOpen(true)}
                    onMouseLeave={() => setIsCapabilitiesOpen(false)}
                  >
                    <button className="flex items-center  gap-x-1 text-gray-700  hover:text-gray-900 transition-colors duration-200">
                      <span className={isCapabilitiesOpen ? "text-indigo-500" : ""}>
                        Capabilities
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isCapabilitiesOpen ? "rotate-180 text-indigo-500" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isCapabilitiesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0  mt-6 w-[800px] bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                        >
                          <div className="flex">
                            {/* Sidebar */}
                            <div className="w-72 bg-indigo-50 p-8">
                              <h3 className="text-2xl font-semibold text-indigo-900">
                                Services we provide
                              </h3>
                              <p className="mt-3 text-indigo-600 text-sm">
                                Comprehensive solutions for your digital needs
                              </p>
                              <Link
                                to="/capabilities"
                                className="mt-6 inline-flex items-center text-sm text-indigo-600 hover:text-indigo-700 transition-colors duration-200"
                              >
                                View all capabilities
                                <ChevronRight className="ml-1 w-4 h-4" />
                              </Link>
                            </div>

                            {/* Services Grid */}
                            <div className="flex-1 p-8 grid grid-cols-2 gap-8">
                              <ServiceCard
                                icon={<DesignIcon className="w-6 h-6 text-indigo-500" />}
                                title="Product Design"
                                description="Transforming mundane user journeys with gamification and delight"
                                route="/capabilities"
                              />
                              <ServiceCard
                                icon={<AIIcon className="w-6 h-6 text-indigo-500" />}
                                title="AI and Machine Learning"
                                description="From predictive analytics to natural language processing"
                                route="/capabilities"
                              />
                              <ServiceCard
                                icon={<WebDevIcon className="w-6 h-6 text-indigo-500" />}
                                title="Web Development"
                                description="Beautifully made web apps with performance and scale at their core"
                                route="/capabilities"
                              />
                              <ServiceCard
                                icon={<CloudIcon className="w-6 h-6 text-indigo-500" />}
                                title="DevOps"
                                description="Optimizing cloud costs while improving performance"
                                route="/capabilities"
                              />
                              <ServiceCard
                                icon={<MobileIcon className="w-6 h-6 text-indigo-500" />}
                                title="Mobile Development"
                                description="Interactive and seamless apps for Android & iOS, ready on the go"
                                route="/capabilities"
                              />
                              <ServiceCard
                                icon={<SecurityIcon className="w-6 h-6 text-indigo-500" />}
                                title="Cybersecurity"
                                description="Integrating tight security processes and standards"
                                route="/capabilities"
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  {/*Industies*/}
                 
                 <div 
                    ref={dropdownRef} 
                    className="relative group"
                    onMouseEnter={() => setIsIndustriesOpen(true)}
                    onMouseLeave={() => setIsIndustriesOpen(false)}
                  >
                    <button className="flex items-center  gap-x-1 text-gray-700  hover:text-gray-900 transition-colors duration-200">
                      <span className={isIndustriesOpen ? "text-indigo-500" : ""}>
                        Industries
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isIndustriesOpen ? "rotate-180 text-indigo-500" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isIndustriesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute right-1/2 transform -translate-x-1/2 mt-6 w-[900px] bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-gray-100"
                          style={{ zIndex: 50 }}
                        >
                          <div className="flex">
                            {/* Sidebar */}
                            <div className="w-72 bg-indigo-50 p-8">
                              <h3 className="text-2xl font-semibold text-indigo-900">
                                Industries we serve
                              </h3>
                              <p className="mt-3 text-indigo-600 text-sm">
                                  Comprehensive solutions for your digital needs
                              </p>
                              <Link
                                to="/industries"
                                className="mt-6 inline-flex items-center text-sm text-indigo-600 hover:text-indigo-700 transition-colors duration-200"
                              >
                                View all industries
                                <ChevronRight className="ml-1 w-4 h-4" />
                              </Link>
                            </div>

                            {/* Services Grid */}
                            <div className="flex-1 p-8 grid grid-cols-2 gap-8">
                              <ServiceCard
                                
                                title="Transport and Logistics"
                                description="Fleet ops, real-time tracking, mapping, and supply chain optimization"
                                route="/industries"
                              />
                              <ServiceCard
                               
                                title="Financial Services"
                                description="B2B payment solutions, KYC, fraud prevention, and financial tracking"
                                route="/industries"
                              />
                              <ServiceCard
                                
                                title="E-commerce and Retail"
                                description="E-commerce, mobile apps, and payment solutions"
                                route="/industries"
                              />
                              <ServiceCard
                                
                                title="Healthcare"
                                description="Patient portals, appointment scheduling, and medical record management"
                                route="/industries"
                              />
                              <ServiceCard
                                
                                title="Communications"
                                description="Chat platforms, Al-driven customer service, and end-to-end encryption"
                                route="/industries"
                              />
                              <ServiceCard
                                
                                title="News and Publishing"
                                description="Websites, content personalization, SEO, and Al-powered newsrooms"
                                route="/industries"
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Other Nav Items */}
                 
                <NavItem text="Company" hasDropdown />
                  <NavItem text="Insights" />
                </div>
                {/*Industies*/}
                <Link to="/industries">
                  
                </Link>

                {/* Contact Button */}
                <Link to="/contact">
                  <button className="px-5 py-2.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    Contact
                  </button>
                </Link>
              </div>

              {/* Mobile Navigation */}
              <AnimatePresence>
                {isMobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg"
                  >
                    <div className="px-4 py-6 space-y-4">
                      <Link
                        to="/about"
                        className="block py-2 text-gray-700 hover:text-gray-900"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        About us
                      </Link>

                      {/* Mobile Capabilities Dropdown */}
                      <div className="space-y-2">
                        <button
                          onClick={() => setIsCapabilitiesOpen(!isCapabilitiesOpen)}
                          className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-gray-900"
                        >
                          <span>Capabilities</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            isCapabilitiesOpen ? "rotate-180" : ""
                          }`} />
                        </button>
                        
                        {isCapabilitiesOpen && (
                          <div className="pl-4 space-y-2">
                            <Link
                              to="/capabilities"
                              className="block py-2 text-gray-600 hover:text-gray-900"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              Product Design
                            </Link>
                            <Link
                              to="/capabilities"
                              className="block py-2 text-gray-600 hover:text-gray-900"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              AI and Machine Learning
                            </Link>
                            {/* Add other capability links */}
                          </div>
                        )}
                      </div>

                      {/* Mobile Industries Dropdown */}
                      <div className="space-y-2">
                        <button
                          onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                          className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-gray-900"
                        >
                          <span>Industries</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            isIndustriesOpen ? "rotate-180" : ""
                          }`} />
                        </button>
                        
                        {isIndustriesOpen && (
                          <div className="pl-4 space-y-2">
                            <Link
                              to="/industries/transport"
                              className="block py-2 text-gray-600 hover:text-gray-900"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              Transport and Logistics
                            </Link>
                            <Link
                              to="/industries/financial"
                              className="block py-2 text-gray-600 hover:text-gray-900"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              Financial Services
                            </Link>
                            {/* Add other industry links */}
                          </div>
                        )}
                      </div>

                      <Link
                        to="/company"
                        className="block py-2 text-gray-700 hover:text-gray-900"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Company
                      </Link>

                      <Link
                        to="/insights"
                        className="block py-2 text-gray-700 hover:text-gray-900"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Insights
                      </Link>

                      <Link
                        to="/contact"
                        className="block py-2 text-gray-700 hover:text-gray-900"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Contact
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

const ServiceCard = ({ icon, title, description, route }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(route)}
      className="flex gap-4 group cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
    >
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <div>
        <h4 className="font-medium text-gray-900 group-hover:text-indigo-500 transition-colors duration-200">
          {title}
        </h4>
        <p className="mt-1 text-sm text-gray-500 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const NavItem = ({ text, hasDropdown }) => (
  <div className="flex items-center">
    <button className="flex items-center gap-x-1 text-gray-700 hover:text-gray-900 transition-colors duration-200">
      {text}
      {hasDropdown && <ChevronDown className="w-4 h-4" />}
    </button>
  </div>
);

export default Navbar;
