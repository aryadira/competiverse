import Main from "./layouts/Main";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.start();

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return <Main />;
}

export default App;
