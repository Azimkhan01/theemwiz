import React from 'react';

function HBox11() {
  const pricingData = [
    {
      label: 'CONSULTATION',
      title: 'Free',
      description: 'Your digital marketing efforts, instead of handling in-house.',
      features: [
        { label: 'Brand Design', enabled: true },
        { label: 'Market Analysis', enabled: false },
        { label: 'Production', enabled: false },
      ],
      button: 'CONTACT US',
      highlight: false,
    },
    {
      label: 'DESIGN',
      title: '$1500',
      description: 'Provide your business with a variety of digital solutions to promote.',
      features: [
        { label: 'Brand Design', enabled: true },
        { label: 'Market Analysis', enabled: true },
        { label: 'Production', enabled: false },
      ],
      button: 'CONTACT US',
      highlight: true,
      badge: 'Popular',
    },
    {
      label: 'DESIGN + CODE',
      title: '$2900',
      description: 'Help you hit your marketing goals and grow your business.',
      features: [
        { label: 'Brand Design', enabled: true },
        { label: 'Market Analysis', enabled: true },
        { label: 'Production', enabled: true },
      ],
      button: 'CONTACT US',
      highlight: false,
    },
  ];

  return (
    <div className="bg-orange-50 px-4 py-10 md:py-20 md:px-[10%] flex flex-col gap-10">
      {/* Header */}
      <div className="text-center md:text-left">
        <h1 className="text-orange-400 text-sm md:text-base tracking-wider uppercase">
          Pricing
        </h1>
        <p className="text-3xl md:text-5xl font-bold text-[#391400] leading-snug mt-2">
          Check Our <br className="hidden md:block" /> Pricing Plan
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pricingData.map((plan, index) => (
          <div
            key={index}
            className={`relative p-6 rounded-xl border flex flex-col justify-between ${
              plan.highlight
                ? 'bg-white shadow-xl border-white'
                : 'bg-orange-50 border-orange-100'
            }`}
          >
            {/* Badge */}
            {plan.badge && (
              <div className="absolute top-[-12px] left-6 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                {plan.badge}
              </div>
            )}

            <div>
              <p className="text-sm text-orange-300 tracking-widest mb-2 uppercase">
                {plan.label}
              </p>

              <h2 className="text-4xl font-bold text-[#391400] mb-3">{plan.title}</h2>

              <p className="text-[#391400]/70 mb-6 text-sm">{plan.description}</p>

              <ul className="mb-6 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-[#391400]">
                    <span
                      className={`w-5 h-5 rounded-full text-white text-xs flex items-center justify-center ${
                        feature.enabled
                          ? 'bg-orange-500'
                          : 'bg-orange-100 text-orange-300'
                      }`}
                    >
                      {feature.enabled ? '+' : ''}
                    </span>
                    <span
                      className={`text-sm ${
                        feature.enabled ? '' : 'text-orange-300'
                      }`}
                    >
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Button */}
            <button
              className={`w-full py-3 text-sm font-semibold rounded-lg transition ${
                plan.highlight
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-[#391400] shadow-md'
              }`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HBox11;
