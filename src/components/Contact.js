import React from "react";

const Contact = () => {
  return (
    <section className="bg-secondary px-5 text-white py-32" id="contact">
      <div className="section-wrap">
        <div className="section">
          <h2 className="text-4xl font-bold mb-6 divide-y border-b-[5px] w-[260px] border-[#00FFCA] pb-2">
            Contact
          </h2>
          <form action="https://getform.io/f/6e48774f-f8ae-40a7-8144-a851b945e516" method="POST" className="flex flex-col mx-auto justify-center align-middle">
            <input className="p-2 rounded" type="text" placeholder="Name" name="name" />
            <input className="my-4 p-2 rounded" type="email" placeholder="Email" name="email" />
            <textarea className="p-2 rounded" name="message" rows="10" placeholder="Message"></textarea>
            <button className="text-black bg-accent rounded hover:bg-[#0A4D68] hover:text-white px-4 py-3">Let's Collab!</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;