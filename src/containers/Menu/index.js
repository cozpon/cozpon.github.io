import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return(
      <div className="menu">
        <div id="menu-text">
          <h2> Drinks </h2>
            Drip Coffee - $4 <br />
            Tea - $4
          <h2> Food </h2>
            Fresh baked bread - $20 <br />
            Tomato sandwich - $12
        </div>
      </div>
    );
  }
}

export default Menu;