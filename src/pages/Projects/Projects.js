import React from "react";
import "./Projects.css";
// import Spin from "react-reveal/Spin";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Here are some of my most recent and notable projects, showcasing my
          expertise in web development, including frontend design, backend
          architecture, and full-stack applications using the MERN stack: <br />
          <b>MERN Stack Blog Application:</b> A fully functional blog platform
          featuring user authentication, CRUD operations, and a responsive UI
          built with React, Node.js, Express, and MongoDB.
        </p>
        {/* card design */}
        <div className="row" id="ads">
          {/* <Spin> */}
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Web Page</span>
                <img
                  src="https://www.fita.in/wp-content/uploads/2024/12/IT-job.webp"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">Css</span>
                <span className="card-detail-badge">Javascript</span>
                <span className="card-detail-badge">Bootstrap</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">FITA Recretion</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/Jeashanthi/amazon-clone"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Frontend</span>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVoUHpiK9lSgOuKf2fFJrhHeLaXTao8Q6vYA&s"
                  alt="project2"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">Css</span>
                <span className="card-detail-badge">Javascript</span>
                <span className="card-detail-badge">React JS</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Amazon Clone App</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/Jeashanthi/amazon-clone"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Backend</span>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm_0Py5hR9hgQE6XCcs5Pcr9-fOj3nkjIl9g&s"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>

                <span className="card-detail-badge">Mongo DB</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Registration Form</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/Jeashanthi/amazon-clone"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-5">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">MERN Stack</span>
                <img
                  src="https://store-images.s-microsoft.com/image/apps.29291.e1bffbe4-4588-426f-b246-06f673d4dea7.1cd93c59-123e-4dd4-a201-105dff93b9e0.70745d5c-d2f4-48be-8151-ead525e84b07.png"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React JS</span>
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>

                <span className="card-detail-badge">Mongo DB</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Address Book</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/Jeashanthi/Add-Book"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-5">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">MERN Stack</span>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/035/743/516/non_2x/bookstore-shop-exterior-and-man-png.png"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React JS</span>
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>

                <span className="card-detail-badge">Mongo DB</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Book Shop</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/Jeashanthi/bookShop"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          {/* </Spin> */}
        </div>
      </div>
    </>
  );
};

export default Projects;
