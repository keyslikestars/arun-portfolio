import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./projects.scss";

const items = [
  {
    id: 1,
    title: "Html,Css",
    img: "https://images.pexels.com/photos/92905/pexels-photo-92905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    des: "React allows for reusable UI components, making your portfolio scalable and maintainable. React's Virtual DOM optimizes rendering for a smooth user experience. Using React Hooks or libraries like Redux, you can manage user interactions dynamically",
  },
  {
    id: 2,
    title: "Javascript",
    img: "https://images.pexels.com/photos/226232/pexels-photo-226232.jpeg?auto=compress&cs=tinysrgb&w=600",
    des: "React allows for reusable UI components, making your portfolio scalable and maintainable. React's Virtual DOM optimizes rendering for a smooth user experience. Using React Hooks or libraries like Redux, you can manage user interactions dynamically.",
  },
  {
    id: 3,
    title: "React Js",
    img: "https://images.pexels.com/photos/6424590/pexels-photo-6424590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    des: "React allows for reusable UI components, making your portfolio scalable and maintainable. React's Virtual DOM optimizes rendering for a smooth user experience. Using React Hooks or libraries like Redux, you can manage user interactions dynamically.",
  },
  {
    id: 4,
    title: "Responsive Websites",
    img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
    des: "React allows for reusable UI components, making your portfolio scalable and maintainable. React's Virtual DOM optimizes rendering for a smooth user experience. Using React Hooks or libraries like Redux, you can manage user interactions dynamically.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start" , "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.des}</p>
            <button>See more...</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Projects() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="Projects" ref={ref}>
      <div className="progress">
        <h1>PROJECTS</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Projects;
