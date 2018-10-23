import React, { Component } from 'react';
import {
  NavLink,
  Link
} from "react-router-dom";

import Logo from './logo.png'
import "./Header.css"

class Header extends Component {
  state = {
    isExpanded: false
  }


  showMore = (event) => {
    this.setState((state) => {
      return {isExpanded: !state.isExpanded };
    });
  }

  render() {
    return (
      <header className="header fixed-top">
        <nav className="navbar">
          <div className="navbar--main">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>

            <button className="button button--show-more" name="button" onClick={this.showMore}>
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <div className={`navbar--collapse ${(this.state.isExpanded) ? 'navbar--collapse--false' : 'navbar--collapse--true' }`}>
            <ul className="navbar__ul">
              <li className="nav-item navbar__ul_li">
                <NavLink activeClassName="active-navbar-link main" className="nav-main-link" to='/' exact={true} >Home</NavLink>
                <div className="nav-dropdown-menu">
                  <NavLink activeClassName="active-navbar-link" className="nav-main-link" to='/'>Home1</NavLink>
                  <NavLink activeClassName="active-navbar-link" className="nav-main-link" to='/home-2'>Home2</NavLink>
                </div>
              </li>

              <li className="nav-item navbar__ul_li">
                <NavLink activeClassName="active-navbar-link main" className="nav-main-link" to='/about-us'>About</NavLink>
                <div className="nav-dropdown-menu">
                  <NavLink activeClassName="active-navbar-link"className="nav-main-link" to='/about-us' exact={true}>About Us</NavLink>
                  <NavLink activeClassName="active-navbar-link"className="nav-main-link" to='/services'>Services</NavLink>
                  <NavLink activeClassName="active-navbar-link"className="nav-main-link" to='/service-single'>Service Single</NavLink>
                  <NavLink activeClassName="active-navbar-link"className="nav-main-link" to='/Trainers'>Trainers</NavLink>
                </div>
              </li>

              <li className="nav-item navbar__ul_li">
                <NavLink activeClassName="active-navbar-link main" className="nav-main-link" to="/pages" >Pages</NavLink>
                <div className="nav-dropdown-menu">
                  <NavLink activeClassName="active-navbar-link"className="nav-main-link" to='/pricing-plan'>pricing Plan</NavLink>
                  <NavLink activeClassName="active-navbar-link"className="nav-main-link" to='/contact'>Contact</NavLink>
                  <NavLink activeClassName="active-navbar-link"className="nav-main-link" to='/contact-2'>Contact 2</NavLink>
                  <NavLink activeClassName="active-navbar-link"className="nav-main-link" to='/404'>404</NavLink>
                </div>
              </li>

              <li className="nav-item navbar__ul_li">
                <NavLink activeClassName="active-navbar-link main" className="nav-main-link"  to="/classes">Classes</NavLink>
                <div className="nav-dropdown-menu">
                  <NavLink activeClassName="active-navbar-link"className="nav-main-link" to='/single-class'>single Class</NavLink>
                  <NavLink activeClassName="active-navbar-link"className="nav-main-link" to='/booking'>Booking</NavLink>
                </div>
              </li>

              <li className="nav-item navbar__ul_li">
                <NavLink activeClassName="active-navbar-link main" className="nav-main-link" to="/shop" >Shop</NavLink>
                <div className="nav-dropdown-menu">
                  <NavLink activeClassName="active-navbar-link"className="nav-main-link" to='/shopping'>Shopping</NavLink>
                  <NavLink activeClassName="active-navbar-link"className="nav-main-link" to='/single-product'>Single Product</NavLink>
                  <NavLink activeClassName="active-navbar-link"className="nav-main-link" to='/shopping-cart'>Shopping Cart</NavLink>
                  <NavLink activeClassName="active-navbar-link"className="nav-main-link" to='/checkout'>Checkout</NavLink>
                </div>
              </li>

              <li className="nav-item navbar__ul_li">
                <NavLink activeClassName="active-navbar-link main" className="nav-main-link" to="/chedule" >Schedule</NavLink>
              </li>

              <li className="nav-item navbar__ul_li">
                <NavLink activeClassName="active-navbar-link main" className="nav-main-link" to="/blog" >Blog</NavLink>
                <div className="nav-dropdown-menu">
                  <NavLink activeClassName="active-navbar-link"className="nav-main-link" to='/blog'>Blog</NavLink>
                  <NavLink activeClassName="active-navbar-link"className="nav-main-link" to='/blog-2'>Blog 2</NavLink>
                  <NavLink activeClassName="active-navbar-link"className="nav-main-link" to='/blog-left'>Blog Left</NavLink>
                </div>
              </li>

              <li className="nav-item navbar__ul_li">
                <div className="nav-menu-icon-div">
                  <NavLink activeClassName="active-navbar-link" className="nav-main-link icon" to='/shopping-cart'><i className="fas fa-shopping-cart"></i></NavLink>
                  <span className="nav-main-link" href="#">|</span>
                  <NavLink activeClassName="active-navbar-link" className="nav-main-link icon" to='/search'><i className="fas fa-search"></i></NavLink>
                </div>
              </li>

            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
