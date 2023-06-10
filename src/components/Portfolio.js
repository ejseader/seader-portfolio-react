import React from "react";
import Project1 from "../assets/proj1.png";
import Project2 from "../assets/proj2.png";
import Project3 from "../assets/proj3.png";
import Project5 from "../assets/proj5.png";
import Project6 from "../assets/proj6.gif";
import Project7 from "../assets/proj7.png";

const Portfolio = () => {
  const projects = [
    {
      img: Project7,
      title: "SlideOffTheEarth App \n[MERN Stack | Tailwind]",
      desc: "Admin/User app for Slide Off The Earth music fesitival.",
      tools: "<MERN Stack | Tailwind>",
      live: "https://slideofftheearth.com/",
      code: "https://github.com/AuTangen/Slide_Off_The_Earth",
    },
    {
      img: Project1,
      title: "Drnkz App [MERN Stack]",
      desc: "An app to share/find the perfect cocktail.",
      tools: "<MERN Stack>",
      live: "https://peaceful-shelf-63083.herokuapp.com/",
      code: "https://github.com/ejseader/drnkz-app",
    },
    {
      img: Project6,
      title: "Note Taker App [MERN Stack]",
      desc: "A web app for generating, saving, and deleting notes.",
      tools: "<MERN Stack",
      live: "https://nameless-stream-37257.herokuapp.com/",
      code: "https://github.com/ejseader/note-taker",
    },
    {
      img: Project3,
      title: "Social Media API [MERN Stack, Day.js, Insomnia]",
      desc: "Backend social network API where user data can be accessed using an API client.",
      tools: "<MERN Stack, Day.js, Insomnia>",
      live: "https://github.com/ejseader/social-network-api#installation-and-usage",
      code: "https://github.com/ejseader/social-network-api",
    },
    {
      img: Project5,
      title: "Employee Tracker Terminal App [NodeJS, Express, MySQL]",
      desc: "Backend employee tracker API accessible using an API client.",
      tools: "<Node.js | Express | MySQL2 | Sequelize | Dotenv>",
      live: "https://github.com/ejseader/employee-tracker/tree/main#installation-and-usage",
      code: "https://github.com/ejseader/employee-tracker",
    },
    {
      img: Project2,
      title: "PWA Text Editor [NodeJS, Express, JavaScript]",
      desc: "Progressive Web App that accepts/persists text whether in the browser or installing the app.",
      tools: "<Node.js | Express | JavaScript>",
      live: "https://hidden-tundra-78494.herokuapp.com/",
      code: "https://github.com/ejseader/pwa-text-editor",
    }
  ];

  return (
    <section className="bg-secondary px-5 text-white py-32" id="portfolio">
      <div className="portfolio-wrap">
        <div className="pb-8">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[260px] border-[#00FFCA] pb-2">
            Portfolio
          </h2>


          {/* container mx-auto grid md:grid-cols-3 gap-10 */}
          <div className="projects">
            {projects.map((project, i) => (
                <div 
                  key={i} 
                  style={{ backgroundImage: `url(${project.img})`}}
                  className="shadow-lg shadow-[#088395] group container rounded-md 
                  flex flex-col justify-center text-center items-center mx-auto content-div"
                >
                  <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl p-1 text-center font-bold text-white bg-[#0A4D68] rounded-lg">{project.title}
                    </span>
                  </div> 
                    <div className="pt-8 text-center opacity-0 group-hover:opacity-100">
                      <a
                        href={project.live} target="_blank" rel="noreferrer noopener">
                          <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#05BFDB] text-black hover:bg-[#0A4D68] hover:text-white font-bold text-lg"
                      >
                        Live
                        </button>
                      </a>
                      <a
                        href={project.code} target="_blank" rel="noreferrer noopener">
                          <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#05BFDB] text-black hover:bg-[#0A4D68] hover:text-white font-bold text-lg"
                      >
                        Code
                        </button>
                      </a>
                    </div>
                    </div>
              ))}

          </div>
        </div>
      </div>
    </section>
  );
};


export default Portfolio;