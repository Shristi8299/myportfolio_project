import { FaBars , FaEnvelope , FaPhoneAlt ,FaCode , FaImage ,FaLightbulb ,FaLinkedinIn,FaInstagram , FaTwitter , FaFacebookF  } from "react-icons/fa";

function Home(){

 return(
    <>
  {/*home section start   */}
  <section className="home py-5" id="home">
    <div className="container-lg">
      <div className="row  min-vh-100 align-items-center align-content-center ">
        <div className="col-md-6 mt-5  mt-md-0  ">
          <div className="home-img text-center">
            <img
              src="img/mp6.jpg"
              alt="Porfolio img"
            //   className="rounded-circle mw-100"
              className="shadow-sm p-3 mb-5 bg-white rounded-circle"
              style={{ height: 300, width: 300, borderRadius: "50%" }}
            />
          </div>
        </div>
        <div className="col-md-6 mt-5  mt-md-0 order-md-first ">
          <div className="home-text ">
            <p className="text-muted mb-1">Hello, I am</p>
            <h1 className="text-danger text-uppercase fw-bold fs-1">
              Web Developer 
            </h1>
            <h2 className="fs-4">Shristi Verma</h2>
            <p className="mt-4 text-muted ">
              A skilled web developer specializing in creating responsive,
              user-friendly websites with HTML, CSS, JavaScript, and modern
              frameworks. Passionate about clean code and delivering efficient,
              high-quality digital solutions.
            </p>
            <a href="#porfolio" className="btn btn-danger px-3 mt-3">
              My Work
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* home section end */}

  </>
 );

}
export default Home ;