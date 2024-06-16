import React from 'react';


import './about.css'
import AboutHero from '../../../Components/About_Hero/AboutHero';
import MainAbout from '../../../Components/aboutMainSection/MainAbout';
import AboutTeam from '../../../Components/AboutTeam/AboutTeam';


import p26_img from "../../../Components/Assets/product_26.png";
import p12_img from "../../../Components/Assets/product_12.png";
import p13_img from "../../../Components/Assets/product_13.png";


const About = () => {

  return (

    <div className="Container ">
      <AboutHero p26_img={p26_img}  p12_img={p12_img} p13_img={p13_img}/>
      <MainAbout p26_img={p26_img}  p12_img={p12_img} p13_img={p13_img}/>
      <AboutTeam p26_img={p26_img}  p12_img={p12_img} p13_img={p13_img}/>
    </div>

  );



};

export default About;
