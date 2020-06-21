import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import menu from "./Images/menu1.JPG";
import "./App.css";
import NavBar from "./Components/Nav/NavBar";

function App() {
  return (
    <div className="container-fluid App">
      <NavBar />
      <div className="mainContainer">
        <div className="row contentRow">
          <div className="col-md-7 menuImageContainer">
            <Image src={menu} className="menuImage"></Image>
          </div>
          <div className="col-md-5">
            <div className="messageContainer">
              <h1>The Soul House</h1>
              {/* <p>
                Welcome to the soul house ! Austin Texas’s Newest soul food
                restaurant and caterer. Our menu focuses on Harlem styled soul
                food specializing in Chicken & waffles. We believe that nothing
                shows unity more than communities enjoying delicious comfort
                food while sharing ideas on creativity, diversity & culture
                appreciation. The soul house celebrates people of all different
                walks of life and provides a nourishing and rejuvenating
                environment for the soul.
              </p> */}
              <p>
                OH Snap ! Pre orders are all sold out. Lucky for you, we have
                opened up a pick up option on Monday June 22nd at Stubbs on 801
                red river street in Austin Texas from 5-7 pm. First come first
                served. Limited supplies last so be there early !
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="footerContainer">
            <p>
              soulhousefoods@gmail.com |
              <a
                href="https://www.instagram.com/soulhousefoods/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </p>
          </div>
        </div>
        <div className="col-md-6"></div>
      </div>
    </div>
  );
}

export default App;
