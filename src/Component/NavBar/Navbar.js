import React from "react";
import "../NavBar/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosContact } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg  fixed-top"
        style={{ backgroundColor: "#07492bf5", height: "58px" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={require("../Img/logo.png")} style={{ width: "60px" }} />
            Bharat Millets
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <a className="navbar-brand" href="#">
                <img
                  src={require("../Img/logo.png")}
                  style={{ width: "60px" }}
                />
                Bharat Millets
              </a>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body  ">
              <ul className="navbar-nav justify-content-end flex-grow-1 w-198 pe-3">
                <li className="nav-item">
                  <form className="d-flex w-198 " role="search">
                    <div class="search-container">
                      <input
                        type="search"
                        className="border border-white form-control me-2 mt-2 bg-dark-subtle  rounded-pill"
                        placeholder="Search..."
                        style={{ width: "500px" }}
                      />
                      <IoIosSearch className="fa fa-search search-icon" />
                    </div>

                    {/* <input
                      className="form-control me-2 " 
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                     style={{width:"500px"}}/>
                    <button className="btn btn-outline-success" type="submit">
                    </button> */}
                  </form>
                </li>
                <li className="nav-item ">
                  <a class="nav-link active" aria-current="page" href="#">
                    <FaLocationDot style={{ width: "15px", height: "17px" }} />
                    201015
                  </a>
                </li>
                <li className="nav-item ">
                  <a class="nav-link active" aria-current="page" href="#">
                    {" "}
                    <FaPhoneAlt style={{ width: "15px", height: "17px" }} />
                  </a>
                </li>
                <li className="nav-item ">
                  <a class="nav-link active" aria-current="page" href="#">
                    <FaRegHeart style={{ width: "15px", height: "17px" }} />
                  </a>
                </li>
                <li className="nav-item ">
                  <a class="nav-link active" aria-current="page" href="#">
                    <FaCartPlus style={{ width: "15px", height: "17px" }} />
                  </a>
                </li>
                <li className="nav-item ">
                  <a class="nav-link active" aria-current="page" href="#">
                    <IoIosContact style={{ width: "19px", height: "19px" }} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
