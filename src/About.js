import React from "react";
import HeroSection from "./components/HeroSection";
// import { useProductContext } from "./context/productcontext";


const About = () => {
  //using context
// const {myName} = useProductContext()

  const data = {
    name: "Thapa Ecommerce",
  };

  return (<>
  <HeroSection myData={data.name} />;
  </>)
};

export default About;
