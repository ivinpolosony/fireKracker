import React, { Component } from "react";
import L from 'leaflet';


const style = {
    width: "100%",
    height: "500px"
  };

class Map extends Component {
  componentDidMount() {
    // create map
    this.map = L.map('map', {
      center: [47.751076, -120.740135],
      zoom: 16,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });
  }

  render() {
    return <div id="map" style={style}></div>
  }
}

export default Map;