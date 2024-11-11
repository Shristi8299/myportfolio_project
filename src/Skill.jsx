
import { FaBars , FaEnvelope , FaPhoneAlt ,FaCode , FaImage ,FaLightbulb ,FaLinkedinIn,FaInstagram , FaTwitter , FaFacebookF  } from "react-icons/fa";
function Skill(){
    return(
     <>
    {/* skills section start  */}
   <section className="skills py-5" id="skills">
    <div className="container-lg py-4">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="section-title text-center">
            <h2 className="fw-bold mb-5">Technicals Skills</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 mt-5 mt-md-0">
          <div className="skill-item ">
            <h3 className="fs-6 text-muted ">HTML</h3>
            <div
              className="progress mb-3 shadow-sm "
              role="progressbar"
              aria-label="Example 1px high"
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{ height: 5 }}
            >
              <div
                className="progress-bar bg-danger "
                style={{ width: "25%" }}
              />
            </div>
            <h3 className="fs-6 text-muted">CSS</h3>
            <div
              className="progress my-3 shadow-sm"
              role="progressbar"
              aria-label="Example 1px high"
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{ height: 5 }}
            >
              <div
                className="progress-bar bg-danger"
                style={{ width: "50%" }}
              />
            </div>
            <h3 className="fs-6 text-muted">BOOTSTRAP</h3>
            <div
              className="progress my-3 shadow-sm "
              role="progressbar"
              aria-label="Example 1px high"
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{ height: 5 }}
            >
              <div
                className="progress-bar bg-danger"
                style={{ width: "60%" }}
              />
            </div>
            <h3 className="fs-6 text-muted">JAVASCRIPT</h3>
            <div
              className="progress my-3 shadow-sm"
              role="progressbar"
              aria-label="Example 1px high"
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{ height: 5 }}
            >
              <div
                className="progress-bar bg-danger"
                style={{ width: "75%" }}
              />
            </div>
            <h3 className="fs-6 text-muted">JQUERY</h3>
            <div
              className="progress my-3 shadow-sm "
              role="progressbar"
              aria-label="Example 1px high"
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{ height: 5 }}
            >
              <div
                className="progress-bar bg-danger"
                style={{ width: "25%" }}
              />
            </div>
            <h3 className="fs-6 text-muted">REACT</h3>
            <div
              className="progress my-3 shadow-sm "
              role="progressbar"
              aria-label="Example 1px high"
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{ height: 5 }}
            >
              <div
                className="progress-bar bg-danger"
                style={{ width: "50%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* skills seciton end */}
   </>
    )
}
export default Skill ;