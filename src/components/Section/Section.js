import React, { Component } from "react";
import "./Section.css";

class Section extends Component {
  render() {
    return (
      <div>
       
          <div className="Section Section--left">
            <div className="Section__title">A New Way to Get Home</div>
            <div className="Section__text">
              <p>
                Join a growing community that believes that all of us have a
                responsibility to guard one another. Find information about recent
                safety incidents on your route, and provide information to your
                peers as you make your way through the city. With our network, you
                never have to go it alone.
              </p>
            </div>
          </div>
      
          <div className = "Section Section--right">
           <img src = "test.jpg" alt = "Logo" />
          </div>

      </div>
    );
  }
}

export default Section;
