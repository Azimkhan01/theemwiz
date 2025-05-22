import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  const footerData = [
    {
      title: 'Menu',
      items: ['About', 'Service', 'Blog', 'Contact']
    },
    {
      title: 'Service',
      items: ['Design', 'Development', 'Marketing', 'See More']
    }
  ];

  return (
    <footer className="bg-[#fff5f0] text-[#391400] px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-8">

        {/* Agency Branding - centered on mobile, left on large */}
        <div className="self-center lg:self-start">
          <h1 className="text-xl font-bold">Agency</h1>
        </div>

        {/* Cards from data - left aligned */}
        {footerData.map((section, index) => (
          <FooterCard key={index} title={section.title} items={section.items} className="self-center" />
        ))}

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 lg:mt-0 self-center md:self-start ">
          <div className="bg-orange-400 text-white rounded-full flex items-center justify-center w-10 h-10 p-3">
            <FaFacebookF size={16} />
          </div>
          <div className="bg-orange-400 text-white rounded-full flex items-center justify-center w-10 h-10 p-3">
            <FaTwitter size={16} />
          </div>
          <div className="bg-orange-400 text-white rounded-full flex items-center justify-center w-10 h-10 p-3">
            <FaInstagram size={16} />
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-t border-gray-300" />

      {/* Bottom copyright */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm gap-4">
        <p>Copyright © {new Date().getFullYear()} Laaqiq. All Rights Reserved.</p>
        <div className="flex gap-6">
          <p className="hover:underline cursor-pointer">Terms of Use</p>
          <p className="hover:underline cursor-pointer">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCard({ title, items, className = '' }) {
  return (
    <div className={className}>
      <h2 className=" text-orange-500 font-semibold mb-2 uppercase text-center md:text-left text-lg">{title}</h2>
      <ul className="space-y-1 text-sm" role="list">
        {items.map((item, index) => (
          <li key={index} className="cursor-pointer hover:underline font-semibold text-center md:text-left">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
