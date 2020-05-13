import React from 'react';
import Nav from "./Nav"
const Header = () => {
  return (
    <header>
      <Nav/>
        <div className="head">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2d10Xb1-S8a4u7uJ04MSJWfCkDBHTHqZKLKW-3t8MwkHyw-A3&usqp=CAU"/>
          <div>
          <h1>We Build,< br/>The Future</h1>
          <p>Integer posuere leo non erat ornare dictum id vitae magna. Proin consectetur iaculis nisi, ut convallis tortor tempor congue. Curabitur sit amet tempus felis. Duis tellus eros, pellentesque at rhoncus eu, maximus ut diam.</p>
          <div><a className="contact" href="#">Contact Us</a></div>
          </div>
        </div>
    </header>
  )
}


export default Header;
