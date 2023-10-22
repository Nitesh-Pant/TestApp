import React from 'react';
import data from '../db.json';

const Services = () => {
    const services = data.services;

    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <h1>OUR SERVICES</h1>
            <div className="carousel-inner">
                {services.map((service, index) => {
                    if (index % 3 === 0) {
                        return (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <div className="d-flex">
                                    {services.slice(index, index + 3).map((serviceItem, subIndex) => (
                                        <div key={subIndex} className={`p-2 ${subIndex === 2 ? 'd-none d-md-block' : ''}`}>
                                            <img src={serviceItem.imageSrc} className="d-block w-100" alt={`Image ${index + subIndex + 1}`} style={{ width: '300px', height: '500px', objectFit: 'cover' }} />
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5>{serviceItem.userName}</h5>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" style={{ backgroundColor: "black" }}></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" style={{ backgroundColor: "black" }}></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
};

export default Services;
