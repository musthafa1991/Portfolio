import React from "react";
import MernauthImage from "../projects/Mern Auth.png";
import letweChat from "../projects/letweChat.png";

const Works: React.FC = () => {
  const WorkItems = [
    {
      title: "Let We Chat",
      description: "Chat App",
      imageUrl: letweChat,
      websiteUrl: "https://letwechat-app.onrender.com",
      githubUrl: "https://github.com/musthafa1991/letwechat-app",
    },
    {
      title: "User Acitivity",
      description: "User-Acitivity-Logging System",
      imageUrl: MernauthImage,
      websiteUrl: "https://useractivitylogs.netlify.app",
      githubUrl: "https://github.com/musthafa1991/userActivityLogs-frontend",
    },
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
              <a
                href={item.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-60 h-auto mx-auto rounded-md cursor-pointer"
                />
                <h3 className="text-xl font-bold mt-4 hover:underline">
                  {item.title}
                </h3>
              </a>
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
