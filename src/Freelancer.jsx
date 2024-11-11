import { FaBars , FaEnvelope , FaPhoneAlt ,FaCode , FaImage ,FaLightbulb ,FaLinkedinIn,FaInstagram , FaTwitter , FaFacebookF  } from "react-icons/fa";
function Freelancer(){
    return(
    <>
    {/*freelancer section start*/}
   <section className="freelancer-available py-5 bg-danger " id="hireMe">
    <div className="container-lg py-4">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <p className="text-light fs-5">Do you have any project ?</p>
          <h2 className="text-white fs-1 mb-4">
            I'm available for Projects Work
          </h2>
          <a href="#contact" className="btn btn-outline-light ">
            Hire Me
          </a>
        </div>
      </div>
    </div>
  </section>
   {/* freelancer section end */}
   </>
    )
}
export default Freelancer ;