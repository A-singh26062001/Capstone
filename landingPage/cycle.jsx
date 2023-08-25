import React from 'react';
import './App.css'; // Import your own CSS file if needed

const App = () => {
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
          <img src="./cycle2.jpg" className="card-img-top" alt="..." height="250" />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div className="card mx-2" style={{ width: '18rem' }}>
          <img src="./cycle3.jpg" className="card-img-top" alt="..." height="250" />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
      <section className="py-2 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">How to drop off the bicycle ?</h1>
            <p className="lead text-body-secondary">Whenever you are done with your ride, drop-off the bicycle at your nearest cycle stand. Do not forget to click the button below to successfully finish your ride and pay the respective amount.</p>
            <p>
              <a href="#" className="btn btn-primary my-2">Finish My Ride</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
