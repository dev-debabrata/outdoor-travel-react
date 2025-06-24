import React from "react";
import Img1 from "../assets/7.jpg";
import Img2 from "../assets/8.jpg";
import Img3 from "../assets/9.jpg";
import Img4 from "../assets/10.jpg";
import Img5 from "../assets/11.jpg";
import Img6 from "../assets/12.jpg";
import Img7 from "../assets/13.jpg";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";

const JournalData = [
  {
    id: 1,
    title: "An Unforgattable",
    about:
      "If you only have one day to visit yosemite National Park and you want to make the out of it.",
    date: "May 30, 2022",
    url: "#",
    image: Img1,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Symphonies in Steel",
    about:
      "Crossing the Golden Gate Bridge from San Francisco, you arrive in march even before landing on told ground.",
    date: "April 30, 2021",
    url: "#",
    image: Img2,
    delay: 0.4,
  },
  {
    id: 3,
    title: "Symphonies in Steel",
    about:
      "Crossing the Golden Gate Bridge from San Francisco, you arrive in march even before landing on told ground.",
    date: "April 30, 2021",
    url: "#",
    image: Img3,
    delay: 0.4,
  },
  {
    id: 4,
    title: "Symphonies in Steel",
    about:
      "Crossing the Golden Gate Bridge from San Francisco, you arrive in march even before landing on told ground.",
    date: "April 30, 2021",
    url: "#",
    image: Img4,
    delay: 0.4,
  },
  {
    id: 5,
    title: "Symphonies in Steel",
    about:
      "Crossing the Golden Gate Bridge from San Francisco, you arrive in march even before landing on told ground.",
    date: "April 30, 2021",
    url: "#",
    image: Img5,
    delay: 0.4,
  },
  {
    id: 6,
    title: "Symphonies in Steel",
    about:
      "Crossing the Golden Gate Bridge from San Francisco, you arrive in march even before landing on told ground.",
    date: "April 30, 2021",
    url: "#",
    image: Img6,
    delay: 0.4,
  },
  {
    id: 7,
    title: "Symphonies in Steel",
    about:
      "Crossing the Golden Gate Bridge from San Francisco, you arrive in march even before landing on told ground.",
    date: "April 30, 2021",
    url: "#",
    image: Img7,
    delay: 0.4,
  },



];

const Journal = () => {
  return <>
    <section className=" container mt-20" id="journey">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: .5 }}
        className=" text-center md:max-w-[650px] mx-auto space-y-4">
        <p className=" text-3xl">The Journey</p>
        <p>Our favorite stories about public lands and opportunities for you to go involved in protecting your outdoor experienced.</p>
      </motion.div>

      <div className=" mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
        {JournalData.map((data) => (
          <motion.div
            variants={SlideUp(data.delay)}
            initial="hidden"
            animate="visible"
            key={data.id}
            className=" relative overflow-hidden mb-5">
            <img
              src={data.image}
              alt="data.title"
              className=" w-full h-[350px] object-cover" />

            <div className="space-y-1 py-6 text-center px-12">
              <p className=" uppercase">{data.date}</p>
              <p className=" text-xl font-semibold font-merriweather">{data.title}</p>
              <p className=" !mt-8">{data.about}</p>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  </>;
};

export default Journal;
