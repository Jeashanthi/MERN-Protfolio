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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia a
          odit ab, eligendi cupiditate, minima quasi excepturi modi et quo
          delectus, iusto dolor atque aliquam aspernatur eveniet! Ipsam eum
          nobis omnis id voluptatibus quas eos maxime ipsum facere numquam,
          voluptate qui et animi doloribus nulla eius molestiae unde tempore ad
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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm_0Py5hR9hgQE6XCcs5Pcr9-fOj3nkjIl9g&s"
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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm_0Py5hR9hgQE6XCcs5Pcr9-fOj3nkjIl9g&s"
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
                  href="https://github.com/Jeashanthi/amazon-clone"
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
