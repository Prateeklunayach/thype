import { motion } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import { 
  HiOutlineScale,
  HiOutlineLockClosed,
  HiOutlineChartBar,
  HiOutlineBolt,
  HiOutlineUserGroup,
  HiOutlineCodeBracket
} from "react-icons/hi2"; // Using HeroIcons v2 for more modern look

const Hero = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col justify-center items-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {/* Gradient Orbs */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          />

          {/* Grid Pattern */}
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
            {[...Array(64)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
                className="border border-gray-200/20"
              />
            ))}
          </div>

          {/* Floating Elements */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0
              }}
              animate={{ 
                y: [0, -20, 0],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
              className="absolute w-4 h-4 bg-white/30 rounded-full blur-sm"
            />
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-6xl md:text-7xl font-extrabold text-gray-800"
        >
          THE SMALL STUDIO<br />FOR GIANT AMBITIONS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
          className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
        >
          We design, build, and ship exceptional software and AI solutions for
          innovation-driven companies worldwide.
        </motion.p>
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 20px rgba(0,0,0,0.2)"
          }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-10 px-8 py-3 bg-gray-800 text-white rounded-lg text-base md:text-lg font-semibold transform transition-all duration-300"
        >
          Build with us
        </motion.button>
      </div>
    </div>
  );
};

