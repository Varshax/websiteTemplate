import React from 'react';
import { Button } from 'semantic-ui-react';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li className="logo">Logo</li>
      </ul>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Courses</a></li>
        <li><a href="#">Results</a></li>
        <li><a href="#">Staff</a></li>
        <li><a href="#">Contact</a></li>
        <li><Button primary blue>Login</Button></li>
      </ul>
    </nav>
  )
}

export default Nav;
