import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import menu from "./Images/menu1.JPG";
import "./App.css";
import NavBar from "./Components/Nav/NavBar";

import { Button } from "react-bootstrap";
function App() {
  return (
    <div className="container-fluid">
      <NavBar />
      <div className="mainContainer">
        <div className="row contentRow">
          <div className="col-md-7 menuImageContainer">
            <Image src={menu} className="menuImage"></Image>
          </div>
          <div className="col-md-5">
            <div className="messageContainer">
              <h1>The Soul House</h1>
              <p>
                This is a message you could say before they press the buy now
                button. maybe talk about what the resturant is all about and
                what not. I think this would provide value to the customers. Not
                only that, it'll add more content to this page
              </p>
            </div>
            {/* <Button variant="warning">Buy Now</Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
