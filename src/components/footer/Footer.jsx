import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container conatainer">
        <h1 className="footer__title">Tung Nguyen</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonails" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.facebook.com/"
            className="footer__social-link"
            target="_blank">
            <i className="bx bxl-facebook"></i>
          </a>

          <a
            href="https://instagram.com/"
            className="footer__social-link"
            target="_blank">
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="https://twitter.com/"
            className="footer__social-link"
            target="_blank">
            <i className="bx bxl-twitter"></i>
          </a>

          <a
            href="https://youtube.com/"
            className="footer__social-link"
            target="_blank">
            <i className="bx bxl-youtube"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Crypticalcoder. All rigths reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;
