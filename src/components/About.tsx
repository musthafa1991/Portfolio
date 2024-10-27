import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const About: React.FC = () => {
  return (
    <div
      id="About"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg mx-auto px-4 py-16 flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 border-cyan-500">
            About
          </p>
        </div>
        <div className="text-xl mt-10 mb-10 leading-relaxed">
          <p className="mb-6">
            Hello! I am a passionate web developer who embarked on the journey
            of web development in 2021. I have 1.4 years experience as Software
            Engineer at Naberly technolgies pvt ltd. where I acquired extensive
            knowledge of both frontend and backend technologies.
          </p>
          <p className="mb-6">
            My coding journey has ignited a deep interest in learning diverse
            technologies. I am continuously seeking opportunities to enhance my
            web development skills and stay updated with the latest trends.
          </p>
        </div>
        <div className="pb-8 mt-12">
          <p className="text-5xl font-bold inline border-b-4 border-cyan-500">
            <span className="text-cyan-300">Education and Experience</span>
          </p>
        </div>
        <div className="text-xl mt-10 mb-10 leading-relaxed">
          <p className="mb-6">
            <strong>Education</strong>
            <br />- <strong>MERN Stack Development Course</strong>, 2021 - 2022
            <br />
            Completed an intensive course covering MongoDB, Express.js, React,
            and Node.js at GUVI GEEK NETWORK PRIVATE LIMITED, Chennai.
            <br />
            <br />- <strong>Bachelor of Mechanical Engineering</strong>, 2011 -
            2015
            <br />
            Studied at KSR institute for engineering and technology under the
            Anna University, chennai and Graduated with 63 %
            <br />
          </p>
          <p className="mb-6">
            <strong>Professional Experience</strong>
            <br />- <strong>Full-Stack Developer</strong> at{" "}
            <strong>Naberly Technologies Pvt Ltd</strong>, Oct 2022 - Jan
            2024(1.4 years)
            <br />
            Developing and maintaining full-stack applications using React,Node
            Js,GraphQl,Cosmos DB and Collaborating with cross-functional teams
            to design scalable solutions, implement new features, and improve
            user experiences. Integrated APIs, including GraphQL, for dynamic
            and efficient data handling.
            <br />
            <br />- <strong>Previous Work Experience</strong> (2015 - 2021)
            <br />
            Accumulated 6 years in non-IT roles, bringing a diverse set of
            skills such as project management, problem-solving, and a
            customer-focused mindset. Transitioned into the tech field with a
            strong drive to leverage transferable skills and learn new
            technologies.
          </p>
          <p>
            This online portfolio is a testament to my knowledge and skills in
            web development.
          </p>
        </div>

        <div className="mt-8">
          <Link
            to="Contact"
            smooth
            duration={500}
            className="group text-white w-fit px-8 py-4 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            Know more
            <span className="group-hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight size={25} className="ml-2" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
