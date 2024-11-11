import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/header.css"

function Header() {

  return (
    <>
      <header>
        <nav>
            <Link to={"#"}>home</Link>
            <Link to={"#"}>My Projects</Link>
            <Link to={"#"}>About Me</Link>
            <Link to={"#"}>Contact</Link>
        </nav>
      </header>
    </>
  )
}

export default Header
