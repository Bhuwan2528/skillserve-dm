import React, { useEffect } from 'react'
import './Choose.css'
import advance from '../../assets/Advanced.png'
import hands from '../../assets/blog.png'
import individual from '../../assets/indvidual.png'
import AOS from "aos";
import "aos/dist/aos.css";

/* fallback content */

const fallbackChoose = [
  {
    image: "https://media.istockphoto.com/id/1919863292/photo/e-learning-education-internet-lessons-and-online-learning-with-webinars-video-tutorials.jpg?s=612x612&w=0&k=20&c=zWAqp6FGH-zm6b0Os_CssxubtrgKh1MyFeMgelFZbOg=",
    title: "Learn What Digital Marketing Industry Actually Needs",
    description:
      "At SkillServe, this course is designed around real digital marketing requirements, not just theory. You learn SEO, social media strategies, paid advertising, content creation, and analytics exactly the way companies and agencies expect. The focus is on building practical knowledge so you become job-ready from day one with skills that are directly used in real marketing campaigns and business growth strategies.",
  },
  {
    image: "https://media.istockphoto.com/id/2098359215/photo/digital-marketing-concept-businessman-using-laptop-with-ads-dashboard-digital-marketing.jpg?s=612x612&w=0&k=20&c=OdQP1rq-YcNN2nIuC8slL1BJKEwdYb7rT5mqTUNSTZQ=",
    title: "Work on Real Campaigns with AI Tools",
    description:
      "SkillServe follows a practical-first approach where you learn by running real marketing campaigns and using AI-powered tools. From keyword research and ad creation to automation, content generation, and performance tracking, you gain hands-on experience through live projects and real-world simulations. This builds confidence and prepares you for actual roles in digital marketing and growth teams.",
  },
  {
    image: "https://t3.ftcdn.net/jpg/02/76/26/88/360_F_276268861_Y4ZHLZuZoXVkrXsjaHkaJn7xbE57dz81.jpg",
    title: "Get Certified, Skilled & Career-Ready Faster",
    description:
      "With NSQF-aligned training, you gain both practical skills and a recognized certification that adds real value to your career. Along with hands-on projects, exposure to AI tools, and industry-relevant workflows, you become ready to work in marketing agencies, startups, and corporate roles. This course helps you move faster from learning to earning with confidence and professional-level skills.",
  }
];

const Choose = ({ data }) => {

  useEffect(() => {

    const isMobile = window.innerWidth <= 768;

    AOS.init({
      offset: isMobile ? 50 : 300,
      duration: 1000,
      once: false
    });

  }, []);

  /* agar server data nahi hai to fallback use hoga */

  const chooseData = data && data.length ? data : fallbackChoose;

  return (

    <div className='choose'>

      <h4>Why Choose Us</h4>

{chooseData.map((item, index) => (

  <div
    className="choose-card"
    key={index}
    data-aos="fade-up"
    data-aos-delay="200"
    data-aos-anchor-placement="top-bottom"
  >

    <div className="card-left">
      <img src={item.image || individual} alt={item.title || "choose"} />
    </div>

    <div className="card-right">
      <h3>{item.title || "Default Title"}</h3>

      <p
        dangerouslySetInnerHTML={{
          __html: item?.description || "Default description"
        }}
      ></p>

    </div>

  </div>

))}

    </div>
  )
}

export default Choose