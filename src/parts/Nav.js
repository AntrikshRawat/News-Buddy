/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import "../parts/style.css"
import { Link } from 'react-router-dom'
export class Nav extends Component {
  render() {
    return (
      <>
      <nav className="navbar navbar-expand-lg bg-dark bg-opacity-75">
  <div className="container-fluid">
    <Link className="navbar-brand text-light" to="/about">NewsBuddy</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          <Link className="nav-link text-light" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item text-light">
          <Link className="nav-link text-light" to="/business">Business</Link>
        </li>
        <li className="nav-item text-light">
          <Link className="nav-link text-light" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item text-light">
          <Link className="nav-link text-light" to="/health">Health</Link>
        </li>
        <li className="nav-item text-light">
          <Link className="nav-link text-light" to="/science">Science</Link>
        </li>
        <li className="nav-item text-light">
          <Link className="nav-link text-light" to="/sports">Sports</Link>
        </li>
        <li className="nav-item text-light">
          <Link className="nav-link text-light" to="/technology">Technology</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      {/* <div>
      <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand text-light" to="/">NewsBuddy</Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-light" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item text-light">
          <Link className="nav-link text-light" to="/about">Business</Link>
        </li>
        <li className="nav-item text-light">
          <Link className="nav-link text-light" to="/about">Entertainment</Link>
        </li>
        <li className="nav-item text-light">
          <Link className="nav-link text-light" to="/about">Health</Link>
        </li>
        <li className="nav-item text-light">
          <Link className="nav-link text-light" to="/about">Science</Link>
        </li>
        <li className="nav-item text-light">
          <Link className="nav-link text-light" to="/about">Sports</Link>
        </li>
        <li className="nav-item text-light">
          <Link className="nav-link text-light" to="/about">Technology</Link>
        </li>
        <li className="nav-item text-light">
          <Link className="nav-link text-light" to="/about">About</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div> */}
      </>
    )
  }
}

export default Nav
