import React from "react";
import BannerSlider from "../components/BannerSlider";
import Navbar from "../components/Navbar";
// import BannerSlider from "../components/BannerSlider";



function Home() {
  return (
    <div>
      {/* Slider section (replace with a carousel library for full functionality) */}
    <BannerSlider/>
      <div className="bg-white space-ex-large">
        <div className="container">
          <Navbar/>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-7 col-sm-6 col-12">
              <h1>Innovating Excellence</h1>
              <p className="lead font-weight-bold">
                Where innovation meets excellence in IT solutions. As a leading
                provider of cutting-edge technology services, we deliver
                customized solutions that empower businesses of all sizes across
                diverse industries.
              </p>
              <p>
                At OBERON INFOTECH, we understand the ever-evolving landscape of
                information technology. Our team of experienced professionals is
                dedicated to staying ahead of the curve, ensuring that our
                clients have access to the latest advancements and best
                practices in the industry.
              </p>
              <p>
                Whether you're looking to streamline your operations, enhance
                your cybersecurity, or leverage the power of data analytics,
                OBERON INFOTECH has the expertise and resources to help you
                achieve your goals.
              </p>
              <a href="/about" className="btn btn-default">
                About OBERON INFOTECH
              </a>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-5 col-sm-6 col-12">
              <div className="about-img">
                <img src="/about-img-1.png" alt="About" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ...add the rest of the content as needed... */}
    </div>
  );
}

export default Home;
