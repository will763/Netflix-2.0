import React from 'react';
import ReactDOM from 'react-dom'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";


export function CarouselNetFlix (){

    const settings = {
        
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false,
                arrows:false,
                autoplay: true,
                autoplaySpeed: 500,
                cssEase: "linear",
                speed: 5000,
              }
            },
            {
              breakpoint: 600,
              settings: {
                arrows:false,
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                autoplay: true,
                autoplaySpeed: 500,
                cssEase: "linear",
                speed: 5000,
              }
            },
            {
              breakpoint: 375,
              settings: {
                arrows:false,
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 500,
                cssEase: "linear",
                speed: 5000,
              }
            }
          ]
      };

    return(
        <div style={{width:"95%",margin:"1rem auto"}}>
        <Slider {...settings}>
          <div>
           <img src="Dark.jpg" alt="Dark" width="90%" />
          </div>
          <div>
          <img src="Halo.jpg" alt="Halo" width="90%" />
          </div>
          <div>
          <img src="PeakyBlinders.jpg" alt="PeakyBlinders" width="90%" />
          </div>
          <div>
          <img src="Loki.jpg" alt="Loki" width="90%" />
          </div>
          <div>
          <img src="Os100.jpg" alt="Os100" width="90%" />
          </div>
          <div>
          <img src="Riverdale.jpg" alt="Riverdale" width="90%" />
          </div>
          <div>
          <img src="TheWitcher.jpg" alt="WheWitcher" width="90%" />
          </div>
          <div>
          <img src="BigBang.jpg" alt="BigBang" width="90%" />
          </div>
          <div>
          <img src="TheWalkingDead.jpg" alt="TheWalkingDead" width="90%" />
          </div>
          <div>
          <img src="Attack on Titan.jpg" alt="Attack on Titan" width="90%" />
          </div>
        </Slider>
        </div>
    )
 };