const LandingContent = () => {
  return (
    <div className="w-full bg-white py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="relative">
          <h2 className="text-4xl md:text-5xl font-semibold app-primary-font  text-gray-800 tracking-wide mb-4">
            BUILDING TOMORROW'S TECH, TODAY
          </h2>
          <div className="absolute -bottom-6 left-0 w-[1200px] h-[1px] bg-purple-800/50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-24">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
           <div className="w-[450px]">
  <p className="text-lg md:text-xl text-gray-600 text-justify">
    Whether you're looking to build a brand new app or take existing
    software to the next level, we can take you further than you've ever
    been before.
  </p>
</div>

          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-gray-600 text-justify">
            Since 2010, we’ve been working with ambitious clients, from venture-backed startups to Global 500 companies, to build exceptional tech that delivers results — apps that millions of users rely on everyday and have topped the charts.


            </p>
          </motion.div>
        </div>

        {/* Companies Grid with Animated Icons */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-6 justify-center items-center gap-12">
          {[
              {
              
                icon: "4.2.png",
                color: "#000000"
              },
                
                
            {
              
              icon: "4.1.png",
              color: "#1F45FC"
            },
            {
              
              icon: "4.6.webp",
              color: "#4B0082"
            },
            {
              
              icon: "4.7.jpg",
              color: "#4B0082"
            },
            {
              
              icon: "4.3.png",
              color: "#FF69B4"
            },
            {
              
              icon: "/4.4.jpg",
              color: "#00B14F"
            },

          ].map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center space-y-2 group"
            >
              <motion.div
                className="w-24 flex items-center justify-center rounded-xl bg-gray-50 
                            transition-all duration-300"
                whileHover={{ rotate: 10 }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src={company.icon} 
                  alt={company.name}
                  className="w-100 h-100 object-contain"
                />
              </motion.div>
              <motion.p 
                className="text-sm font-medium text-gray-800 tracking-wide"
                style={{ color: company.color }}
              >
                {company.name}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const Capabilities = () => {
  const [selectedCapability, setSelectedCapability] = useState(null);

  const capabilities = [
    {
      title: "UX/UI DESIGN",
      content: "Our design process combines aesthetics with functionality. We create intuitive, responsive interfaces that delight users and drive engagement. Services include wireframing, prototyping, user research, and comprehensive UI systems.",
      tools: ["Figma", "Adobe XD", "Sketch", "InVision"]
    },
    {
      title: "CUSTOM DEVELOPMENT",
      content: "End-to-end software development tailored to your specific needs. From web applications to mobile apps, we build scalable solutions using cutting-edge technologies.",
      tools: ["React", "Node.js", "Python", "Flutter"]
    },
    {
      title: "AI AND DATA SCIENCE",
      content: "Leverage the power of artificial intelligence and machine learning to gain insights and automate processes. We build custom AI solutions that drive business value.",
      tools: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI"]
    },
    {
      title: "DEVOPS",
      content: "Streamline your development and deployment processes with our DevOps expertise. We implement CI/CD pipelines and manage cloud infrastructure for optimal performance.",
      tools: ["AWS", "Docker", "Kubernetes", "Jenkins"]
    },
    {
      title: "CYBERSECURITY",
      content: "Protect your digital assets with our comprehensive security solutions. We implement robust security measures and conduct regular audits to ensure your data stays safe.",
      tools: ["Penetration Testing", "Security Audits", "Encryption", "Access Control"]
    },
  ];

  return (
    <div className="w-full bg-white py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="relative mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 app-primary-font mb-4">
            CAPABILITIES
          </h2>
          <div className="absolute -bottom-6 left-0 w-[1200px] h-[1px] bg-purple-800/50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <img
              src="/capabilities-illustration.png"
              alt="Capabilities Illustration"
              className="max-w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center items-start"
          >
            <p className="text-xl text-gray-600 mb-12">
              All the design and tech expertise you need. From initial sketch to
              launch to scale.
            </p>
            <ul className="space-y-8 w-full">
              {capabilities.map((capability, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="w-full"
                >
                  <div className="flex justify-between items-center cursor-pointer group"
                       onClick={() => setSelectedCapability(selectedCapability === index ? null : index)}>
                    <span className="text-2xl font-medium text-gray-800 tracking-wide">
                      {capability.title}
                    </span>
                    <motion.span
                      animate={{ rotate: selectedCapability === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl font-medium text-gray-800 group-hover:text-purple-600"
                    >
                      +
                    </motion.span>
                  </div>
                  
                  {selectedCapability === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pl-4 border-l-2 border-purple-500"
                    >
                      <p className="text-gray-600 mb-4">{capability.content}</p>
                      <div className="flex flex-wrap gap-2">
                        {capability.tools.map((tool, toolIndex) => (
                          <span
                            key={toolIndex}
                            className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection = () => {
  const projectsRef = useRef(null);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (projectsRef.current) {
        const { top } = projectsRef.current.getBoundingClientRect();
        console.log(top);
        setIsProjectsVisible(top <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      name: "ANGKAS",
      img: "1.0.png",
      stats: []
    },
    {
      name: "NEXAFLOW",
      img: "1.2.png",
      stats: []
    },
    {
      name: "NEXAFLOW",
      img: "1.1.png",
      stats: []
    },
    {
      name: "NEXAFLOW",
      img: "1.3.png",
      stats: []
    },{
      name: "NEXAFLOW",
      img: "1.4.png",
      stats: []
    },
    {
      name: "NEXAFLOW",
      img: "1.5.png",
      stats: [],
      
    }
  ];

  return (
    <div
      ref={projectsRef}
      className="w-full py-20 transition-colors duration-700 ease-in-out"
      style={{
        backgroundColor: isProjectsVisible ? "#1f2937" : "white",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="relative mb-20">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-8 h-8 rounded-full bg-[#98ff98] flex items-center justify-center">
              <span className="text-gray-900 font-semibold">2</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#98ff98] tracking-wide">
              PROJECTS
            </h2>
          </div>
          <div className="absolute bottom left-0 w-[1200px] h-[1px] bg-[#98ff98]/50"></div>
        </div>

        <div className="mt-16 mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
          >
            CHART-TOPPING.
            <br />
            AWARD-WINNING.
          </motion.h3>
        </div>

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            style={{backgroundColor: "#f9f9f9"}}
            className="bg-white rounded-2xl overflow-hidden mb-12"
          >
            <img style={{margin:"auto",width:"100%"}} src={project.img}></img>
            
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <div className="w-full bg-[#1f2937] py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#98ff98] to-[#00ff00] flex items-center justify-center shadow-lg">
            <span className="text-[#1f2937] font-semibold">3</span>
          </div>
          <h2 className="text-2xl font-semibold text-[#98ff98] tracking-wider uppercase">
            What Our Clients Say
          </h2>
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold text-white text-center mb-16 leading-tight"
        >
          We Deliver Excellence Every Time.
        </motion.h3>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                quote: "They rebuilt our ride-hailing platform servicing 200,000+ bookings daily within 10 months. Their commitment to excellence is unmatched.",
                author: "Walter W.",
                position: "Product Head, Ride-Hailing Co."
              },
              {
                quote: "Their AI expertise transformed our analytics. They surpassed every expectation with groundbreaking solutions.",
                author: "Sarah M.",
                position: "CTO, Tech Solutions Inc."
              },
              {
                quote: "Their focus on detail and quality is exceptional. They delivered a world-class product on time and within budget.",
                author: "James K.",
                position: "CEO, Digital Ventures"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#98ff98] via-[#00ff00] to-[#008000] rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative p-10 bg-[#2d3748] rounded-xl shadow-lg">
                  <div className="mb-6">
                    <svg
                      className="w-10 h-10 text-[#98ff98]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-300 italic leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-[#98ff98] font-semibold text-lg">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-400 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-12 gap-4">
            {[0, 1, 2].map((dot) => (
              <motion.button
                key={dot}
                whileHover={{ scale: 1.2 }}
                className="w-4 h-4 rounded-full bg-gray-500 hover:bg-[#98ff98] transition-colors duration-300"
                aria-label={`Go to slide ${dot + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const OurDifference = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        console.log(top);
        setIsVisible(top <= -99);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: HiOutlineScale,
      title: "The IP is all yours",
      description: "When you work with us, all code is 100% yours and yours alone. We meticulously document all source code and designs for long-term maintainability."
    },
    {
      icon: HiOutlineLockClosed,
      title: "Tight on confidentiality",
      description: "When you engage us, we know you’re entrusting us with your business. So we treat your confidential information with extreme care and apply tight security measures."
    },
    {
      icon: HiOutlineUserGroup,
      title: "Trust is golden",
      description: "The vast majority of our business comes from multiyear engagements and repeat clients who know we’d deliver for them time and time again."
    },
    {
      icon: HiOutlineChartBar,
      title: "Proven track record",
      description: "We have been building exceptional software for over a decade and have deep expertise across industries. We use that expertise to build best-in-class products that put you ahead of the competition."
    },
    {
      icon: HiOutlineBolt,
      title: "Scale up or down",
      description: "We match the team size to your unique needs. We can allocate a larger team during intensive product development then scale as you need."
    },
    {
      icon: HiOutlineCodeBracket,
      title: "Fully dedicated team",
      description: "When our team members are working on your project, they’re 100% on deck. We don’t juggle projects or context switch — we give your project’s goals the care and attention they deserve."
    }
  ].map((feature, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="p-8 rounded-xl bg-white hover:bg-gray-50 
                     border border-gray-100 hover:border-gray-200
                     shadow-sm hover:shadow-md
                     transition-all duration-300">
        {/* Header with Icon and Title */}
        <div className="flex items-center gap-4 mb-4">
          {/* Icon Container */}
          <div className="flex-shrink-0">
            <div className="relative w-12 h-12 flex items-center justify-center">
              {/* Icon Background */}
              <div className="absolute inset-0 bg-gray-100 rounded-lg 
                            group-hover:bg-gray-200 transition-all duration-300">
              </div>
              
              {/* Icon */}
              <feature.icon 
                className="relative w-6 h-6 text-gray-900 z-10
                         transform group-hover:scale-110 transition-all duration-300" 
              />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-900
                       group-hover:text-black transition-colors duration-300">
            {feature.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 
                     transition-colors duration-300 ml-16">
          {feature.description}
        </p>
      </div>
    </motion.div>
  ));

  return (
    <div
      ref={sectionRef}
      className="w-full py-20 transition-colors duration-700 ease-in-out"
      style={{
        backgroundColor: isVisible ? "white" : "#1f2937",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] flex items-center justify-center shadow-lg">
            <span className="text-white font-semibold">4</span>
          </div>
          <h2 className="text-2xl font-semibold text-[#6366f1] tracking-wider uppercase">
            Our Difference
          </h2>
        </div>
        

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {features}
        </div>
        

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-gray-200 my-20"></div>
        

        {/* FAQ Section Header */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] flex items-center justify-center shadow-lg">
            <span className="text-white font-semibold">5</span>
          </div>
          
          <h2 className="text-2xl font-semibold text-[#6366f1] tracking-wider uppercase">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Add FAQ Section here */}
        <FAQSection />

      </motion.div>
    </div>
  );
};

// Add FAQSection component before the export
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How is White Widget different from any other tech firm?",
      answer: "We combine deep technical expertise with a design-first approach, delivering solutions that are both powerful and beautiful. Our team consists of industry veterans who've worked with global brands and startups alike."
    },
    {
      question: "How does White Widget stand out among other digital agencies?",
      answer: "We're not just implementers – we're strategic partners who invest in understanding your business goals. Our proven track record with industry leaders and our commitment to innovation sets us apart."
    },
    {
      question: "Do you cater to clients from different timezones?",
      answer: "Yes, we have offices in Manila and Hong Kong, allowing us to serve clients globally. We maintain flexible schedules to ensure seamless communication across different time zones."
    },
    {
      question: "What measures does White Widget take to ensure the excellence of its output?",
      answer: "We follow rigorous quality assurance processes, conduct regular code reviews, and implement automated testing. Our team stays updated with the latest technologies and best practices."
    },
    {
      question: "After project completion, who owns the intellectual property?",
      answer: "You retain 100% ownership of all intellectual property. We provide complete documentation and source code, ensuring you have full control over your product."
    },
    {
      question: "How does White Widget support startups?",
      answer: "We offer scalable solutions that grow with your business, providing technical expertise and strategic guidance. We can adapt our team size and services based on your startup's needs and budget."
    },
    // ... rest of the faqs array ...
  ];

  return (
    <>
      <div className=" mx-auto mt-16">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              className="w-full py-6 flex justify-between items-center text-left hover:text-gray-600"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-lg font-medium text-gray-900">{faq.question}</span>
              <span className="ml-6 flex-shrink-0">
                {openIndex === index ? (
                  <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                )}
              </span>
            </button>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="pb-6"
              >
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            )}
          </div>
        ))}
      </div>

     
    </>
  );
};

const FooterSection = () => {
  return (
    <div className="w-full bg-black text-white py-16">
    <div className=" mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* Left Section */}
        <div className="col-span-3">
          <h2 className="text-6xl font-bold mb-8 ">Let's get to work.</h2>
          <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
            Talk to us
          </button>
        </div>

        {/* Middle Section - Navigation */}
        <div className="col-span-1">
          <nav className="space-y-4">
            <a href="/" className="block hover:text-gray-300">Home</a>
            <a href="/work" className="block hover:text-gray-300">Work</a>
            <a href="/capabilities" className="block hover:text-gray-300">Capabilities</a>
            <a href="/industries" className="block hover:text-gray-300">Industries</a>
            <a href="/company" className="block hover:text-gray-300">Company</a>
            <a href="/insights" className="block hover:text-gray-300">Insights</a>
            <a href="/contact" className="block hover:text-gray-300">Contact</a>
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
  </div>
  );
};


const App = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const sections = containerRef.current.querySelectorAll('section[data-bg-color]');
      let newColor = "white"; // default color

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Change color when section is 40% in view
        if (rect.top < viewportHeight * 0.6 && rect.bottom > viewportHeight * 0.4) {
          newColor = section.dataset.bgColor;
        }
      });

      setBackgroundColor(newColor);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen overflow-hidden"
      style={{ 
        backgroundColor,
        transition: "background-color 0.8s ease-in-out"
      }}
    >
      {/* Hero Section */}
      <section data-bg-color="white" className="w-full">
        <Hero />
      </section>

      {/* Landing Content */}
      <section data-bg-color="white" className="w-full">
        <LandingContent />
      </section>

      {/* Capabilities */}
      <section data-bg-color="white" className="w-full">
        <Capabilities />
      </section>

      {/* Projects Section - Dark Background */}
      <section data-bg-color="#1d1b2e" className="w-full">
        <ProjectsSection />
      </section>

      {/* Testimonials Section - Keep Dark */}
      <section data-bg-color="#1d1b2e" className="w-full">
        <TestimonialsSection />
      </section>

      {/* Our Difference - Back to White */}
      <section data-bg-color="white" className="w-full">
        <OurDifference />
      </section>

      {/* Footer */}
      <section data-bg-color="black" className="w-full">
        <FooterSection />
      </section>
    </motion.div>
  );
};

export default App;
