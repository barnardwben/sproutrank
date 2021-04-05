import React, { useRef, useEffect } from "react";

const HomeHeader = () => {
  const circleOneRef = useRef(null);
  const circleTwoRef = useRef(null);
  const getStartedRef = useRef(null);
  const homeHeadRef = useRef(null);
  const arrowDownRef = useRef(null);

  const arrowClick = () => {
    window.scroll({
      top: 640,
      left: 0,
      behavior: "smooth",
    });
  };

  const scrollHead = () => {
    window.scrollY > 170
      ? homeHeadRef.current.classList.add("head-scroll")
      : homeHeadRef.current.classList.remove("head-scroll");
  };

  const animateBubbles = () => {
    if (
      window.location.href === "https://sproutrank.netlify.app/" ||
      window.location.href === "http://localhost:3000/"
    ) {
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
        arrowDownRef.current.classList.add("arrow-down-animation");
        arrowDownRef.current.classList.remove("hide-arrow-down");
      }, 2100);
    }
  };

  useEffect(() => {
    window.addEventListener("load", animateBubbles);
    window.addEventListener("scroll", scrollHead);
    document
      .querySelector(".arrow-down-container")
      .addEventListener("click", arrowClick);
    return () => {
      window.removeEventListener("load", animateBubbles);
      window.removeEventListener("scroll", scrollHead);
    };
  }, []);
  return (
    <>
      <header ref={homeHeadRef} className="Home-Header">
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
        <div className="arrow-down-container ">
          <i
            ref={arrowDownRef}
            className="fas fa-arrow-circle-down hide-arrow-down arrow-down"
          ></i>
        </div>
      </header>
    </>
  );
};

export default HomeHeader;
