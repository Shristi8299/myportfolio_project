
import { FaBars , FaEnvelope , FaPhoneAlt ,FaCode , FaImage ,FaLightbulb ,FaLinkedinIn,FaInstagram , FaTwitter , FaFacebookF  } from "react-icons/fa";
function Service(){
    return(<>
     <section className="services py-5" id="services">
    <div className="container-lg py-4">
      <div className="row justify-content-center">
        <div className="col-lg-8 ">
          <div className="section-title text-center">
            <h2 className="fw-bold mb-5">What I Do</h2>
          </div>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="service-items shadow-sm p-4 rounded text_border bg-white">
            <div className="icon my-3 text-danger fs-2">
             <FaCode />
            </div>
            <h3 className="fs-5 py-2">Web Developmemt</h3>
            <p className="text-muted justify-content-center">
              I build responsive, efficient websites focused on delivering
              intuitive user experiences with clean, modern code.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="service-items shadow-sm p-4 rounded text_border bg-white">
            <div className="icon my-3 text-danger fs-2">
              <FaLightbulb />
            </div>
            <h3 className="fs-5 py-2">Creative Design</h3>
            <p className="text-muted justify-content-center">
              I create user-focused designs that balance creativity and
              functionality for seamless digital experiences.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="service-items shadow-sm p-4 rounded text_border bg-white">
            <div className="icon my-3 text-danger fs-2">
             <FaImage />
            </div>
            <h3 className="fs-5 py-2">Photoshop</h3>
            <p className="text-muted justify-content-center">
              I design visuals using Photoshop to create compelling and
              high-quality graphics for web and digital platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>)
}

export default Service;