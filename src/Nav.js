import React, { useRef, useEffect } from "react";
import "./Nav.scss";
import { NavLink, Link } from "react-router-dom";

const Nav = () => {
  const blackRef = useRef(null);
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const navLinkContainerRef = useRef(null);
  const navbarRef = useRef(null);

  const scrollNav = () => {
    window.scrollY > 170
      ? navbarRef.current.classList.add("fix-nav")
      : navbarRef.current.classList.remove("fix-nav");
  };

  const runAnimation = () => {
    console.log("working");
    blackRef.current.classList.remove("hide-container");
    topRef.current.classList.add("ani-one");
    bottomRef.current.classList.add("ani-two");

    setTimeout(() => {
      document.querySelector(".nav-link-box").style.display = "block";
      blackRef.current.classList.add("hide-container");
      topRef.current.classList.remove("ani-one");
      bottomRef.current.classList.remove("ani-two");
      navLinkContainerRef.current.classList.add("fader");
    }, 950);
  };

  const closeAnimation = () => {
    navLinkContainerRef.current.classList.add("fader");
    blackRef.current.classList.remove("hide-container");
    topRef.current.classList.add("ani-three");
    bottomRef.current.classList.add("ani-four");
    document.querySelector(".nav-link-box").style.display = "none";

    setTimeout(() => {
      document.querySelector(".nav-link-box").style.display = "none";
      blackRef.current.classList.add("hide-container");
      topRef.current.classList.remove("ani-three");
      bottomRef.current.classList.remove("ani-four");
    }, 950);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollNav);
    document
      .querySelector(".hamburger-container")
      .addEventListener("click", runAnimation);
    document
      .querySelector(".exit-nav-menu")
      .addEventListener("click", closeAnimation);
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        let hloc = e.target.getAttribute("data-loc-type");

        if (hloc === "/") {
          window.location.href = `https://sproutrank.netlify.app/`;
        } else {
          closeAnimation();
        }
      });
    });
    return () => {
      window.removeEventListener("scroll", scrollNav);
      document
        .querySelector(".hamburger-container")
        .removeEventListener("click", runAnimation);
      document
        .querySelector(".exit-nav-menu")
        .removeEventListener("click", closeAnimation);
    };
  }, []);

  return (
    <>
      <nav ref={navbarRef} className="navbar">
        <NavLink data-loc-type="/" to="/" className="nav-link">
          <img
            className="sprk-logo sprout-brand-logo"
            src="images\semhawaiilogo.png"
            alt="SEO Marketing SproutRank Logo"
          />
        </NavLink>
        <div className="hamburger-container">
          <i className="fas fa-bars hamburger-menu"></i>
        </div>
      </nav>
      <div ref={blackRef} className="black-container hide-container">
        <div ref={topRef} className="top-black"></div>
        <div ref={bottomRef} className="bottom-black"></div>
      </div>
      <div className="nav-link-box">
        <div ref={navLinkContainerRef} className="nav-link-container">
          {/* <Link to="/">
            <img
              src="\hllogo.png"
              alt="Hannah Lane Realtor Logo"
              ref={logoRef}
              className="hlane-logo"
            />
          </Link> */}
          <NavLink
            exact
            data-loc-type="/"
            to="/"
            className="nav-link"
            activeClassName="active"
          >
            HOME
          </NavLink>
          <NavLink
            data-loc-type="/seo"
            to="/seo"
            className="nav-link"
            activeClassName="active"
          >
            SEO
          </NavLink>
          <NavLink
            data-loc-type="/reviews-and-reputation-management"
            to="/reviews-and-reputation-management"
            className="nav-link"
            activeClassName="active"
          >
            REVIEWS
          </NavLink>
          <NavLink
            data-loc-type="/social-media-marketing"
            to="/social-media-marketing"
            className="nav-link"
            activeClassName="active"
          >
            SOCIAL
          </NavLink>
          <NavLink
            data-loc-type="/about"
            to="/about"
            className="nav-link"
            activeClassName="active"
          >
            ABOUT
          </NavLink>
          <NavLink
            data-loc-type="/contact"
            to="/contact"
            className="nav-link"
            activeClassName="active"
          >
            CONTACT
          </NavLink>
        </div>
        <div className="exit-nav-menu">
          <i className="fas fa-external-link-alt exit-nav-btn"></i>
        </div>
      </div>
    </>
  );
};

export default Nav;
