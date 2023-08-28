import React from "react";
import { Link } from "react-router-dom";
import logo from "../inc/TD.svg";

function Navbar() {
  return (
    <div className="navbar-dark bg-dark shadow">
      <div className="conatiner">
        <div className="row">
          <div className="col-md-12">
            <nav class="navbar navbar-expand-lg bg-dark">
              <div class="container-fluid">
                <Link to="/home" class="navbar-brand text-white">
                  <img
                    src={logo}
                    className="img-fluid img-thumbnail mx-1"
                    width="101px"
                  ></img>
                </Link>

                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <Link to="/home" class="nav-link active text-white">
                        Home
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/course" class="nav-link active text-white">
                        Course management
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/query" class="nav-link active text-white">
                        Have a Query?
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/profile" class="nav-link active text-white">
                        My Profile
                      </Link>
                    </li>
                    <li class="menu-container"></li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
