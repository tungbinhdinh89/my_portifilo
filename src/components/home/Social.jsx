import React from "react";

function Social() {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/"
        className="home__social-icon"
        target="_blank">
        <i className="uil uil-instagram"></i>
      </a>

      <a
        href="https://dribbble.com/"
        className="home__social-icon"
        target="_blank">
        <i className="uil uil-dribbble"></i>
      </a>

      <a
        href="https://gitlab.com/"
        className="home__social-icon"
        target="_blank">
        <i className="uil uil-gitlab"></i>
      </a>

      <a
        href="https://github.com/dashboard"
        className="home__social-icon"
        target="_blank">
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
}

export default Social;
