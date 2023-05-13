import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";


const Publications = () => {
  return (
    <section className="bg-secondary px-5 text-white py-32" id="publications">
      <div className="section-wrap">
      <div className="section">
        <h2 className="text-4xl font-bold mb-6 divide-y border-b-[5px] w-[260px] border-[#00FFCA] pb-2">
          Publications <a href="/#top" className="rts-btn"><BsFillArrowUpCircleFill size={25} /></a>
        </h2>
      </div>


      <div className="flex flex-col mx-auto justify-between align-middle pub-links">
        <h2 class="mb-0"><a href="https://www.thomsonreuters.com/en-us/posts/legal/covid-19-challenges-law-firms/" target="_blank" without rel="noreferrer">COVID-19 Challenges: Keeping Law Firms Going Amid Uncertain Times</a></h2>
          <div class="subheading mb-3">The Legal Executive Institute | March 23, 2020</div>
        <h2 class="mb-0"><a href="https://ejseader.medium.com/on-predicting-the-future-in-an-exponentially-growing-world-51fe23745341" target="_blank" without rel="noreferrer">On Predicting the Future in an Exponentially Growing World</a></h2>
          <div class="subheading mb-3">Medium | December 26, 2019</div>
        <h2 class="mb-0"><a href="https://medium.com/swlh/california-ab5-and-the-future-of-the-gig-economy-e7e044f62258" target="_blank" without rel="noreferrer">California AB5 and the Future of the Gig Economy</a></h2>
          <div class="subheading mb-3">The Startup | September 20, 2019</div>
        <h2 class="mb-0"><a href="https://ejseader.medium.com/the-flip-side-of-the-bitcoin-cryptocurrencys-environmental-impact-aaee83c52f80" target="_blank" without rel="noreferrer">The Flip Side of the Bitcoin: Cryptocurrency's Environmental Impact</a></h2>
          <div class="subheading mb-3">Medium | May 29, 2018</div>
        <h2 class="mb-0"><a href="https://ejseader.medium.com/what-does-teslas-new-reveal-mean-for-the-industry-f4db8097e0b6" target="_blank" without rel="noreferrer">What Does Tesla's New Reveal Mean for the Industry?</a></h2>
          <div class="subheading mb-3">Medium | May 29, 2018</div>
        <h2 class="mb-0"><a href="https://ejseader.medium.com/life-after-america-provides-modern-lessons-in-resistance-from-the-past-55730a6a999" target="_blank" without rel="noreferrer">'Life After America' Provides Modern Lessons in Resistance From the Past</a></h2>
          <div class="subheading mb-3">Medium | January 22, 2018</div>
      </div>
      </div>
    </section>
  )
};

export default Publications;