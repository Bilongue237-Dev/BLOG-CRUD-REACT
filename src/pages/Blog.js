import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

function Blog() {
  return (
    <div className="blog-container">
      <Logo />
      <Navigation />
      <h1>BLOG</h1>

      <form>
        <input type="text" placeholder="Nom"></input>
        <textarea placeholder="Message"></textarea>
        <input type="submit" className="submit" value="Envoyer"></input>
      </form>
      <ul></ul>
    </div>
  );
}

export default Blog;
