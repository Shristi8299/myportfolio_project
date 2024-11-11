import { FaBars , FaEnvelope , FaPhoneAlt ,FaCode , FaImage ,FaLightbulb ,FaLinkedinIn,FaInstagram , FaTwitter , FaFacebookF  } from "react-icons/fa";
function About(){
    return(
        <>
        <section className="about  py-5" id="about">
        <div className="container-lg py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8 ">
              <div className="section-title text-center">
                <h2 className="fw-bold mb-5">About Me</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="about-text ">
                <h3 className="fs-4 mb-3">
                  Innovative &amp; Detail-Oriented Web Developer
                </h3>
                <p className="text-muted ">
                  Focused on crafting responsive, user-friendly websites with modern
                  technologies. Dedicated to writing clean code and delivering
                  seamless digital experiences.
                </p>
              </div>
              <div className="row text-center text-uppercase my-3">
                <div className="col-sm-4">
                  <div className="fact-item">
                    <h4 className="fs-1 fw-bold">50</h4>
                    <p className="text-muted">Project Completed</p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="fact-item">
                    <h4 className="fs-1 fw-bold">40</h4>
                    <p className="text-muted">Happy Client</p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="fact-item">
                    <h4 className="fs-1 fw-bold">35</h4>
                    <p className="text-muted">Positive Reviews</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 d-flex align-items-center">
                  <a href="#" className="btn btn-danger me-5 px-3">
                    Download CV
                  </a>
                  <div className="social-links">
                    <a href="#" className="text-dark me-2">
                      <FaFacebookF />
                    </a>
                    <a href="#" className="text-dark me-2">
                       <FaTwitter />
                    </a>
                    <a href="#" className="text-dark me-2">
                      <FaInstagram />
                    </a>
                    <a href="#" className="text-dark me-2">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-5 mt-md-0 order-md-first ">
              <div className="about-img text-center">
                <img
                  src="img/mp4.jpg"
                  alt="Porfolio img"
                  className="shadow-sm p-3 mb-5 bg-white rounded mw-100 me-5 mt-1"
                  style={{ height: 300, width: 300, borderRadius: 5 }}
                />
              </div>
            </div>
          </div>
        </div> 
      </section>
        
        </>
    )
}

export default About;