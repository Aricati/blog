import React from "react";
import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home/index";
import ContactUs from "./containers/ContactUs";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Post from "./containers/Post";
import Blog from "./containers/Blog";
import AboutMe from "./containers/AboutMe";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/about-me" exact component={AboutMe} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/blog/" component={Hero} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/blog/:postId" exact component={Post} />
      </div>
    </Router>
  );
}

export default App;
