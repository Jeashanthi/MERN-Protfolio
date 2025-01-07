import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src="jea.jpg" alt="profile_pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                Hi, I'm Jeashanthi, an enthusiastic MERN stack developer with a
                passion for building dynamic, responsive, and user-friendly web
                applications. My expertise spans across designing intuitive user
                interfaces, crafting robust backend systems, and integrating
                seamless API solutions.
              </p>
              <p>
                I enjoy solving complex problems and thrive in collaborative
                environments that foster innovation and creativity. With a deep
                understanding of both front-end and back-end technologies, I am
                committed to delivering scalable and high-quality solutions
                tailored to meet business needs.
              </p>
              <p>
                When I'm not coding, you'll often find me exploring new
                technologies, engaging in continuous learning, or sharing
                knowledge with the developer community. I am always excited to
                take on new challenges and bring ideas to life through code.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
