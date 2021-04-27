import React, { useEffect, useRef } from "react";

const useFadein = (duration = 1, delay = 0) => {
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  });
  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const fadeInH1 = useFadein(1, 2);
  const fadeInP = useFadein(5, 10);
  return (
    <div className="App">
      <h1 {...fadeInH1}>Hi</h1>
      <p {...fadeInP}>Lorem ipsum lalala</p>
    </div>
  );
};

export default App;
