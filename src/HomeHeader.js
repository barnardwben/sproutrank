import React, { useRef, useEffect } from "react";

const HomeHeader = () => {
  const circleOneRef = useRef(null);
  const circleTwoRef = useRef(null);
  const getStartedRef = useRef(null);

  const animateBubbles = () => {
    if (window.location.href === "https://sproutrank.netlify.app/") {
      setTimeout(() => {
        circleOneRef.current.classList.add("circle-one-animation");
        circleOneRef.current.classList.remove("hide-circle-one");
      }, 1500);
      setTimeout(() => {
        circleTwoRef.current.classList.add("circle-two-animation");
        circleTwoRef.current.classList.remove("hide-circle-two");
      }, 1700);
      setTimeout(() => {
        getStartedRef.current.classList.add("getstarted-animation");
        getStartedRef.current.classList.remove("hide-getstarted-btn");
      }, 2100);
    }
  };

  useEffect(() => {
    window.addEventListener("load", animateBubbles);
    return () => {
      window.removeEventListener("load", animateBubbles);
    };
  }, []);
  return (
    <>
      <header className="Home-Header">
        <section className="home-header-content">
          <div className="home-header-text">
            <div ref={circleOneRef} className="circle-one hide-circle-one">
              <h1>
                Lorem ipsum dolor
                <br />
                amet consectetur adipisicing.
              </h1>
            </div>
            <div ref={circleTwoRef} className="circle-two hide-circle-two">
              <h3>
                Lorem ipsum dolor, <br /> sit consectetur adipisicing.
              </h3>
            </div>
            <button className="hide-getstarted-btn" ref={getStartedRef}>
              GET STARTED
            </button>
          </div>
        </section>
      </header>
    </>
  );
};

export default HomeHeader;
