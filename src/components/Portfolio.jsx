import React from "react";
import card from "../assets/portfolio/card.png";
import color from "../assets/portfolio/color.png";
import githubbattle from "../assets/portfolio/git-hub-battle.png";
import kinoinfo from "../assets/portfolio/kino-info.png";
import weather from "../assets/portfolio/weather.png";
import richard from "../assets/portfolio/richard.png";
import zona from "../assets/portfolio/Zona.png";



const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: githubbattle,
      demoLink: "https://git-hub-battle.netlify.app/",
      codeLink: "https://github.com/Danil-Ter/Git-Hub_battle",
    },
    {
      id: 2,
      src: kinoinfo,
      demoLink: "https://kino-info.netlify.app/",
      codeLink: "https://github.com/Danil-Ter/kino-info",
    },
    {
      id: 3,
      src: zona,
      demoLink: "https://zona-business.netlify.app",
      codeLink: "https://github.com/Danil-Ter/Zona-landing",
    },
    {
      id: 4,
      src: richard,
      demoLink: "https://richard-restaurant.netlify.app/",
      codeLink: "https://github.com/Danil-Ter/richard-restaurant",
    },
    {
      id: 5,
      src: weather,
      demoLink: "https://weather-app-5days.netlify.app/",
      codeLink: "https://github.com/Danil-Ter/Weather-app",
    },
    {
      id: 6,
      src: card,
      demoLink: "https://game-memory-card.netlify.app",
      codeLink: "https://github.com/Danil-Ter/Memory-card",
    },
    {
      id: 7,
      src: color,
      demoLink: "https://generator-colors-random.netlify.app",
      codeLink: "https://example.com/code1",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="w-full h-48 object-cover rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
