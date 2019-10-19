import React, { Component } from "react";
import L from 'leaflet';
// import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
// import HeatmapLayer from '../src/HeatmapLayer';
import data from '../data/washington_2019.json'
import heatmap from 'leaflet-heatmap'


const style = {
  width: "100%",
  height: "500px"
};

class Map extends Component {
  componentDidMount() {
  console.log(data)

    // Heatmap 

var cfg = {
  // radius should be small ONLY if scaleRadius is true (or small radius is intended)
  // if scaleRadius is false it will be the constant radius used in pixels
  "radius": 2,
  "maxOpacity": .8,
  // scales the radius based on map zoom
  "scaleRadius": true,
  // if set to false the heatmap uses the global maximum for colorization
  // if activated: uses the data maximum within the current map boundaries
  //   (there will always be a red spot with useLocalExtremas true)
  "useLocalExtrema": true,
  // which field name in your data represents the latitude - default "lat"
  latField: 'lat',
  // which field name in your data represents the longitude - default "lng"
  lngField: 'lng',
  // which field name in your data represents the data value - default "value"
  valueField: 'count'
};


var heatmapLayer = new HeatmapOverlay(cfg);
    // create map
    var Bob = [47.508, -120];
    var circle = [47.53,-120];
    this.map = L.map('map', {
      center: Bob,
      zoom: 16,
      layers: [
        // L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        //   attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        // }),
        heatmapLayer
      ]
    });
    
    L.circle(circle, 500, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5
    }).addTo(this.map).bindPopup("I am a circle.");

    L.marker(Bob).addTo(this.map)
		.bindPopup("<b>Bob</b>").openPopup();














  }

  render() {
    return <div id="map" style={style}></div>
  }
}

export default Map;