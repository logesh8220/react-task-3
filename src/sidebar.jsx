import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaughWink,
  faTachometerAlt,
  faTable,
  faPaintRoller,
  faClipboard,
  faTabletButton,
  faBorderStyle,
  faFile,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
function Sidebar() {
  return (
    <div id="wrapper">
      <ul
        class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <a
          class="sidebar-brand d-flex align-items-center justify-content-center"
          href="/Dashboard"
        >
          <div class="sidebar-brand-icon rotate-n-15">
            <FontAwesomeIcon
              class="fas fa-fw "
              icon={faLaughWink}
            ></FontAwesomeIcon>
            {/* fa-laugh-wink */}
          </div>
          <div class="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </a>

        {/* <!-- Divider --> */}
        <hr class="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li class="nav-item active">
          <Link class="nav-link" to="/Dashboard">
            <FontAwesomeIcon
              class="fas fa-fw mx-2"
              icon={faTachometerAlt}
            ></FontAwesomeIcon>
            <span>Dashboard</span>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr class="sidebar-divider" />
        {/* <!-- Heading --> */}
        <div class="sidebar-heading mx-2">Interface</div>

        {/* <!-- Nav Item - Dashboard --> */}
        <li class="nav-item active">
          <Link class="nav-link" to="/Tables">
            <FontAwesomeIcon
              class="fas fa-fw mx-2"
              icon={faTable}
            ></FontAwesomeIcon>
            <span>Users</span>
          </Link>
        </li>
        {/* <!-- Nav Item - Dashboard --> */}
        <li class="nav-item active">
          <Link class="nav-link" to="/Products">
            <FontAwesomeIcon
              class="fas fa-fw mx-2"
              icon={faFile}
            ></FontAwesomeIcon>
            <span>Products</span>
          </Link>
        </li>

                {/* <!-- Nav Item - Dashboard --> */}
                <li class="nav-item active">
          <Link class="nav-link" to="/Studentmanagement">
            <FontAwesomeIcon
              class="fas fa-fw mx-2"
              icon={faUsers}
            ></FontAwesomeIcon>
            <span>Students Management</span>
          </Link>
        </li>

        <hr class="sidebar-divider" />
        {/* <!-- Heading --> */}
        <div class="sidebar-heading mx-2">Utilities</div>

        {/* <!-- Nav Item - Dashboard --> */}
        <li class="nav-item active">
          <Link class="nav-link" to="/Colors">
            <FontAwesomeIcon
              class="fas fa-fw mx-2"
              icon={faPaintRoller}
            ></FontAwesomeIcon>
            <span>Colors</span>
          </Link>
        </li>

        {/* <!-- Nav Item - Dashboard --> */}
        <li class="nav-item active">
          <Link class="nav-link" to="/Cards">
            <FontAwesomeIcon
              class="fas fa-fw mx-2"
              icon={faClipboard}
            ></FontAwesomeIcon>
            <span>Cards</span>
          </Link>
        </li>

        {/* <!-- Nav Item - Dashboard --> */}
        <li class="nav-item active">
          <Link class="nav-link" to="/Buttons">
            <FontAwesomeIcon
              class="fas fa-fw mx-2"
              icon={faTabletButton}
            ></FontAwesomeIcon>
            <span>Buttons</span>
          </Link>
        </li>

        {/* <!-- Nav Item - Dashboard --> */}
        <li class="nav-item active">
          <Link class="nav-link" to="/Borders">
            <FontAwesomeIcon
              class="fas fa-fw mx-2"
              icon={faBorderStyle}
            ></FontAwesomeIcon>
            <span>Borders</span>
          </Link>
        </li>

      </ul>
    </div>
  );
}
export default Sidebar;
