import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

// Services pages
import IotDev from "./pages/IotDev.jsx";
import AppDev from "./pages/AppDev.jsx";
import CloudServices from "./pages/CloudServices.jsx";
import SoftwareDev from "./pages/SoftwareDev.jsx";
import MobileAppDev from "./pages/MobileAppDev.jsx";





function App() {

  return (
    <>
    <div style={{position:"relative"}}>
      {/* <Navbar /> */}
      {/* <BannerSlider/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Services */}
        <Route path="/iotdev" element={<IotDev />} />
        <Route path="/appdev" element={<AppDev />} />
        <Route path="/cloudservices" element={<CloudServices />} />
        <Route path="/softwaredev" element={<SoftwareDev />} />
        <Route path="/mobileappdev" element={<MobileAppDev />} />

        {/* 404 */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      </div>
    </>
  );
}

export default App;