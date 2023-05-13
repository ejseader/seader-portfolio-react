import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Contact = () => {
  return (
    <section className="bg-primary py-32" id="contact">
    <div className="text-center md:w-[60%] mx-auto text-white">
      <h2 className="text-4xl font-bold mb-5 divide-y border-b-[5px] w-[260px] mx-auto border-[#00FFCA] pb-2">
          Contact Me <a href="/#top" className="rts-btn"><BsFillArrowUpCircleFill size={25} /></a>
        </h2>
        <p className="py-2">
          <span className="font-bold">Email:</span> <a className="contact-email" href="mailto:eric@ericseader.com">eric@ericseader.com</a>
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span> 917-207-9819
        </p>
      </div>
      </section>
  )
}

export default Contact;