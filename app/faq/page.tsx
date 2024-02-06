'use client'
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import { useState } from 'react';

const InsuranceFAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqData = [
    {
      question: 'How secure is my insurance information?',
      answer:
        'We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.',
    },
    {
      question: 'How can I customize my insurance coverage?',
      answer: 'Our insurance plans are customizable. You can tailor your coverage to meet your specific needs and budget.',
    },
    {
      question: 'Is there a waiting period for insurance claims?',
      answer:
        'There may be a waiting period for certain insurance claims, depending on the policy terms and conditions. Please refer to your policy documents for details.',
    },
  ];

  const toggleFAQ = (index:any) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
    <Navbar/>
    <div className="py-24 px-8 max-w-5xl mx-auto">
      <ul className="basis-1/2">
        {faqData.map((item, index) => (
          <li key={index}>
            <button
              className={`relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg ${
                index === expandedIndex ? 'border-primary' : 'border-base-content/10'
              }`}
              aria-expanded={index === expandedIndex ? 'true' : 'false'}
              onClick={() => toggleFAQ(index)}
            >
              <span className="flex-1 text-base-content">{item.question}</span>
              <span className={`transform origin-center text-2xl rounded-full px-2 transition duration-200 ease-out ${index === expandedIndex ? 'rotate-45 bg-black text-white' : 'bg-gray-300'}`}> +</span>
            </button>
            <div
              className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
              style={{
                maxHeight: index === expandedIndex ? '1000px' : '0',
                transition: 'max-height 0.3s ease-in-out 0s',
              }}
            >
              <div className="pb-5 leading-relaxed">
                <div className="space-y-2 leading-relaxed">{item.answer}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    <Footer/>
    </>
  );
};

export default InsuranceFAQ;
