import React from "react";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-8 text-white"
    >
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold inline-block border-b-4 border-cyan-500 pb-2">
            Contact
          </h2>
          <p className="text-xl mt-6 text-gray-300">Get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/c0090602-916d-42cd-9af3-d91e8e7d0cb6"
            method="POST"
            className="flex flex-col w-full md:w-2/3 lg:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="p-3 bg-gray-700 border-2 border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 mb-6 transition duration-300"
            />
            <input
              type="email"
              name="Email"
              placeholder="Your email"
              className="p-3 bg-gray-700 border-2 border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 mb-6 transition duration-300"
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows={8}
              className="p-3 bg-gray-700 border-2 border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 mb-6 transition duration-300 resize-none"
            />
            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition duration-300 shadow-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
