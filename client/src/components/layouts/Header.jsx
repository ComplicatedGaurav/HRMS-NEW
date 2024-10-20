import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../../context";
import "../../assets/header-styles/header.css";
import { RiLogoutCircleLine } from "react-icons/ri";
class Header extends Component {
  constructor() {
    super();
    this.state = {
      deleteAccount: false,
    };
  }

  OnLogout = (dispatch) => {
    localStorage.setItem("auth-token", "");
    localStorage.setItem("userId", "");
    console.log("Logged out!");

    dispatch({
      type: "LOGGED_OUT",
    });
  };

  getInfo = (todos) => {
    let completed = 0;
    todos.forEach((todoItem) => {
      if (todoItem.finished) completed++;
    });
    return completed;
  };

  render() {
    const { branding } = this.props;

    return (
      <Consumer>
        {(value) => {
          let { dispatch, token, user, todos } = value;

          if (token === undefined) token = "";
          if (user === undefined) user = "";
          if (todos === undefined) todos = [];

          // getting token from localstorage for removing delay
          const localToken = localStorage.getItem("auth-token");

          return (
            <>
              <nav className="navbar custom-navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#8b999a", padding:"20px"}}>
                <div className="" style={{display:"flex", gap:'50%', width:'100%', }}>
                  <Link to="/" className="navbar-brand brand-text">
                    {branding}
                  </Link>

                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i className="fa fa-bars"></i>
                  </button>

                  <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNavAltMarkup"
                  >
                    <div className="navbar-nav">
                      {/* About link */}
                      {
                        !localToken &&
                        (
                          <Link to="/about" className="nav-link custom-nav-link">
                            About
                          </Link>
                        )}

                      {/* Conditionally render based on token */}
                      {localToken ? (
                        <>
                          {/* Profile or Admin based on user role */}
                          <Link
                            to={user && user.role !== "admin" ? "/profile" : "#"}
                            className="nav-link custom-nav-link " 
                          >
                            Welcome back,   {user.name}!
                          </Link>

                          <span
                            onClick={this.OnLogout.bind(this, dispatch)}
                            className="nav-link custom-nav-link"
                          style={{cursor:'pointer'}}
                          >
                            <RiLogoutCircleLine />
                          </span>
                        </>
                      ) : (
                        <>
                          {/* SignUp and Login links with CTA button styles */}
                          <Link to="/signup" className="nav-link custom-nav-link btn-cta">
                            SignUp
                          </Link>
                          <Link to="/login" className="nav-link custom-nav-link btn-cta btn-outline" >
                            Login
                          </Link>
                        </>
                      )}


                      {/* Contact Us */}
                      {
                        !localToken &&
                        (
                          <Link to="/contactUs" className="nav-link custom-nav-link">
                            Contact Us
                          </Link>
                        )
                      }

                    </div>
                  </div>
                </div>
              </nav>
            </>
          );
        }}
      </Consumer>
    );
  }
}

export default Header;
