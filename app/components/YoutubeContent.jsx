import React from "react";

const YoutubeLatestVideosSections = ({ channelId }) => {
  return (
    <section className="flex justify-center flex-col items-center">
        <h2 className="md:py-16 py-8 md:text-3xl text-2xl font-bold uppercase"> Latest <strong className=" font-extrabold before:bg-blue-200">Highlights </strong>From our channel.</h2>
      <div className="w-full grid md:grid-cols-2 grid-cols-1     max-w-[98vw] md:gap-8 justify-center items-center">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/guMDhsmVNHA?si=7YVZSei660BNBBbR" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       className="aspect-video w-[90%] m-auto"referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/UvUTJBp5_CI?si=4lPmQ2B606EIDwrZ`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           className="aspect-video w-[90%] m-auto"
          allowFullScreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/uqFPVue5d3g?si=f42cfanPY1CD5ol9`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
           className="aspect-video w-[90%] m-auto"
        ></iframe>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/fNeOyhDFgBw?si=nB0DtEhRpLbAT_uo`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="aspect-video w-[90%] m-auto"
        ></iframe>
      </div>

      <a target="_blank" href="https://www.youtube.com/@MehranDadbeh/videos" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg my-9">
      Go to channel 
</a>
    </section>
  );
};

export default YoutubeLatestVideosSections;
