import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ride.css';

const FindRide = () => {
    const { timeTaken } = useParams();
    const [timeDifference, setTimeDifference] = useState(0);

    useEffect(() => {
        // Get the current time when the FindRide component is loaded
        const currentTime = new Date();

        // Calculate the time difference in minutes
        const timeDiffInMinutes = (currentTime.getTime() - parseInt(timeTaken)) / (1000 * 60);

        // Round off the time difference to two decimal places
        const roundedTimeDifference = timeDiffInMinutes.toFixed(2);

        // Update the state with the rounded time difference
        setTimeDifference(roundedTimeDifference);
    }, [timeTaken]);

    return (
        <div className="thank-you-page">
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="my-5">
                <div className="py-3 text-center bg-body-tertiary">
                    <div className="container py-5">
                        <h1 className="text-body-emphasis py-2">Thank You</h1>
                        <p className="col-lg-8 mx-auto lead">
                            The amount of <strong>Rs. {timeDifference}</strong> is deducted from your account. We hope you had a great experience.
                        </p>
                        <Link to="/home" className="btn btn-primary">Return to Home</Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default FindRide;




