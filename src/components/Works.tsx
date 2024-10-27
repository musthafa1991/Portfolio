import React from "react";
import freshHubImage from "../projects/fresh Hub project1.png";
import MernauthImage from "../projects/Mern Auth.png";
import NetflixImage from "../projects/Netflix.png";
import TudoImage from "../projects/Tudo.png";
import EdistrictImage from "../projects/Edistrict.png";

import IMDBImage from "../projects/IMDB .png";
import instagramImage from "../projects/Instagram.png";
import GitImage from "../projects/GitHub.png";

const Works = () => {
  const WorkItems = [
    // {
    //   title: "Fresh Hub",
    //   description: "E-commerce",
    //   imageUrl: freshHubImage,
    //   githubUrl: "https://github.com/fayizIT/FV-project",
    // },
    {
      title: "Mern Auth",
      description: "User-Management System",
      imageUrl: MernauthImage,
      githubUrl: "https://github.com/fayizIT/mern-admin-user-management",
    },
    // {
    //   title: "GitHub Clone",
    //   description: "GitHub",
    //   imageUrl: GitImage,
    //   githubUrl: "https://github.com/fayizIT/Git-Clone",
    // },
    // {
    //   title: "IMDB Website",
    //   description: "Imdb Website",
    //   imageUrl: IMDBImage,
    //   githubUrl: "https://github.com/fayizIT/IMDB-Project",
    // },
    // {
    //   title: "Netflix",
    //   description: "Netflix",
    //   imageUrl: NetflixImage,
    //   githubUrl: "https://github.com/fayizIT/netflix",
    // },
    // {
    //   title: "Tudo",
    //   description: "Tudo",
    //   imageUrl: TudoImage,
    //   githubUrl: "https://github.com/fayizIT/my-todo-app",
    // },
    // {
    //   title: "Edistrict Static Website",
    //   description: "E-district Application",
    //   imageUrl: EdistrictImage,
    //   githubUrl: "https://github.com/fayizIT/Edistrict-website",
    // },
    // {
    //   title: "Instagram",
    //   description: "Instagram-Application",
    //   imageUrl: instagramImage,
    //   githubUrl: "https://github.com/fayizIT/mern-admin-user-management",
    // },
  ];

  return (
    <div
      id="Works"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Works
          </p>
          <p className="py-6">Check out some of my Works below</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-12">
          {WorkItems.map((item, index) => (
            <div
              key={index}
              className="shadow-md shadow-gray-600 hover:scale-105 duration-500 py-2 rounded-lg bg-gray-800"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-60 h-auto mx-auto rounded-md"
              />
              <h3 className="text-xl font-bold mt-4">{item.title}</h3>
              <p className="text-gray-400 mt-2">{item.description}</p>
              <div className="mt-4">
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 underline"
                >
                  View Source Code on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
