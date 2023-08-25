import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img5 from './img5.png';
import img6 from './img6.png'; 
import img7 from './img7.png'; 
import img8 from './img8.png'; 
import img9 from './img9.jpg'; 
import ira from './ira.png'
import cherish from './cherish.png';
import jashan from './jashan.png'
import amol from './amol.png';

function HomeLogin() {
  const [showLogout, setShowLogout] = useState(false);
  const [showBookARide, setBookARide] = useState(false);
  return (
    <>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none">
            <span>VeloSync</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" className="bi bi-bicycle" viewBox="0 0 16 16">
              <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057 9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z" />
            </svg>
          </Link>
        </div>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
          <li><a href="#" className="nav-link px-2">Book Ride</a></li>
          <li>
  <a
    href="#pricing" // Link to the element with the id "pricing"
    className="nav-link px-2"
    onClick={(e) => {
      e.preventDefault(); // Prevent the default behavior of the link
      const pricingElement = document.getElementById('pricing'); // Get the element by id
      if (pricingElement) {
        pricingElement.scrollIntoView({ behavior: 'smooth' }); // Scroll to the element smoothly
      }
    }}
  >
    Pricing
  </a>
</li>
          <li><a href="#" className="nav-link px-2">FAQs</a></li>
          <li>
    <a
      href="#about" // Link to the element with the id "about"
      className="nav-link px-2"
      onClick={(e) => {
        e.preventDefault(); // Prevent the default behavior of the link
        const aboutElement = document.getElementById('about'); // Get the element by id
        if (aboutElement) {
          aboutElement.scrollIntoView({ behavior: 'smooth' }); // Scroll to the element smoothly
        }
      }}
    >
      About
    </a>
  </li>
        </ul>

        <div className="col-md-3 text-end">
          {showLogout ? (
            <Home />
          ) : (
            <Link to="/home">
              <button className="btn btn-outline-primary me-2">Logout</button>
            </Link>
          )}

          {/* {showSignUp ? (
            <Signup />
          ) : (
            <Link to="/register">
              <button className="btn btn-primary">Sign-up</button>
            </Link>
          )} */}
        </div>
      </header>

      <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="px-4 py-2 my-5 text-center">
        <img className="d-block mx-auto mb-4" src={img5} alt="" width="140" height="150" />
        <h1 className="display-5 fw-bold text-body-emphasis">VeloSync Services</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Comprehensive and innovative solution aimed at enhancing the efficiency and convenience of bicycle rentals. This system offers a holistic approach to managing bicycle rentals by integrating user-friendly interfaces, real-time availability tracking, and online payments.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            {showBookARide ? (
              <home />
            ) : (
              <Link to="/location">
                <button className="btn btn-primary btn-lg px-4 gap-3">Book A Ride</button>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="container px-4" id="featured-3">
        <h2 className="pb-2 border-bottom fw-bold">Why Us ?</h2>
        <div className="row py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <div className="d-inline-flex align-items-center justify-content-center text-bg-primary">
              <img src={img6} alt="" />
            </div>
            <h3 className="fs-2 text-body-emphasis">Efficient Mobility</h3>
            <p>This Rental Management System contributes to enhancing campus mobility by providing students, staff, and faculty with an eco-friendly and convenient transportation option.</p>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <img src={img7} alt="" />
            </div>
            <h3 className="fs-2 text-body-emphasis">User-Centric Experience</h3>
            <p>Users can experience a user-friendly and intuitive web application that simplifies the process of registering, renting bicycles, making payments, and tracking rentals.</p>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <img src={img8} alt="" />
            </div>
            <h3 className="fs-2 text-body-emphasis">User Feedback Integration</h3>
            <p>The inclusion of a user feedback mechanism within the mobile application establishes a direct channel for users to contribute insights, suggestions, and report issues. This real-time interaction enhances user engagement and facilitates continuous improvement.</p>
          </div>
        </div>
      </div>

      <div className="container col-xxl-8 px-4">
        <div className="row flex-lg-row-reverse align-items-center g-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={img9} className="d-block mx-lg-auto img-fluid py-5" alt="Bootstrap Themes" width="300" height="400" loading="lazy" />
          </div>

          <footer id="pricing" className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Pricing Strategy</h1>
            <p className="lead py-7">The price for renting the bicycle will be Rs. 1 per minute. Once the cycle is unlocked, the timer will automatically start. Every hour, <b>60 Rs.</b> will be deducted from the renter's bank account, and the timer will reset to zero. When the renter returns the bicycle to the assigned stand and locks it, the timer will stop, and the rental fee will be charged based on the duration of the rental.</p>
          </footer>
        </div>
      </div>
      <div className="container" id="about">
  <h2 className="pb-2 border-bottom fw-bold">About Us</h2>
  <p className="my-4">We are students of Thapar University, passionate about sustainable transportation solutions. Our mission is to provide a convenient and eco-friendly bicycle rental service to our campus community.</p>
  <div className="row row-cols-1 row-cols-md-4 g-4">
    {/* Circular Images */}
    <div className="col">
      <div className="rounded-circle bg-primary text-center py-4">
        <img src={cherish} alt="Team Member" className="img-fluid rounded-circle" />
      </div>
      <p className="text-center fw-bold mt-3">Cherish Mahajan</p>
    </div>
    <div className="col">
      <div className="rounded-circle bg-primary text-center py-4">
        <img src={jashan} alt="Team Member" className="img-fluid rounded-circle" />
      </div>
      <p className="text-center fw-bold mt-3">Jashanveer Kaur Dhillon</p>
    </div>
    <div className="col">
      <div className="rounded-circle bg-primary text-center py-4">
        <img src={ira} alt="Team Member" className="img-fluid rounded-circle" />
      </div>
      <p className="text-center fw-bold mt-3">Ira Vashisht</p>
    </div>
    <div className="col">
      <div className="rounded-circle bg-primary text-center py-4">
        <img src={amol} alt="Team Member" className="img-fluid rounded-circle" />
      </div>
      <p className="text-center fw-bold mt-3">Amoldeep Singh</p>
    </div>
  </div>
</div>

      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p className="col-md-4 mb-0 text-body-secondary">© 2023 Company, Inc</p>

          <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
          </a>
        </footer>
      </div>
    </>
  );
}

export default HomeLogin;
