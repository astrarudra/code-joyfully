import React from "react";
import { Navbar } from "flowbite-react";
import { scrollToTop } from '../util/helper'
import { Link } from 'react-router-dom';


const NavbarIsolated = ({pages}) => {
  console.log("PAGES", pages)
  return (
    <Navbar className="max">
      <Navbar.Brand href="/">
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Code Joyfully</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {Object.keys(pages).map((key) => {
          const { name, path, Icon, hidden } = pages[key];
          if (hidden === true) return null;
          return (
            <Link to={path} onClick={scrollToTop} key={key} className="nav-link">
              <span className="navbar-link-text">{name}</span>
            </Link>
          );
        })}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarIsolated