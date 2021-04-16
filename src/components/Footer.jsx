import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="container-fluid main">
      <div className="footer">
        <div className="col-12">
          <div className="row  ">
            <div className="col-3 offset-1 offset-md-0 col-md-1 ">
              {" "}
              <Link
                target="_blank"
                to="https://www.facebook.com/The-Entrepreneurship-Network-105155667888383/"
              >
                <img
                  className="icon"
                  alt="Facebook"
                  src="https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_63,h_63,al_c,q_85,usm_0.66_1.00_0.01/e316f544f9094143b9eac01f1f19e697.webp"
                />
              </Link>
            </div>
            <div className="col-3 col-md-1">
              <Link target="_blank" to="https://twitter.com/We_Are_TEN?s=08">
                <img
                  className="icon"
                  alt="Facebook"
                  src="https://static.wixstatic.com/media/59687ffffc2042f885062ce2b0744381.png/v1/fill/w_63,h_63,al_c,q_85,usm_0.66_1.00_0.01/59687ffffc2042f885062ce2b0744381.webp"
                />
              </Link>
            </div>
            <div className="col-3 col-md-1">
              {" "}
              <Link
                target="_blank"
                to="https://www.instagram.com/theentrepreneurshipnetwork/"
              >
                <img
                  className="icon"
                  alt="Facebook"
                  src="https://static.wixstatic.com/media/9f9c321c774844b793180620472aa4f1.png/v1/fill/w_63,h_63,al_c,q_85,usm_0.66_1.00_0.01/9f9c321c774844b793180620472aa4f1.webp"
                />
              </Link>
            </div>
            <div className="col-12 col-md-4 offset-md-1">
              <div className="row">
                <div className="col-10 offset-1 ">
                  Subscribe to our Newsletter
                </div>
              </div>
              <form>
                <div className="row">
                  <div className="col-6 form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="First Name"
                      id="fname"
                    />
                  </div>
                  <div className="col-6 form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Last Name"
                      id="lname"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 form-group">
                    <input
                      className="form-control"
                      type="number"
                      placeholder="Mobile"
                      id="mob"
                    />
                  </div>
                  <div className="col-6 form-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email"
                      id="mail"
                    />
                  </div>
                </div>
                <div className="row">
                  <div class="col-12 checkbox ">
                    <label>
                      <input type="checkbox" value="" />
                      &nbsp;Join TEN's Discord Community
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8 offset-2">
                    <button type="submit" className="btn-block">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-11 offset-1 col-md-3 ">
              <div className="row foot-last">
                <div className="col-4 col-md-12">About us</div>
                <div className="col-3 col-md-12">FAQs</div>
                <div className="col-4 col-md-12">Contact us</div>
              </div>
            </div>
          </div>
          <div className="row foot">
            <div className="col">
              &copy;2020 Limitless Technologies - The Entrepreneurship Network
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
