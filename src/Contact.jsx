import { FaBars , FaEnvelope , FaPhoneAlt ,FaCode , FaImage ,FaLightbulb ,FaLinkedinIn,FaInstagram , FaTwitter , FaFacebookF  } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
function Contact(){
    return (
        <>
             {/* contact section start */}
  <section className="contact py-5" id="contact">
    <div className="container-lg-py-4">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="section-title text-center">
            <h2 className="fw-bold mb-5">Contact Me</h2>
          </div>
        </div>
      </div>
      <div className="row ms-4">
        <div className="col-md-5">
          <div className="contact-item d-flex mb-3  mt-3">
            <div className="icon fs-4 text-danger">
            <FaEnvelope />
            </div>
            <div className="text ms-3 ">
              <h3 className="fs-5 ">Email</h3>
              <p className="text-muted ">shristi7880@gmailcom</p>
            </div>
          </div>
          <div className="contact-item d-flex mb-3">
            <div className="icon fs-4 text-danger">
             <FaPhoneAlt />
            </div>
            <div className="text ms-3">
              <h3 className="fs-5">Phone</h3>
              <p className="text-muted">91 7880519313 </p>
            </div>
          </div>
          <div className="contact-item d-flex mb-3">
            <div className="icon fs-4 text-danger">
             <FaLocationDot />
            </div>
            <div className="text ms-3">
              <h3 className="fs-5">Visit Address</h3>
              <p className="text-muted ">
                {" "}
                Sitapur Road , Lucknow, Uttar Pradesh ,226201
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="contact-form">
            <form action="">
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="form-control form-control-lg fs-6 border-0 shadow-sm"
                  />
                </div>
                <div className="col-lg-6 mb-4">
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="form-control form-control-lg fs-6 border-0 shadow-sm"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 mb-4">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="form-control form-control-lg fs-6 border-0 shadow-sm"
                  />
                </div>
              </div>
              <div className="row" />
              <div className="col-lg-12 mb-4">
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="form-control form-control-lg fs-6 border-0 shadow-sm"
                  defaultValue={""}
                />
              </div>
            </form>
          </div>
          <div className="row" />
          <div className="col-lg-12 mb-4">
            <button type="submit" className="btn btn-danger px-3">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* contact section end */}
        </>
    )
}

export default Contact ;