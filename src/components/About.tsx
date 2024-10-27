import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

const About: React.FC = () => {
  return (
    <div id="About" className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg mx-auto px-4 py-16 flex flex-col justify-center'>
        <div className='pb-8'>
          <p className='text-5xl font-bold inline border-b-4 border-cyan-500'>
            About
          </p>
        </div>
        <div className='text-xl mt-10 mb-10 leading-relaxed'>
          <p className='mb-6'>
            Hello! I am a passionate web developer who embarked on the journey of web development in January 2022. I successfully completed the Frontend with React Js course at Besant Technology Pvt Ltd. Subsequently, I fully immersed myself in MERN stack development, gaining valuable experience in Node.js, Express.js, and MongoDB, where I acquired extensive knowledge of both frontend and backend technologies.
          </p>
          <p className='mb-6'>
            My coding journey has ignited a deep interest in learning diverse technologies. I am continuously seeking opportunities to enhance my web development skills and stay updated with the latest trends.
          </p>
          <p>
            Specializing in front-end web design and development, I take pride in crafting pixel-perfect web pages using beautiful, semantic HTML, CSS, and JavaScript. My expertise also extends to branding, where I find joy in assisting individuals with their branding and design needs.
          </p>
        </div>

        <div className='pb-8 mt-12'>
          <p className='text-5xl font-bold inline border-b-4 border-cyan-500'>
            <span className='text-cyan-300'>Education and Experience</span>
          </p>
        </div>
        <div className='text-xl mt-10 mb-10 leading-relaxed'>
          <p className='mb-6'>
            I hold a Bachelor's degree in Computer Science, which I completed in 2020. In addition to my academic background, I have gained 1.2 years of experience in technical support at Aabasoft Pvt Ltd in Kakkanad. In this role, I focused on network troubleshooting and resolving packet loss issues.
          </p>
          <p className='mb-6'>
            Currently, I am working as a freelancer, primarily focusing on backend development with Node.js and PostgreSQL. My responsibilities include database design and API documentation. This experience contributes significantly to my well-rounded skill set in web development.
          </p>
          <p>
            This online portfolio is a testament to my knowledge and skills in web development.
          </p>
        </div>

        <div className='mt-8'>
          <Link
            to="Contact"
            smooth
            duration={500}
            className='group text-white w-fit px-8 py-4 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 transition-transform duration-300'
          >
            Know more
            <span className='group-hover:rotate-90 duration-300'>
              <MdOutlineKeyboardArrowRight size={25} className='ml-2' />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
