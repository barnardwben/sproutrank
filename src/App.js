import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import React, { useRef, useEffect } from "react";
import ScrollToTop from "./ScrollToTop";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import RandRM from "./RandRM";
import SEO from "./SEO";
import SMM from "./SMM";
import Contact from "./Contact";
import About from "./About";
import "./App.scss";

const App = () => {
  const loaderRef = useRef(null);
  const history = useHistory();
  const fadeEffect = () => {
    setInterval(() => {
      // if we don't set opacity 1 in CSS, then
      // it will be equaled to "" -- that's why
      // we check it, and if so, set opacity to 1
      if (!loaderRef.current.style.opacity) {
        loaderRef.current.style.opacity = "1";
      }
      if (loaderRef.current.style.opacity > 0) {
        loaderRef.current.style.opacity -= 1;
        loaderRef.current.style.display = "none";
      } else {
        clearInterval(fadeEffect);
      }
      loaderRef.current.style.display = "none";
    }, 1500);
  };

  const alertUser = (e) => {
    e.preventDefault();
    history.go(0);
    window.location.reload();
    e.returnValue = "";
  };

  useEffect(() => {
    window.addEventListener("load", fadeEffect);
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("load", fadeEffect);
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);

  return (
    <div className="screen-container">
      <div ref={loaderRef} className="page-load-container">
        <img
          className="sprk-logo"
          src="images\semhawaiilogo.png"
          alt="SproutRank Logo"
        />
        <svg
          width="200"
          height="200"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
          className="lds-ripple"
        >
          <circle
            cx="50"
            cy="50"
            r="4.719"
            fill="none"
            stroke="#1d3f72"
            strokeWidth="2"
          >
            <animate
              attributeName="r"
              calcMode="spline"
              values="0;40"
              keyTimes="0;1"
              dur="3"
              keySplines="0 0.2 0.8 1"
              begin="-1.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              calcMode="spline"
              values="1;0"
              keyTimes="0;1"
              dur="3"
              keySplines="0.2 0 0.8 1"
              begin="-1.5s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="50"
            cy="50"
            r="27.591"
            fill="none"
            stroke="#5699d2"
            strokeWidth="2"
          >
            <animate
              attributeName="r"
              calcMode="spline"
              values="0;40"
              keyTimes="0;1"
              dur="3"
              keySplines="0 0.2 0.8 1"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              calcMode="spline"
              values="1;0"
              keyTimes="0;1"
              dur="3"
              keySplines="0.2 0 0.8 1"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>
      <Router>
        <ScrollToTop>
          <Nav />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/seo">
              <SEO />
            </Route>
            <Route exact path="/reviews-and-reputation-management">
              <RandRM />
            </Route>
            <Route exact path="/social-media-marketing">
              <SMM />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
};

export default App;
