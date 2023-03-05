import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap-icons/font/bootstrap-icons.css";
import IntroductoryPage from "./components/introductoryPage";
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <IntroductoryPage />
    </>
  );
};

export default App;
