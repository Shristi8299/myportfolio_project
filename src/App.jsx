import { useState } from 'react'
import { FaBars , FaEnvelope , FaPhoneAlt ,FaCode , FaImage ,FaLightbulb ,FaLinkedinIn,FaInstagram , FaTwitter , FaFacebookF  } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from './Home';
import Service from './Service';
import About from './About';
import Work  from './Work';
import Skill from './Skill';
import Freelancer from './Freelancer';
import Contact from './Contact';
import './App.css';
function App() {
  return ( 
     <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link rel="stylesheet" href="css/bootstrap.min.css" />
  <link rel="stylesheet" href="css/all.css" />
  <style dangerouslySetInnerHTML={{ __html: "\n    " }} />

  {/* navbar start */}
  <nav className="navbar navbar-light fixed-top bg-light shadow-sm">
    <div className="container-lg">
      <a className="navbar-brand  text-danger fw-bold fs-4" href="#">
        Shristi's Porfolio
      </a>
      <div className="dropdown">
        <button
          className="btn btn-secondary btn-danger me-5  dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
         <FaBars /> 
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          <li>
            <a className="dropdown-item" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#portfolio">
              My Works
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* navvar end */}

   {/* home secction  */}
   <Home/>

  {/* about section  */}
    <About/>



  {/* service section */}
    <Service/>


  {/* portfolio section */}
    <Work/>

     
  {/* skill section */}
  <Skill/>
  

  {/*freelancer section */}
   <Freelancer/>

  {/* contact section */}
  <Contact/>

  
  {/* footer section start */}
  <section className="container-lg border-top py-4">
    <div className="row">
      <div className="col-lg-12">
        <p className="m-0 text-center text-muted">© 2024-25 shristi verma</p>
        <p className="m-0 text-center text-muted">This is only for  learning purpose </p>
      </div>
    </div>
  </section>
  {/* footer end */}
</>
 
  )
}

export default App
