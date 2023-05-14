import React from "react";
import Project1 from "../assets/proj1.png";
import Project2 from "../assets/proj2.png";
import Project3 from "../assets/proj3.png";
import Project4 from "../assets/proj4.png";
import Project5 from "../assets/proj5.png";
import Project6 from "../assets/proj6.png";

const Portfolio = () => {
  const projects = [
    {
      img: Project1,
      title: "Drnkz App",
      desc: "An app to share/find the perfect cocktail.",
      tools: "<Node.js | React | Tailwind CSS>",
      live: "https://peaceful-shelf-63083.herokuapp.com/",
      code: "https://github.com/ejseader/drnkz-app",
    },
    {
      img: Project2,
      title: "PWA Text Editor",
      desc: "Progressive Web App that accepts/persists text whether in the browser or installing the app.",
      tools: "<Node.js | Express | JavaScript>",
      live: "https://hidden-tundra-78494.herokuapp.com/",
      code: "https://github.com/ejseader/pwa-text-editor",
    },
    {
      img: Project3,
      title: "Social Media API",
      desc: "Backend social network API where user data can be accessed using an API client.",
      tools: "<Node.js | Express MongoDB | Mongoose | Day.js>",
      live: "https://github.com/ejseader/social-network-api#installation-and-usage",
      code: "https://github.com/ejseader/social-network-api",
    },
    {
      img: Project4,
      title: "E-Commerce Backend",
      desc: "Backend e-commerce API accessible by using an API client.", 
      tools: "<Node.js | Express | MySQL2 | Sequelize | Dotenv>",
      live: "https://github.com/ejseader/e-commerce-backend#installation",
      code: "https://github.com/ejseader/e-commerce-backend",
    },
    {
      img: Project5,
      title: "Employee Tracker Terminal App",
      desc: "Backend employee tracker API accessible using an API client.",
      tools: "<Node.js | Express | MySQL2 | Sequelize | Dotenv>",
      live: "https://github.com/ejseader/employee-tracker/tree/main#installation-and-usage",
      code: "https://github.com/ejseader/employee-tracker",
    },
    {
      img: Project6,
      title: "Note Taker App",
      desc: "A web app for generating, saving, and deleting notes.",
      tools: "<Node.js | Express | Generate-Unique-Id>",
      live: "https://nameless-stream-37257.herokuapp.com/",
      code: "https://github.com/ejseader/note-taker",
    },
  ];

    return (
      <section className="bg-primary px-5 text-white py-32" id="portfolio">
        <div className="portfolio-wrap">
          <div className="section">
            <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[260px] border-[#00FFCA] pb-2">
              Portfolio
            </h2>
          </div>


          <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
            {projects.map((project, i) => {
              return (
                <div className="relative" key={i}>
                  <p className="text-center font-bold px-2 text-white">
                      {project.title}
                    </p>
                  <img src={project.img} alt={project.title} />
                  <div className="flex absolute left-0 right-0 top-[33px] bottom-0 mx-auto w-[85%] h-[85%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                    
                    <p className="pt-2 pb-4 text-center px-2 text-white">
                      {project.desc}<br />{project.tools}
                    </p>

                    <div className="mx-auto">
                      <a
                        href={project.live} target="_blank" rel="noreferrer noopener"
                        className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                      >
                        Live
                      </a>
                      <a
                        href={project.code} target="_blank" rel="noreferrer noopener"
                        className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>
    );
  };


  export default Portfolio;