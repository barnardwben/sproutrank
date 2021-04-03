import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import RandRM from "./RandRM";
import SEO from "./SEO";
import SMM from "./SMM";
import Contact from "./Contact";
import About from "./About";
import "./App.css";

const App = () => {
  return (
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
  );
};

export default App;
