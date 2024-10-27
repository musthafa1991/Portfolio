import React from "react";
import heroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home: React.FC = () => {
  return (
    <div
      id="Home"
      className="w-full min-h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white flex items-center"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-16">
        <div className="flex flex-col justify-center md:w-1/2 space-y-8">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-4 text-center md:text-left">
            I'm a Full Stack Web Developer
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl text-center md:text-left">
            I am a skilled full-stack developer with 2 years of experience in
            building dynamic and responsive web applications. My core tech stack
            includes MERN (MongoDB, Express.js, React, Node.js), along with
            GraphQL and MongoDB, enabling me to deliver robust, scalable, and
            maintainable web solutions. I excel at developing efficient back-end
            services and intuitive front-end interfaces. I am committed to
            continuous learning and staying updated with the latest industry
            trends to optimize application performance.
          </p>
          <div className="text-center md:text-left">
            <Link
              to="Skill"
              smooth
              duration={500}
              className="group text-white w-fit px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <span>Explore My Skills</span>
              <MdOutlineKeyboardArrowRight
                size={25}
                className="group-hover:rotate-90 transition-transform duration-300"
              />
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0">
          <img
            src={heroImage}
            alt="my profile"
            className="w-full max-w-md mx-auto rounded-full shadow-2xl border-4 border-cyan-500 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
