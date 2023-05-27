// import React, { useState, useEffect } from 'react';
import './hero.scss';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Hero = () => {
const settings = {
dots: true,
infinite: true,
speed: 500,
slidesToShow: 1,
slidesToScroll: 1,
centerPadding: '15%',
centerMode: true ,
prevArrow: (
      <button className="slick-prev">
            <i class="fa-regular fa-arrow-left"></i>
      </button>
    ),
nextArrow: (
      <button className="slick-next">
            <i class="fa-regular fa-arrow-right"></i>
      </button>
)
};

return (
<>
      <div className='HeroSlider'>
            

            <Slider {...settings}>
                  <div className='singe_slide'
                        >
                        <img src="https://images.pexels.com/photos/220365/pexels-photo-220365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                        <div class="content_wrapper">
                              <h1>Empowering Communities for Change</h1>
                              <p>Join us in making a difference in the world</p>
                        </div>
                  </div>

                  <div className='singe_slide'
                        >
                        <img src="https://images.pexels.com/photos/220365/pexels-photo-220365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                        <div class="content_wrapper">
                              <h1>Creating Opportunities for a Better Tomorrow</h1>
                              <p>Together, we can build a brighter future</p>
                        </div>
                  </div>

                  <div className='singe_slide'
                        >
                        <img src="https://images.pexels.com/photos/220365/pexels-photo-220365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                        <div class="content_wrapper">
                              <h1>Supporting Education for Underprivileged Children</h1>
                              <p>Providing hope and knowledge to the next generation</p>
                        </div>
                  </div>

                  <div className='singe_slide'
                        >
                        <img src="https://images.pexels.com/photos/220365/pexels-photo-220365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                        <div class="content_wrapper">
                              <h1>Protecting the Environment for Future Generations</h1>
                              <p>Taking action for a sustainable and greener planet</p>
                        </div>
                  </div>

                  <div className='singe_slide'
                        >
                        <img src="https://images.pexels.com/photos/220365/pexels-photo-220365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                        <div class="content_wrapper">
                              <h1>Empowering Women through Education and Skills</h1>
                              <p>Unlocking the potential of women for a better society</p>
                        </div>
                  </div>
            </Slider>

      </div>
</>
);
};

export default Hero;