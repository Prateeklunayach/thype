import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const CapabilitiesSection = () => {
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
      initial={{ borderRadius: "50%", scale: 0 }}
      animate={{ borderRadius: "0%", scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{
        type: "spring",
        duration: 1.2,
        stiffness: 50,
      }}
      className="min-h-screen overflow-hidden"
      style={{ 
        backgroundColor,
        transition: "background-color 0.8s ease-in-out"
      }}
    >
      
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16"
      >
        <hr style={{borderColor:"#302e41"}} className="border-t-1 mt-16 mb-10" />
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{color:"#302e41"}}
          className="text-5xl md:text-7xl font-extrabold text-gray-800 leading-tight"
        >
          FROM MINIMUM VIABLE
          <br />
          TO MOST VALUABLE
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-indigo-600 max-w-3xl"
        >
          As an end-to-end tech agency, we combine creativity, technology, and
          strategy to deliver impactful software solutions tailored to your
          needs.
        </motion.p>
      </motion.div>

      {/* Sections */}
      <Section
        title="PRODUCT DESIGN"
        content="Our product design team creates intuitive, user-centric experiences that drive engagement and deliver exceptional results. We focus on designing solutions that connect with your audience."
        features={[
          "— UI/UX design",
          "— Branding and strategy",
          "— Component-driven design systems",
          "— High-fidelity prototyping",
          "— Illustration and graphic design",
          "— Motion design and animation",
          "— Behavioral psychology",
          "— Inclusive design and accessibility",
        ]}
        image="1.webp"
        reverse={false}
      />

      <Section
        title="WEB DEVELOPMENT"
        content="Our team builds scalable and high-performing web solutions tailored to your business needs. We focus on creating seamless digital experiences with cutting-edge technology."
        features={[
          "— Responsive and adaptive design",
          "— Front-end and back-end development",
          "— E-commerce solutions and integrations",
          "— Single-Page Applications (SPAs)",
          "— API design and development",
          "— Web performance optimization",
          "— Accessibility and internationalization",
          "— Emerging tech (web3, blockchain, Matrix protocol, Web Assembly)",
          "— Backend development and API integration",
          "— Software architecture",
        ]}
        image="2.webp"
        reverse={true}
      />

      <Section
        title="MOBILE DEVELOPMENT"
        content="We specialize in developing innovative mobile solutions that deliver a seamless experience across devices. Our mobile applications are tailored to your unique business needs."
        features={[
          "— Mobile app development (iOS and Android)",
          "— Evolving tech (wearables, voice, on-device AI models)",
          "— Native and cross-platform solutions",
          "— Integration with existing enterprise systems",
          "— Mobile analytics and user engagement",
          "— Security and data protection",
          "— AR/VR mobile experiences",
          "— Internet of Things (IoT) mobile integration",
        ]}
        image="3.webp"
        reverse={false}
      />

      <Section
        title="AI AND MACHINE LEARNING"
        content="Leverage the power of AI to transform your business. Our AI and ML experts design solutions that enhance decision-making and drive innovation."
        features={[
          "— Data lakes and data warehousing",
          "— Natural language processing (NLP), computer vision, speech recognition",
          "— Generative AI systems",
          "— Predictive analytics and forecasting",
          "— Knowledge graphs and ontologies",
          "— Automated data extraction and analysis",
          "— Intelligent chatbots and assistants",
          "— Expert and recommendation systems",
        ]}
        image="5.png"
        reverse={true}
      />

      <Section
        title="DEVOPS"
        content="Optimize your infrastructure and improve efficiency with our DevOps services. We ensure reliability, scalability, and seamless deployment for your applications."
        features={[
          "— Infrastructure automation",
          "— Site reliability engineering (SRE)",
          "— Cloud cost reduction and optimization",
          "— Load testing and balancing",
          "— Performance and optimization",
          "— Monitoring, logging, and alerting",
          "— Secure backup and recovery",
          "— Microservices & serverless architectures",
        ]}
        image="4.webp"
        reverse={false}
      />
      
      <Section
        data-bg-color="#0d1b2a"
        title="CYBERSECURITY"
        content="From start to finish, we integrate tight security processes and standards. We architect systems to have monitoring and guardrails to detect vulnerabilities and avoid breaches."
        features={[
          "— Security assessments / audits",
          "— Cloud and network security",
          "— Secure coding practices",
          "— Real-time threat detection",
          "— Identity and access management",
          "— Data privacy and compliance",
          "— OWASP standards",
        ]}
        image="6.webp"
        reverse={true}
      />

      {/* Tech Stack Section */}
      <section data-bg-color="#1d1b2e" className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Divider Line */}
          <div className="w-full h-[1px] bg-gray-800 mb-20"></div>

          {/* Title and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-7xl font-bold text-white mb-8">
              TECH STACK
            </h2>
            <p className="text-[#98ff98] text-2xl max-w-3xl mb-20">
              We master an intentionally extensive tech stack so that we can offer our clients 
              the best combination of technologies. All tailored to your requirements.
            </p>
          </motion.div>

          {/* Tech Icons */}
          <div className="grid grid-cols-4 md:grid-cols-8 gap-12 mb-20">
            {[
              { id: 'mobile', path: 'M5 2h14a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v16h14V4H5zm7 14a1 1 0 110-2 1 1 0 010 2z' },
              { id: 'laptop', path: 'M4 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm2 0v10h12V5H6zm-2 12h16v2H4v-2z' },
              { id: 'watch', path: 'M9 6v2h6V6a3 3 0 00-6 0zm8 2V6a5 5 0 00-10 0v2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2v-8a2 2 0 00-2-2h-2z' },
              { id: 'vr', path: 'M13 5H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2h-4z' },
              { id: 'desktop', path: 'M4 3h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2zm0 2v10h16V5H4z' },
              { id: 'server', path: 'M4 4a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm14 0H6v4h12V4z' },
              { id: 'gamepad', path: 'M12 2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2h6z' },
              { id: 'robot', path: 'M9 2h6a2 2 0 012 2v2a2 2 0 01-2 2H9a2 2 0 01-2-2V4a2 2 0 012-2z' }
            ].map((icon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-center"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-12 h-12 text-white stroke-[1.5]"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={icon.path} />
                </svg>
              </motion.div>
            ))}
          </div>

          {/* Development Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=""
          >
            <div className="border-b-2 border-white ">
              <h3 className="text-white text-4xl font-semibold mb-8">Development</h3>
            </div>
            
            {/* Web */}
            <div className="grid grid-cols-1 md:grid-cols-[250px,1fr] border-b-2 border-white py-8">
              <h4 className="text-white text-xl font-normal">Web</h4>
              <div>
                <p className="text-white font-light">
                  JavaScript, TypeScript, Python, Go, Java, HTML5/CSS3, React, Next.js, Vue.js, Node.js, Nuxt.js, Express, Angular, Svelte
                </p>
              </div>
            </div>

            {/* iOS */}
                <div className="grid grid-cols-1 md:grid-cols-[250px,1fr] border-b-2 border-white py-8">
              <h4 className="text-white text-xl font-normal">iOS</h4>
              <div>
                <p className="text-white font-light">
                  Swift, SwiftUI, Flutter, Metal, Core ML, XCTest, VIPER, Xcode Server
                </p>
              </div>
            </div>

            {/* Android */}
                <div className="grid grid-cols-1 md:grid-cols-[250px,1fr] border-b-2 border-white py-8 ">
              <h4 className="text-white text-xl font-normal">Android</h4>
              <div>
                <p className="text-white font-light">
                  Kotlin, Flutter, Jetpack Compose, Coroutines, JUnit, Mockito, Espresso
                </p>
              </div>
            </div>

            {/* Data Storage */}
            <div className="grid grid-cols-1 md:grid-cols-[250px,1fr] border-b-2 border-white py-8">
              <h4 className="text-white text-xl font-normal">Data Storage</h4>
              <div>
                <p className="text-white font-light">
                  Neo4j, GraphDB, BigQuery, Apache Cassandra, Aleph, Couchbase, Snowflake, Elasticsearch, FAISS, In Memory, Milvus, OpenSearch, Pinecone, Weaviate
                </p>
              </div>
            </div>

            {/* Location Services */}
            <div className="grid grid-cols-1 md:grid-cols-[250px,1fr] border-b-2 border-white py-8">
              <h4 className="text-white text-xl font-normal">Location Services</h4>
              <div>
                <p className="text-white font-light">
                  HERE Maps, Mapbox, Google Maps, OpenStreetMap, Overture Maps
                </p>
              </div>
            </div>

            {/* Graphics */}
            <div className="grid grid-cols-1 md:grid-cols-[250px,1fr] border-b-2 border-white py-8">
              <h4 className="text-white text-xl font-normal">Graphics</h4>
              <div>
                <p className="text-white font-light">
                  Unity 3D, WebGL, D3.js, NetworkX, GSAP
                </p>
              </div>
            </div>

            {/* Ecommerce */}
            <div className="grid grid-cols-1 md:grid-cols-[250px,1fr] border-b-2 border-white py-8">
              <h4 className="text-white text-xl font-normal">Ecommerce</h4>
              <div>
                <p className="text-white font-light">
                  Shopify, PrestaShop, Medusa, Magento, Trailblaze (our in-house solution)
                </p>
              </div>
            </div>

            {/* Testing */}
              <div className="grid grid-cols-1 md:grid-cols-[200px,1fr] border-b-2 border-white py-6">
              <h4 className="text-white text-xl font-normal">Testing</h4>
              <div>
                <p className="text-white font-light">
                  Cypress, Jest, Mocha.js, Puppeteer, Selenium, WebdriverIO
                </p>
              </div>
            </div>

            {/* CMS */}
            <div className="grid grid-cols-1 md:grid-cols-[250px,1fr] border-b-2 border-white py-8">
              <h4 className="text-white text-xl font-normal">CMS</h4>
              <div>
                <p className="text-white font-light">
                  WordPress, Sanity.io, Django, Flask, Drupal, Contentful, Gatsby, Hugo, Jekyll
                </p>
              </div>
            </div>
          </motion.div>

          {/* Artificial Intelligence and Data Science Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=""
          >
            <div className="border-b-2 mt-14 border-white mb-8">
              <h3 className="text-white text-4xl font-semibold mb-8">
                Artificial Intelligence and Data Science
              </h3>
            </div>

            {/* Areas */}
            <div className="grid grid-cols-1 md:grid-cols-[250px,1fr] border-b-2 border-white py-8">
              <h4 className="text-white text-xl font-normal">Areas</h4>
              <div>
                <p className="text-white font-light">
                  Natural Language Processing (NLP), Computer Vision, Speech, Prediction and Planning, Expert Systems, Knowledge Graphs, Automated Data Extraction and Analysis, Business Analysis
                </p>
              </div>
            </div>

            {/* Utilities */}
            <div className="grid grid-cols-1 md:grid-cols-[250px,1fr] border-b-2 border-white py-8">
              <h4 className="text-white text-xl font-normal">Utilities</h4>
              <div>
                <p className="text-white font-light">
                  TensorFlow, PyTorch, Keras, scikit-learn
                </p>
              </div>
            </div>

            {/* Data Vis */}
            <div className="grid grid-cols-1 md:grid-cols-[250px,1fr] border-b-2 border-white py-8">
              <h4 className="text-white text-xl font-normal">Data Vis</h4>
              <div>
                <p className="text-white font-light">
                  Google Data Studio, NetworkX, Tableau, PowerBI, Flourish, DataWrapper, Cosmograph
                </p>
              </div>
            </div>

            {/* Orchestration */}
            <div className="grid grid-cols-1 md:grid-cols-[250px,1fr] border-b-2 border-white py-8">
              <h4 className="text-white text-xl font-normal">Orchestration</h4>
              <div>
                <p className="text-white font-light">
                  Langchain, Llama Index, Airflow, Langflow
                </p>
              </div>
            </div>

            {/* Data Storage */}
            <div className="grid grid-cols-1 md:grid-cols-[250px,1fr] border-b-2 border-white py-8">
              <h4 className="text-white text-xl font-normal">Data Storage</h4>
              <div>
                <p className="text-white font-light">
                  Neo4j, GraphDB, BigQuery, Apache Cassandra, Aleph, Couchbase, Snowflake, Elasticsearch, FAISS, In Memory, Milvus, OpenSearch, Pinecone, Weaviate
                </p>
              </div>
            </div>

            {/* Models and Providers */}
                  <div className="grid grid-cols-1 md:grid-cols-[250px,1fr] border-b-2 border-white py-8">
              <h4 className="text-white text-xl font-normal">Models and Providers</h4>
              <div>
                <p className="text-white font-light">
                  OpenAI ChatGPT, GPT-3.5, and GPT-4, Meta Llama, Google Bard, Anthropic Claude, Cohere, Hugging Face, AI21, BLOOM, DALL-E, Stable Diffusion, Whisper, AssemblyAI, Replicate
                </p>
              </div>
            </div>
          </motion.div>

          {/* DevOps and Cybersecurity Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 mt-20"
          >
            <div className="border-b-2 border-white mb-8">
              <h3 className="text-white text-4xl font-semibold mb-8">
                DevOps and Cybersecurity
              </h3>
            </div>

            {/* Platforms */}
              <div className="grid grid-cols-1 md:grid-cols-[250px,1fr] border-b-2 border-white py-8">
              <h4 className="text-white text-xl font-normal">Platforms</h4>
              <div>
                <p className="text-white font-light">
                  Google Cloud Platform (GCP), Amazon Web Services (AWS), Microsoft Azure, Linode, Vercel, Heroku, Netlify, Cloudflare
                </p>
              </div>
            </div>

            {/* Infrastructure */}
                  <div className="grid grid-cols-1 md:grid-cols-[250px,1fr] border-b-2 border-white py-8">
              <h4 className="text-white text-xl font-normal">Infrastructure</h4>
              <div>
                <p className="text-white font-light">
                  Docker, Kubernetes, Terraform, Helm, Ansible, Envoy, Pulumi, Chef, Puppet, Istio, Linkerd
                </p>
              </div>
            </div>

            {/* GCP */}
            <div className="grid grid-cols-1 md:grid-cols-[250px,1fr] border-b-2 border-white py-8">
              <h4 className="text-white text-xl font-normal">GCP</h4>
              <div>
                <p className="text-white font-light">
                  Compute Engine, Cloud Functions, Cloud Run, Firebase, App Engine, Kubernetes Engine, Big Query, Cloud Storage, Google Maps
                </p>
              </div>
            </div>

            {/* AWS */}
            <div className="grid grid-cols-1 md:grid-cols-[250px,1fr] border-b-2 border-white py-8">
              <h4 className="text-white text-xl font-normal">AWS</h4>
              <div>
                <p className="text-white font-light">
                  EC2, S3, CloudFront, EKS, Lambda, RDS, SNS, EKS, DynamoDB, Fargate
                </p>
              </div>
            </div>

            {/* Monitoring */}
            <div className="grid grid-cols-1 md:grid-cols-[250px,1fr] border-b-2 border-white py-8">
              <h4 className="text-white text-xl font-normal">Monitoring</h4>
              <div>
                <p className="text-white font-light">
                  Prometheus, Grafana, Jaeger, OpenTelemetry, Kali, Nagios, GitLab CI/CD, GitHub Actions, Cloudflare
                </p>
              </div>
            </div>
          </motion.div>

          {/* Design Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 mt-20"
          >
            <div className="border-b-2 border-white mb-8">
              <h3 className="text-white text-4xl font-semibold mb-8">
                Design
              </h3>
            </div>

            {/* Systems */}
            <div className="grid grid-cols-1 md:grid-cols-[250px,1fr] border-b-2 border-white py-8">
              <h4 className="text-white text-xl font-normal">Systems</h4>
              <div>
                <p className="text-white font-light">
                  Design Systems, Atomic Design, Responsive Design, Human Interface Guidelines, Material Design, Carbon
                </p>
              </div>
            </div>

            {/* UI/UX Design */}
            <div className="grid grid-cols-1 md:grid-cols-[250px,1fr] border-b-2 border-white py-8">
              <h4 className="text-white text-xl font-normal">UI/UX Design</h4>
              <div>
                <p className="text-white font-light">
                  Figma, Illustrator, Photoshop, XD, Balsamiq
                </p>
              </div>
            </div>

            {/* Animation */}
            <div className="grid grid-cols-1 md:grid-cols-[250px,1fr] border-b-2 border-white py-8">
              <h4 className="text-white text-xl font-normal">Animation</h4>
              <div>
                <p className="text-white font-light">
                  After Effects, Lottie, Final Cut Pro
                </p>
              </div>
            </div>

            {/* Principles */}
            <div className="grid grid-cols-1 md:grid-cols-[250px,1fr] border-b-2 border-white py-8">
              <h4 className="text-white text-xl font-normal">Principles</h4>
              <div>
                <p className="text-white font-light">
                  Visibility, constraints, accessibility, affordance, feedback, consistency, scalability
                </p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </section>
      

       {/* Official Partners Section */}
       <section data-bg-color="white" className="w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
              <Section
                title="OFFICIAL PARTNERS"
                subtitle="For mission-critical builds, we know there are no surprises when we work with our partners."
                customContent={
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                    {/* Left Column - Features */}
                    <div className="space-y-12">
                      {/* Handpicked for excellence */}
                      <div className="flex gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-xl font-semibold text-gray-700">A</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            Handpicked for excellence
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            We collaborate with only the best tech partners, only making our collaboration official when we've already used their tools for many years. We've built extensive projects with these partners, and we do that before deciding to specialize in their platform and collaborating with them to improve their products.
                          </p>
                        </div>
                      </div>

                      {/* Tailored to your needs */}
                      <div className="flex gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-xl font-semibold text-gray-700">B</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            Tailored to your needs
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            We only recommend a partner if they're a good fit for your needs. Because so many providers just ignore tech support requests, it helps to work with vetted teams we can trust to be in constant communication. You don't need to use our partner if something works better! We only care about what suits your costs, requirements and timeline best.
                          </p>
                        </div>
                      </div>

                      {/* Insider access to direct support */}
                      <div className="flex gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-xl font-semibold text-gray-700">C</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            Insider access to direct support
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            We're positioned to give you the best training and support available, thanks to our close relationships with our partners. This means you get insider access to the latest updates and features, ensuring your projects are always ahead of the curve.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="flex items-center justify-center">
                      <div className="relative w-full aspect-square max-w-md">
                        <div className="absolute inset-0 bg-indigo-100/50 rounded-[3rem]"></div>
                        <motion.div
                          initial={{ scale: 0.9, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.8 }}
                          className="relative z-10 p-8"
                        >
                          <img
                            src="2.4.png"
                            alt="Partnership Illustration"
                            className="w-full h-full object-contain"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                }
                isPartnerSection={true}
              />
            </div>
          </section>
      


      {/* Partner Cards Section with White Background */}
      <section data-bg-color="white" className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py- 24">
          <div className="space-y-12">
            {/* GraphDB Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2rem] border border-indigo-100 hover:border-indigo-200 transition-colors p-12"
            >
              {/* Logo Container */}
              <div className="absolute -top-5 left-12 bg-white px-4">
                <img 
                  src="2.1.webp" 
                  alt="GraphDB" 
                  className="h-14"
                />
              </div>
              <div className="pt-4">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Get the most powerful, scalable RDF Database for Semantic Knowledge Graphs. GraphDB allows you to link diverse data, index it for semantic search and enrich it via text analysis to build big knowledge graphs.{' '}
                  <a href="#" className="text-indigo-500 hover:text-indigo-600 font-medium inline-flex items-center group">
                    Unlock the full potential of your data with GraphDB{' '}
                    <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Hasura Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-[2rem] border border-indigo-100 hover:border-indigo-200 transition-colors p-12"
            >
              {/* Logo Container */}
              <div className="absolute -top-6 left-12 bg-white px-4">
                <img 
                  src="2.2.webp" 
                  alt="Hasura" 
                  className="h-14"
                />
              </div>
              <div className="pt-4">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Hasura makes data access easy, by instantly composing a GraphQL API that is backed by databases and services. The nature of GraphQL itself and Hasura's dynamic approach makes integration and iteration easy.{' '}
                  <a href="#" className="text-indigo-500 hover:text-indigo-600 font-medium inline-flex items-center group">
                    Experience the simplicity of data access with Hasura{' '}
                    <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </p>
              </div>
            </motion.div>

            {/* HERE Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative rounded-[2rem] border border-indigo-100 hover:border-indigo-200 transition-colors p-12"
            >
              {/* Logo Container */}
              <div className="absolute -top-5 left-12 bg-white px-4 ">
                <img 
                  src="2.3.webp" 
                  className="h-10"
                />
              </div>
              <div className="pt-4 ">
                <p className="text-gray-700 text-lg leading-relaxed">
                  HERE Maps is a PaaS for building, deploying and scaling location solutions. Armed with critical location data and technology tools, they're developing solutions that solve the biggest challenges in mapping today.{' '}
                  <a href="#" className="text-indigo-500 hover:text-indigo-600 font-medium inline-flex items-center group">
                    Explore the possibilities of location intelligence{' '}
                    <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <div className="mt-24 w-full bg-black text-white py-16 ">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            {/* Left Section */}
            <div className="col-span-3">
              <h2 className="text-6xl font-bold mb-8">Let's get to work.</h2>
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
    </motion.div>
  );
};

const Section = ({ 
  title, 
  content, 
  features, 
  image, 
  reverse, 
  subtitle,
  customContent,
  isPartnerSection,
  className = "",
  ...props
}) => {
  return (
    <section {...props} className={`py-24 ${reverse ? "bg-transparent" : "bg-transparent"} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isPartnerSection ? (
          <>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl text-indigo-600 mt-4">
                {subtitle}
              </p>
            )}
            {customContent}
          </>
        ) : (
          // Your existing section layout
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              reverse ? "lg:grid-flow-col-dense" : ""
            }`}
          >
            {reverse && (
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={image}
                  alt={`${title} Example`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}

            <motion.div
              initial={{ x: reverse ? 50 : -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2
                style={{ lineHeight: "1.2" }}
                className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-8"
              >
                {title}
              </h2>
              <p
                style={{ lineHeight: "1.7" }}
                className="text-lg text-gray-700 mb-6"
              >
                {content}
              </p>
              <ul className="text-lg text-gray-600 list-disc list-inside">
                {features.map((feature, index) => (
                  <li
                    style={{ textDecoration: "none", listStyle: "none", lineHeight: "1.7" }}
                    key={index}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>

            {!reverse && (
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={image}
                  alt={`${title} Example`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default CapabilitiesSection;
