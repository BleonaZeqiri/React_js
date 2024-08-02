import React from "react";
import { Link } from "react-router-dom";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-content__items">
          <h3>Bleona</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab est
            fugiat aut soluta libero quasi nostrum sapiente facere magnam error,
            harum ea aliquam sunt, cumque ipsum nemo quibusdam consectetur
            dignissimos.
          </p>
        </div>

        <div className="footer-content__items">
          <h3>Contact</h3>
          <p>Bleona</p>
          <p>Prishtine, Kosovo</p>
          <p>+44 444 444</p>
          <p>zbleona@gmail.com</p>
        </div>
        <div className="footer-content__items">
          <h3>Quick Links</h3>
          <p>
            <Link to="/first-task">First Task</Link>
          </p>
          <p>
            <Link to="/second-task">Second Task</Link>
          </p>
          <p>
            <Link to="/third-task">Third Task</Link>
          </p>
          <p>
            {" "}
            <Link to="/#">Privatcy</Link>
          </p>
        </div>
        <div className="footer-content__items">
          <h3>Social Media</h3>

          <p>
            <Link to="#">Facebook</Link>
          </p>
          <p>
            <Link to="#"> Twitter</Link>
          </p>
          <p>
            <Link to="#"> Instagram</Link>
          </p>
          <p>
            <Link to="#"> LinkedIn</Link>
          </p>
        </div>
      </div>
      <div className="footer-content__h4">
        <h4>Copyright @ 2024 Bleona. All Rights Reserved</h4>
      </div>
    </footer>
  );
};

export default Footer;
