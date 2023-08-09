import Header from "./Header";
import Body from "./Body";
import { gsap } from "gsap";
import { useEffect } from "react";

let tl = gsap.timeline();
tl.to(".container", {
  opacity: 1,
  duration: 5,
});

const App = () => {
  useEffect(() => {
    const onPageLoad = () => {
      let tl = gsap.timeline();
      tl.fromTo(
        ".header",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      ).fromTo(
        ".wrapper",
        { opacity: 0, visibility: "hidden" },
        { opacity: 1, visibility: "visible", duration: 2 }
      );
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <div className="container">
      <Header />
      <Body />
    </div>
  );
};

export default App;
