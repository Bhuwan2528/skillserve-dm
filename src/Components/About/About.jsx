import React, { useEffect, useState } from 'react'
import './About.css'
import cncImg from '../../assets/dm.jpg'
import { TiStar } from "react-icons/ti";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRightLong } from "react-icons/fa6";

const About = ({ data }) => {

  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    });
  }, []);

  // fallback content
  const defaultAbout = {
    heading:
      "We prepare you with practical skills to succeed and get <span>hired by leading companies</span>",

  description:
    "Our Digital Marketing with Artificial Intelligence course is designed to make you a truly job-ready digital marketing professional. You don’t just learn—you gain a recognized NSQF Level certification (Digilocker Verified) while working on real campaigns and practical projects. <br><br>The training covers what actually matters in today’s digital industry, including SEO, social media marketing, paid ads, content strategy, analytics, and AI-powered tools for automation and optimization. As you progress, you build hands-on expertise in creating campaigns, running ads, analyzing performance, and using AI tools to improve targeting, content creation, and efficiency—skills that are in high demand across startups, agencies, and companies. What makes this course stand out is the integration of modern AI practices like automation, data-driven decision making, and smart marketing workflows, helping you work with speed, creativity, and a professional mindset. <br> If you want real skills, real digital exposure, and strong career growth—this is the perfect place to start.",

    buttonText: "Read More"
  };

  const aboutData = data || defaultAbout;

  const shortText = aboutData.description.slice(0, 700);

  return (
    <>

      <svg width="0" height="0">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(255, 187, 0)" />
            <stop offset="100%" stopColor="rgb(255, 60, 0)" />
          </linearGradient>
        </defs>
      </svg>

      <div className='about'>

        {/* LEFT */}
        <div className="about-left">

          <span className='about-container'>
            <span className='icon'><TiStar /></span> About Us
          </span>

          <img src={cncImg} alt="CNC Machine" className="about-img" />

        </div>

        {/* RIGHT */}
        <div className="about-right">

          <h2
            dangerouslySetInnerHTML={{ __html: aboutData.heading }}
          />

          <p
            dangerouslySetInnerHTML={{
              __html:aboutData.description
            }}
          />

          {/* <button
            className='btn'
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span>{isExpanded ? "Show Less" : aboutData.buttonText}</span>
            <FaArrowRightLong className='btn-icon' />
          </button> */}

        </div>

      </div>
    </>
  )
}

export default About