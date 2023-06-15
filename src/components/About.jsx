import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="h-full w-full  bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I'm Danil, and I'm actively seeking a position as a frontend
          developer. My core tech stack includes HTML, CSS, JavaScript, and
          React. I have completed development courses and regularly practice in
          my free time. I'm always striving to improve my skills and stay
          updated with the latest technologies.
        </p>

        <br />

        <p className="text-xl">
          I am eager to become part of a team and contribute to exciting
          projects. Collaborating and enhancing my skills alongside talented
          professionals is something I greatly look forward to. I possess strong
          communication skills, which enable effective teamwork and
          collaboration with other team members.
        </p>

        <br />

        <p className="text-xl">
          I have a growth mindset and a strong desire to learn. I am eager to
          apply my skills and experience to create modern and innovative web
          applications.
        </p>
      </div>
    </div>
  );
};

export default About;
