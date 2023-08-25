import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import cycle2 from './cycle2.jpg';
import cycle3 from './cycle3.jpg';

const BookingPage = () => {
    const { cycleNumber } = useParams();
    const currentTime = new Date();
    const [startTime, setStartTime] = useState(null);
    const navigateTo = useNavigate();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundImage: 'url("https://images.app.goo.gl/PrZAupLxmBcdhwc68")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
      <div className="my-5">
        <div className="px-5 text-center bg-body-tertiary">
          <div className="container">
            <h1 className="text-body-emphasis">Congratulations</h1>
            <p className="col-lg-8 mx-auto lead">
              The bicycle has been successfully booked by you. We hope you have a great day.
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="card mx-2" style={{ width: '18rem' }}>
          <img src={cycle2} className="card-img-top" alt="..." height="250" />
          <div className="card-body">
            <p className="card-text">You have successfully booked the bicycle at stand no. {cycleNumber}</p>
          </div>
        </div>
        <div className="card mx-2" style={{ width: '18rem' }}>
          <img src={cycle3} className="card-img-top" alt="..." height="250" />
          <div className="card-body">
            <p className="card-text">The bicycle has been booked by you at {currentTime.toLocaleString()}</p>
          </div>
        </div>
      </div>
      <section className="py-2 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">How to drop off the bicycle ?</h1>
            <p className="lead text-body-secondary">Whenever you are done with your ride, drop-off the bicycle at your nearest cycle stand. Do not forget to click the button below to successfully finish your ride and pay the respective amount.</p>
            <p>
            <Link 
                to={`/finishride/${currentTime.getTime()}`}
                onClick={() => setStartTime(new Date())}
                className="btn btn-primary my-2"
            >
                Finish My Ride
            </Link>

            </p>
          </div>
        </div>
      </section>
    </div>
  );
};



export default BookingPage;
