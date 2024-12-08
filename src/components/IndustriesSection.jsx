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

  const TransportContent = () => (
    <div className="text-white">
      <p className="text-gray-300 text-lg mb-16 max-w-3xl">
        Few industries are as complex as the transport and logistics sector. To gain an edge over the competition, specialized knowledge in multiple areas — advanced geolocation and routing, optimal allocation and dispatch, dynamic pricing, real-time transactions, infrastructure scaling, cloud cost management — is critical. Work with a team like ours that has a proven track record.
      </p>

      {/* Illustration */}
      <div className="mb-24 relative h-[400px]">
        <img 
          src="11.1.png" 
          alt="Transport and Logistics Systems"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-3 gap-x-8 gap-y-6 mb-16">
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">01</span>
          <h3 className="text-white text-lg">Rider and driver apps</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">02</span>
          <h3 className="text-white text-lg">Fleet management</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">03</span>
          <h3 className="text-white text-lg">Routing optimization</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">04</span>
          <h3 className="text-white text-lg">Real-time allocation and dispatch</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">05</span>
          <h3 className="text-white text-lg">Geolocation and mapping</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">06</span>
          <h3 className="text-white text-lg">Dynamic and surge pricing</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">07</span>
          <h3 className="text-white text-lg">Predictive analytics & demand forecasting</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">08</span>
          <h3 className="text-white text-lg">Real-time payments and wallets</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">09</span>
          <h3 className="text-white text-lg">Warehouse and supply chain management tech</h3>
        </div>
      </div>

      {/* Impact Section */}
      <div className="mt-16">
        <h3 className="text-lg font-bold mb-6">IMPACT</h3>
        <div className="space-y-4">
          <p className="text-gray-300">
            Reached over 5 million downloads on an Android + iOS app that we built for a transport and logistics client
          </p>
          <p className="text-gray-300">
            Saved transportation and logistics client millions of dollars in actual cloud costs by optimizing all their cloud services — mapping, price search, routing, communications, payment processing, data storage, and monitoring.
          </p>
        </div>
      </div>
    </div>
  );

  const FinancialServicesContent = () => (
    <div className="text-white">
      <p className="text-gray-300 text-lg mb-16 max-w-3xl">
        The financial sector provides mission critical services to their customers, from banking to insurance to real-time payments. We help financial institutions modernize and build custom software with reliability, performance, and security at the core.
      </p>

      {/* Financial Services UI Illustration */}
      <div className="mb-24 relative h-[400px]">
        <img 
          src="11.2.png" 
          alt="Transport and Logistics Systems"
          className="w-full h-full object-contain"
        />
      </div>


      {/* Features Grid */}
      <div className="grid grid-cols-3 gap-x-8 gap-y-6 mb-16">
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">01</span>
          <h3 className="text-white text-lg">All-in-one banking and wallet apps</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">02</span>
          <h3 className="text-white text-lg">Personal finance and asset management apps</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">03</span>
          <h3 className="text-white text-lg">Insurance apps</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">04</span>
          <h3 className="text-white text-lg">Real-time payments and integrations</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">05</span>
          <h3 className="text-white text-lg">Blockchain for payment systems and trade finance</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">06</span>
          <h3 className="text-white text-lg">Smart contracts</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">07</span>
          <h3 className="text-white text-lg">Financial processes automation</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">08</span>
          <h3 className="text-white text-lg">Risk analysis and fraud detection</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">09</span>
          <h3 className="text-white text-lg">Regulatory compliance</h3>
        </div>
      </div>

      {/* Impact Section */}
      <div className="mt-16">
        <h3 className="text-lg font-bold mb-6">IMPACT</h3>
        <div className="space-y-4">
          <p className="text-gray-300">
            Developed an all-in-one financial SaaS platform for enterprises, offering invoicing, payments, reconciliation & reporting, and account management in a unified solution
          </p>
          <p className="text-gray-300">
            Implemented real-time payments for a service that supports up to thousands of transactions per minute and all major methods of payment
          </p>
          <p className="text-gray-300">
            Built a financial equity system for employees of the largest university network in the Philippines
          </p>
        </div>
      </div>
    </div>
  );

  const EcommerceContent = () => (
    <div className="text-white">
      <p className="text-gray-300 text-lg mb-16 max-w-3xl">
        We help retail and ecommerce clients grow their sales and modernize their operations by building exceptional ecommerce apps and back office apps for Web, iOS, and Android. We build solutions for warehousing, omnichannel, live selling, flash sales, cart rules, and loyalty programs.
      </p>

      {/* E-commerce UI Illustration */}
      <div className="mb-24 relative h-[400px]">
        <img 
          src="11.3.png" 
          alt="Transport and Logistics Systems"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-3 gap-x-8 gap-y-6 mb-16">
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">01</span>
          <h3 className="text-white text-lg">Custom ecommerce — Shopify, PrestaShop, Medusa, and more</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">02</span>
          <h3 className="text-white text-lg">Custom mobile ecommerce apps for Android and iOS</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">03</span>
          <h3 className="text-white text-lg">Real-time payments integration</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">04</span>
          <h3 className="text-white text-lg">Advanced multivendor solution</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">05</span>
          <h3 className="text-white text-lg">Omnichannel and social integration</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">06</span>
          <h3 className="text-white text-lg">Inventory and supply chain management</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">07</span>
          <h3 className="text-white text-lg">Personalization and recommendation engines</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">08</span>
          <h3 className="text-white text-lg">Predictive analytics and forecasting</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">09</span>
          <h3 className="text-white text-lg">Sales dashboards and analytics</h3>
        </div>
      </div>
    </div>
  );

  const HealthcareContent = () => (
    <div className="text-white">
      <p className="text-gray-300 text-lg mb-16 max-w-3xl">
        We build world-class tech for various facets of healthcare — patient and hospital management, medical devices / IoT integration, telemedicine, healthcare AI and analytics, regulatory compliance, and patient data security.
      </p>

      {/* Healthcare UI Illustration */}
      <div className="mb-24 relative h-[400px]">
        <img 
          src="11.4.png" 
          alt="Transport and Logistics Systems"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-3 gap-x-8 gap-y-6 mb-16">
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">01</span>
          <h3 className="text-white text-lg">Patient, doctor, and provider apps</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">02</span>
          <h3 className="text-white text-lg">Hospital management software</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">03</span>
          <h3 className="text-white text-lg">Secure Electronic Health Record (EHR) management</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">04</span>
          <h3 className="text-white text-lg">Healthcare IoT and wearables integration</h3>
        </div>
        
            <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">05</span>
          <h3 className="text-white text-lg">Healthcare AI for research, diagnosis, imaging, and more</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">06</span>
          <h3 className="text-white text-lg">Telehealth and patient engagement solutions</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">07</span>
          <h3 className="text-white text-lg">Blockchain for securely storing and sharing medical records</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">08</span>
          <h3 className="text-white text-lg">Cybersecurity to protect private patient and provider data</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">09</span>
          <h3 className="text-white text-lg">HIPAA compliance</h3>
        </div>
      </div>

      {/* Impact Section */}
      <div className="mt-16">
        <h3 className="text-lg font-bold mb-6">IMPACT</h3>
        <p className="text-gray-300">
          Built a centralized, real-time patient notification system for a major hospital network in the North America region. Deployed in over 50 hospitals.
        </p>
      </div>
    </div>
  );

  const CommunicationsContent = () => (
    <div className="text-white">
      <p className="text-gray-300 text-lg mb-16 max-w-3xl">
        We build custom chat and collaboration apps for enterprises and large organizations with data ownership, privacy, and scale at the forefront. We also develop self-hosted, secure LLMs that are trained on your company's custom data.
      </p>

      {/* Communications UI Illustration */}
      <div className="mb-24 relative h-[400px]">
        <img 
          src="11.5.png" 
          alt="Transport and Logistics Systems"
          className="w-full h-full object-contain"
        />
      </div>


      {/* Features Grid */}
      <div className="grid grid-cols-3 gap-x-8 gap-y-6 mb-16">
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">01</span>
          <h3 className="text-white text-lg">Custom chat and collaboration platforms</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">02</span>
          <h3 className="text-white text-lg">Enterprise-grade communications platforms</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">03</span>
          <h3 className="text-white text-lg">Helpdesk and ticketing platforms</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">04</span>
          <h3 className="text-white text-lg">APIs and SDKs for integration</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">05</span>
          <h3 className="text-white text-lg">Matrix protocol and Web3 decentralized architecture</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">06</span>
          <h3 className="text-white text-lg">Intelligent chatbots and assistants</h3>
        </div>
        
            <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">07</span>
          <h3 className="text-white text-lg">AI moderation</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">08</span>
          <h3 className="text-white text-lg">User authentication and access controls</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">09</span>
          <h3 className="text-white text-lg">Scaling and cloud cost optimization</h3>
        </div>
      </div>

      {/* Impact Section */}
      <div className="mt-16">
        <h3 className="text-lg font-bold mb-6">IMPACT</h3>
        <div className="space-y-4">
          <p className="text-gray-300">
            Built a decentralized, highly scalable communications network with use cases for general communications, healthcare, government, and enterprise use cases
          </p>
          <p className="text-gray-300">
            Developed and deployed a helpdesk-and-chat app that closed 100,000+ support tickets in a span of months
          </p>
        </div>
      </div>
    </div>
  );

  const MediaEntertainmentContent = () => (
    <div className="text-white">
      <p className="text-gray-300 text-lg mb-16 max-w-3xl">
        From streaming platforms to gaming experiences, we help media and entertainment companies build engaging digital products. Our expertise spans content delivery, user engagement, and monetization strategies.
      </p>

      {/* Media & Entertainment UI Illustration */}
      <div className="mb-24 relative h-[400px]">
        <img 
          src="11.6.png" 
          alt="Transport and Logistics Systems"
          className="w-full h-full object-contain"
        />
      </div>

      

      {/* Features Grid */}
      <div className="grid grid-cols-3 gap-x-8 gap-y-6 mb-16">
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">01</span>
          <h3 className="text-white text-lg">Streaming platforms development</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">02</span>
          <h3 className="text-white text-lg">Gaming and interactive experiences</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">03</span>
          <h3 className="text-white text-lg">Content delivery networks</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">04</span>
          <h3 className="text-white text-lg">Recommendation engines</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">05</span>
          <h3 className="text-white text-lg">User engagement and analytics</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">06</span>
          <h3 className="text-white text-lg">Monetization and subscription systems</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">07</span>
          <h3 className="text-white text-lg">Social features and community building</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">08</span>
          <h3 className="text-white text-lg">Content protection and DRM</h3>
        </div>
        
        <div className="border-t border-white pt-4">
          <span className="text-sm text-gray-500 font-mono block mb-2">09</span>
          <h3 className="text-white text-lg">Multi-platform deployment</h3>
        </div>
      </div>

      {/* Impact Section */}
      <div className="mt-16">
        <h3 className="text-lg font-bold mb-6">IMPACT</h3>
        <div className="space-y-4">
          <p className="text-gray-300">
            Developed a streaming platform that handles over 1 million concurrent viewers with sub-second latency
          </p>
          <p className="text-gray-300">
            Built an interactive gaming experience that increased user engagement by 300% and in-app purchases by 150%
          </p>
        </div>
      </div>
    </div>
    
  );

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
          {industries.map((industry) => (
            <motion.div key={industry.id}>
              <div className="flex items-center justify-between border-t border-white/20 py-6">
                <div className="flex items-center gap-4">
                  <span className="text-[#98ff98]/50 font-mono">{industry.id}</span>
                  <h2 className="text-[#98ff98] text-2xl font-bold">{industry.title}</h2>
                </div>
                <button 
                  onClick={() => setExpandedIndustry(expandedIndustry === industry.id ? null : industry.id)}
                  className="text-[#98ff98] text-3xl"
                >
                  {expandedIndustry === industry.id ? '−' : '+'}
                </button>
              </div>
              
              {expandedIndustry === industry.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden pb-16"
                >
                  {industry.id === '01' && <TransportContent />}
                  {industry.id === '02' && <FinancialServicesContent />}
                  {industry.id === '03' && <EcommerceContent />}
                  {industry.id === '04' && <HealthcareContent />}
                  {industry.id === '05' && <CommunicationsContent />}
                  {industry.id === '07' && <MediaEntertainmentContent />}
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
    
    
    
  );
};

export default IndustriesSection; 