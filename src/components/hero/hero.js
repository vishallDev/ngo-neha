// import React, { useState, useEffect } from 'react';

function Hero() {
return (
        <>
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Join Us in Making a Difference</h5>
                            <p>Together, we can create a better world. Join our mission to empower communities and make a lasting impact on the lives of those in need.</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/1002061/pexels-photo-1002061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Every Life Counts</h5>
                            <p>We believe that every life counts, and we're committed to making a positive difference in the world. Join us in our efforts to improve the lives of individuals and communities around the globe.</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/6646864/pexels-photo-6646864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Building a Better World</h5>
                            <p>Our mission is to build a better world by supporting communities in need. Join us in our efforts to make a lasting impact and create a brighter future for all.</p>
                        </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
        </>
    );
}

export default Hero;