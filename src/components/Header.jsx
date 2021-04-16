import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header({ active }) {
  return (
    <div className="container-fluid head">
      <div className="row ">
        <div
          className="col-12
         col-md-2"
        >
          <img
            src="https://static.wixstatic.com/media/693073_ee31d3dcd4064037a097ec905d0c841b~mv2.jpg/v1/fill/w_125,h_100,al_c,q_80,usm_0.66_1.00_0.01/pp_edited.webp"
            alt="logo"
          ></img>
        </div>
        <div className="col-10 offset-1 offset-md-0 col-md-4 name">
          <p className="line">
            <span className="letterI">T</span>he
          </p>
          <p className="line">
            <span className="letterI">E</span>ntrepreneurship
          </p>
          <p className="line">
            <span className="letterI">N</span>etwork
          </p>
        </div>
        <div className="offset-1 col-10 offset-md-1 col-md-4">
          <div className="row buttons-row">
            <span className="col-5 offset-1 ">
              <button type="button" className="btn btn-primary btn-block cart">
                <i className="fa fa-shopping-cart fa-2x"></i>
              </button>
            </span>
            <span className="col-5 offset-1 ">
              <button
                type="button"
                className="btn btn-primary btn-block login-button"
              >
                <i className="fa fa-user fa-2x"></i> LOGIN
              </button>
            </span>
          </div>
          <div className="row">
            <div className="col-11 offset-1">
              <div className="input-group searchI">
                <input
                  type="search"
                  placeholder="Search here..."
                  class="form-control searchII"
                />
                <div class="input-group-append border-0">
                  <button
                    id="button-addon3"
                    type="button"
                    class="btn btn-link text-success"
                  >
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row nav-row">
        <div className="col-6 offset-3 offset-md-0  text-align-center  col-md-2 navlink">
          <Link to="/" className={active == "Home" ? "active l" : "l"}>
            {" "}
            Home
          </Link>
        </div>
        <div className="col-6 offset-3 offset-md-0  text-align-center  col-md-2 navlink">
          <Link
            to="#"
            className={active == "Online courses" ? "active l" : "l"}
          >
            Online courses
          </Link>
        </div>
        <div className="col-6 offset-3 offset-md-0  text-align-center  col-md-2 navlink">
          <Link to="#" className={active == " We're Hiring" ? "active l" : "l"}>
            {" "}
            We're Hiring
          </Link>
        </div>
        <div className="col-6 offset-3 offset-md-0  text-align-center  col-md-2 navlink">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle "
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              data-dropup-auto="false"
              aria-haspopup="true"
              aria-expanded="false"
            >
              More
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link className="dropdown-item" to="#">
                Blog
                <hr />
              </Link>
              <Link className="dropdown-item" to="/certification">
                Certification
                <hr />
              </Link>
              <Link className="dropdown-item" to="/alumni">
                Alumni team
                <hr />
              </Link>
              <Link className="dropdown-item" to="/forum">
                Forum
                <hr />
              </Link>
              <Link className="dropdown-item" to="#">
                Hackathon
                <hr />
              </Link>
              <Link className="dropdown-item" to="/member-registration">
                Membership Registration
                <hr />
              </Link>
              <Link className="dropdown-item" to="/campus">
                Campus Ambassador Program
                <hr />
              </Link>
              <Link className="dropdown-item" to="#">
                Mentorship
                <hr />
              </Link>
              <Link className="dropdown-item" to="#">
                Social Media
                <hr />
              </Link>
              <Link className="dropdown-item" to="/testimonial">
                Testimonials
                <hr />
              </Link>
              <Link className="dropdown-item" to="#">
                Contact us
                <hr />
              </Link>
              <Link className="dropdown-item" to="/complaints">
                Complaints
                <hr />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
