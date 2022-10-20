import React from "react";
import logo from "../components/logo.png";

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="flexbox">
          <img
            src={logo}
            alt="logo"
            style={{
              width: "47px",
              height: "47px",
              marginTop: "0px",
              marginRight: "12px",
              marginLeft: "30px",
            }}
          />
          <a className="navbar-brand" style={{color:"white",fontWeight:"bold",padding:"10px"}} href="/">
            {props.appname}
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
