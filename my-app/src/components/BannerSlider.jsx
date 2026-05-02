import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";
import sliderImg2 from "../assets/images/slider-large-2.jpg";
import sliderImg3 from "../assets/images/slider-large-3.jpg";
import sliderImg5 from "../assets/images/slider-large-5.jpg";


function BannerSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
       navigation={{
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  }}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="hero-slider"
    >
      <SwiperSlide>
        <div className="hero-slide" style={{position:"absolute", top:"0",width:"100%"}}>
          <img src={sliderImg2} className="hero-img" />

          <div className="overlay"></div>

          <div className="hero-content">
            <h1>Leading Digital Change</h1>
            <p>
              Revolutionary technology solutions revolutionizing industries,
              empowering businesses, and fostering growth.
            </p>
            <button className="btn btn-success hero-btn">
              KNOW MORE
            </button>
          </div>
        </div>
      </SwiperSlide>
        <SwiperSlide>
        <div className="hero-slide" style={{position:"absolute", top:"0",width:"100%"}}>
          <img src={sliderImg3} className="hero-img" />

          <div className="overlay"></div>

          <div className="hero-content">
            <h1>Leading Digital Change</h1>
            <p>
              Revolutionary technology solutions revolutionizing industries,
              empowering businesses, and fostering growth.
            </p>
            <button className="btn btn-success hero-btn">
              KNOW MORE
            </button>
          </div>
        </div>
      </SwiperSlide>
        <SwiperSlide>
        <div className="hero-slide" style={{position:"absolute", top:"0",width:"100%"}}>
          <img src={sliderImg5} className="hero-img" />

          <div className="overlay"></div>

          <div className="hero-content">
            <h1>Leading Digital Change</h1>
            <p>
              Revolutionary technology solutions revolutionizing industries,
              empowering businesses, and fostering growth.
            </p>
            <button className="btn btn-success hero-btn">
              KNOW MORE
            </button>
          </div>
        </div>
      </SwiperSlide>
        {/* Custom Arrows */}
  <div className="custom-prev">❮</div>
  <div className="custom-next">❯</div>
    </Swiper>
  );
}

export default BannerSlider;