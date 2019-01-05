import React, { Component } from 'react';
import BarHeader from '../../components/barheader.components';
class Bar extends Component {
  render() {
    return(
      <div className="main">
      <header id="global-nav-header">
          <BarHeader />
      </header>
          <br />
          <center>
            <img src="https://i.imgur.com/pfp1faA.png" alt="dridry" />
          </center>
          <br />
          <div id="hours-text">
            Hours: 7am - 5pm<br />
            Monday thru Sunday
          </div>
      </div>
    );
  }
}

export default Bar;