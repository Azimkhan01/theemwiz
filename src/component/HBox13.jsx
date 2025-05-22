import React from 'react';

function HBox13() {
  return (
    <div className="w-full min-h-screen relative flex flex-col-reverse lg:flex-row">
      {/* Map Image */}
      <div className="w-full h-[400px] lg:h-screen">
        <img
          src='/hb12-bg/map.png'
          alt="Map"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Form */}
      <div className=" mb-10 md:mb-0 md:absolute top-50 left-20 bg-white rounded-xl shadow-xl p-6 sm:p-8 w-full max-w-md mx-auto lg:mx-0 z-10 lg:z-10">
        <h2 className="text-2xl font-bold text-[#391400] mb-6">Get In Touch</h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Your email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <select className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-400">
            <option>Subject</option>
            <option>Support</option>
            <option>Inquiry</option>
            <option>Feedback</option>
          </select>
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>
          <button
            type="submit"
            className="bg-orange-500 text-white text-sm font-semibold px-6 py-2 rounded-md hover:bg-orange-600 transition duration-200"
          >
            SUBMIT NOW
          </button>
        </form>
      </div>
    </div>
  );
}

export default HBox13;
