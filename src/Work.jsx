
import { FaBars , FaEnvelope , FaPhoneAlt ,FaCode , FaImage ,FaLightbulb ,FaLinkedinIn,FaInstagram , FaTwitter , FaFacebookF  } from "react-icons/fa";
function Work(){
    return(
        <>
        <section className="portfolio py-5" id="portfolio">
    <div className="container-lg py-4">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="section-title text-center">
            <h2 className="fw-bold mb-5">My Work</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className="portfolio-item py-3">
            <img
              src="imgw/work1.jpg"
              className="w-100 img-thumbnail"
              alt="portfolio-item"
            />
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="portfolio-item  py-3">
            <img
              src="imgw/work2.jpg"
              className="w-100 img-thumbnail"
              alt="portfolio-item"
            />
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="portfolio-item  py-3">
            <img
              src="imgw/work3.jpg"
              className="w-100 img-thumbnail"
              alt="portfolio-item"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className="portfolio-item  py-3">
            <img
              src="imgw/work4.jpg"
              className="w-100 img-thumbnail"
              alt="portfolio-item"
            />
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="portfolio-item  py-3">
            <img
              src="imgw/work5.jpg"
              className="w-100 img-thumbnail"
              alt="portfolio-item"
            />
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="portfolio-item  py-3">
            <img
              src="imgw/work6.jpg"
              className="w-100 img-thumbnail"
              alt="portfolio-item"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

        </>
    )
}
export default Work ;