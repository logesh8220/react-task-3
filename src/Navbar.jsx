import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faSearch,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      {/* <!-- Sidebar Toggle (Topbar) --> */}
      <button
        id="sidebarToggleTop"
        class="btn btn-link d-md-none rounded-circle mr-3"
      >
        <i class="fa fa-bars"></i>
      </button>

      {/* <!-- Topbar Search --> */}
      <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
        <div class="input-group">
          <input
            type="text"
            class="form-control bg-light border-0 small"
            placeholder="Search for..."
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append">
            <button class="btn btn-primary" type="button">
              <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </form>

      {/* <!-- Topbar Navbar --> */}
      <ul class="navbar-nav ml-auto">
        {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
        <li class="nav-item dropdown no-arrow d-sm-none">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="searchDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <FontAwesomeIcon
              class="fas fa-search fa-fw"
              icon={faSearch}
            ></FontAwesomeIcon>
          </a>
          {/* <!-- Dropdown - Messages --> */}
        </li>

        {/* <!-- Nav Item - Alerts --> */}
        <li class="nav-item dropdown no-arrow mx-1">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="alertsDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <FontAwesomeIcon
              class="fas fa-bell fa-fw"
              icon={faBell}
            ></FontAwesomeIcon>
            {/* <!-- Counter - Alerts --> */}
            <span class="badge badge-danger badge-counter">3+</span>
          </a>
        </li>

        {/* <!-- Nav Item - Messages --> */}
        <li class="nav-item dropdown no-arrow mx-1">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="messagesDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <FontAwesomeIcon
              class="fas fa-envelope fa-fw"
              icon={faEnvelope}
            ></FontAwesomeIcon>
            {/* <!-- Counter - Messages --> */}
            <span class="badge badge-danger badge-counter">7</span>
          </a>
        </li>

        <div class="topbar-divider d-none d-sm-block"></div>

        {/* <!-- Nav Item - User Information --> */}
        <Link class="nav-item dropdown no-arrow" to="/Login">
          <a class="nav-link">
            <span class="mr-2 d-none d-lg-inline text-gray-600 small">
              Login
            </span>
          </a>
        </Link>
      </ul>
    </nav>
  );
}
export default Navbar;
