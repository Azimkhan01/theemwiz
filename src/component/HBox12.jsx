import React, { useState } from 'react';

function HBox12() {
  const faqData = [
    {
      question: 'A digital agency is a business',
      answer:
        'Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.',
    },
    {
      question: 'Hire to outsource your digital',
      answer:
        'You can delegate digital responsibilities to an external agency that specializes in your needed services, saving time and resources.',
    },
    {
      question: 'Marketing efforts',
      answer:
        'This includes SEO, content creation, paid ads, and social media handled by professionals in a digital agency.',
    },
    {
      question: 'Can provide your business',
      answer:
        'With better insights, tools, and performance tracking to ensure your marketing ROI improves over time.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-orange-50 py-12 px-5 sm:px-8 md:px-[10%] grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Left Content */}
      <div className="flex flex-col justify-center">
        <h4 className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-2">
          FAQ
        </h4>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#391400] leading-tight mb-4">
          Frequently Asked <br /> Questions
        </h2>
        <p className="text-[#391400]/70 text-sm sm:text-base mb-6 max-w-md">
          A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.
        </p>
        <button className="text-sm font-semibold text-[#391400] underline underline-offset-4 w-fit">
          Contact Us
        </button>
      </div>

      {/* Right Accordion */}
      <div className="rounded-xl overflow-hidden w-full">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`border border-orange-100 transition duration-300 ${
              openIndex === index ? 'bg-white' : 'bg-orange-50'
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-4 sm:px-6 py-4 text-left font-semibold text-[#391400] text-base focus:outline-none"
            >
              <span className="sm:text-base font-bold text-xl">{item.question}</span>
              <span
                className={`rounded-full px-2.5 py-1 md:py-1 md:px-2   bg-orange-400 transform transition-transform duration-300 text-white ${
                  openIndex === index ? 'rotate-180' : 'rotate-0'
                }`}
              >
                ▼
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 sm:px-6 pb-5 text-sm text-[#391400]/70 leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HBox12;
