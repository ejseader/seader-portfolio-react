import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
  return (
    <section className="bg-primary px-5 text-white py-32" id="skills">
      <div className='max-w-7xl mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold mb-6 divide-y border-b-[5px] w-[260px] border-[#00FFCA] pb-2'>Skills</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='bg-secondary shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-[#05BFDB] duration-500 pt-4'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='bg-secondary shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-[#05BFDB] duration-500 pt-4'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='bg-secondary shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-[#05BFDB] duration-500 pt-4'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='bg-secondary shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-[#05BFDB] duration-500 pt-4'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='bg-secondary shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-[#05BFDB] duration-500 pt-4'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='bg-secondary shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-[#05BFDB] duration-500 pt-4'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='bg-secondary shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-[#05BFDB] duration-500 pt-4'>
                  <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className='bg-secondary shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-[#05BFDB] duration-500 pt-4'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
          </div>
      </div>
    </section>
  );
};

export default Skills;