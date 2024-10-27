import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import bootstrap from "../assets/bootstrap.png";
import react from "../assets/react.png";
import github from "../assets/github.png";
// import CLanguage from "../assets/C Language.png";
import mongoDb from "../assets/mongoDB.png";
import expressjs from "../assets/Expressjs.png";
import Nodejs from "../assets/nodejs.png";
import graphQl from "../assets/graphQl.png";
// import java from "../assets/java.png";
// import aws from "../assets/aws.png";
// import redux from "../assets/Redux.png";
import Git from "../assets/git.png";
// import PostgreSQL from "../assets/Postgresql.png";
import Tailwind from "../assets/tailwind.png";
import Typescript from "../assets/Typescript.png";
// import NextJs from "../assets/nextjs.png";
// import NestJs from "../assets/nestjs.png";
// import Swagger from "../assets/swagger.png";
// import Jest from "../assets/jest.png";

const Skill = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: bootstrap,
      title: "Bootstrap",

      style: "shadow-purple-600",
    },
    {
      id: 5,
      src: react,
      title: "React",

      style: "shadow-cyan-400",
    },
    {
      id: 6,
      src: mongoDb,
      title: "MongoDB",

      style: "shadow-green-500",
    },
    {
      id: 7,
      src: expressjs,
      title: "Express.js",

      style: "shadow-gray-500",
    },
    {
      id: 8,
      src: Nodejs,
      title: "Node.js",
      style: "shadow-green-600",
    },
    {
      id: 10,
      src: github,
      title: "GitHub",

      style: "shadow-gray-700",
    },
    {
      id: 11,
      src: Typescript,
      title: "Typescript",

      style: "shadow-blue-600",
    },
    {
      id: 12,
      src: graphQl,
      title: "GraphQl",

      style: "shadow-pink-600",
    },

    {
      id: 13,
      src: Git,
      title: "Git",

      style: "shadow-orange-600",
    },
    {
      id: 14,
      src: Tailwind,
      title: "Tailwind",

      style: "shadow-teal-400",
    },
    // {
    //   id: 19,
    //   src: PostgreSQL,
    //   title: "PostgreSQL",

    //   style: "shadow-blue-400",
    // },

    // {
    //   id: 21,
    //   src: Swagger,
    //   title: "Swagger",

    //   style: "shadow-emerald-400",
    // },
    // {
    //   id: 22,
    //   src: Jest,
    //   title: "Jest",

    //   style: "shadow-red-600",
    // },
    // {
    //   id: 13,
    //   src: NestJs,
    //   title: "Nest Js",

    //   style: "shadow-red-600",
    // },
    // {
    //   id: 14,
    //   src: CLanguage,
    //   title: "C Language",

    //   style: "shadow-blue-700",
    // },
    // {
    //   id: 15,
    //   src: java,
    //   title: "Java",

    //   style: "shadow-orange-600",
    // },
    // {
    //   id: 16,
    //   src: aws,
    //   title: "aws",

    //   style: "shadow-yellow-600",
    // },
    // {
    //   id: 17,
    //   src: redux,
    //   title: "Redux",

    //   style: "shadow-purple-700",
    // },
  ];

  return (
    <div
      id="Skill"
      className="w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-black p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-12">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
