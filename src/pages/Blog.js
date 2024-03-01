import React, { useState } from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

function Blog() {
  const [content, setContent] = useState("");
  const [error, setError] = useState(true);

  const handleSumit = (e) => {
    e.preventDefault();

    if (content.length < 140) {
      setError(true);
    } else {
      setError(false);
    }
  };
  return (
    <div className="blog-container">
      <Logo />
      <Navigation />
      <h1>BLOG</h1>

      <form onSubmit={(e) => handleSumit(e)}>
        <input type="text" placeholder="Nom"></input>
        <textarea
          placeholder="Message"
          onChangeCapture={(e) => setContent(e.target.value)}
        ></textarea>
        {error && <p>Veuillez écrire un minimum de 140 carractères </p>}
        <input type="submit" className="submit" value="Envoyer"></input>
      </form>
      <ul></ul>
    </div>
  );
}

export default Blog;
