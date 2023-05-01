import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap-icons/font/bootstrap-icons.css";
import IntroductoryPage from "./components/introductoryPage";
import AOS from 'aos';
import 'aos/dist/aos.css';
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
     <div className="cursor-style">
        <AnimatedCursor
          innerSize={19}
          outerSize={19}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <IntroductoryPage />
    </>
  );
};

export default App;
