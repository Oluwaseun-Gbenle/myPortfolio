import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import IntroductoryPage from "./components/introductoryPage";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedCursor from "react-animated-cursor";
import { ToastContainer } from "react-toastify";
import PortfolioSeeMore from "./components/portfolio-details/see-more-modal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/not-found";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <div className="cursor-style">
        <AnimatedCursor innerSize={19} outerSize={19} color="24, 210 ,110" outerAlpha={0.4} innerScale={0.7} outerScale={5} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
      <Routes>
        <Route path="/" element={<IntroductoryPage />} />
        <Route path="/all-portfolio" element={<PortfolioSeeMore />} />
        <Route path="*" element={<NotFound />} />  
      </Routes>
    </Router>
  );
};

export default App;
