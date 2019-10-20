import React, { Component } from "react";
import L from 'leaflet';
import "leaflet.heat";
import HeatmapOverlay from 'leaflet-heatmap/leaflet-heatmap.js';

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
      "radius": 50 ,
      "maxOpacity": .8,
      // scales the radius based on map zoom
      "scaleRadius": false,
      // if set to false the heatmap uses the global maximum for colorization
      // if activated: uses the data maximum within the current map boundaries
      //   (there will always be a red spot with useLocalExtremas true)
      "useLocalExtrema": false,
      // which field name in your data represents the latitude - default "lat"
      latField: 'lat',
      // which field name in your data represents the longitude - default "lng"
      lngField: 'lng',
      // which field name in your data represents the data value - default "value"
      valueField: 'count'
    };
    // var data = require('json!./data.json');
    // var realData = require('json!../data/washington_2019.json');
    // console.log("real");
    // console.log(realData);
    console.log("DATA");
    console.log(data);
    

    var testData = {
      max: 8,
      // data: [{lat: 47.53, lng:-120.0, count: 100},
      //   {lat: 47.5303, lng:-120.1, count: 40} ,
      //   {lat: 47.5200, lng:-120.1, count: 4},
      //   {lat: 47.5411, lng:-120.1, count: 1},
      //   {lat: 47.51, lng:-123, count: 1},
      //   {lat: 47.50, lng:-124, count: 1},
      //   {lat: 47.49, lng:-125, count: 1},
      //   {lat: 47.40, lng:-120, count: 1}
      //
     
     data
    }; 

    var heatmapLayer = new HeatmapOverlay(cfg);
    var baselayer = 
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        });
    // create map
    var Bob = [47.508, -120];
    var Bob1 = [47.808, -121];

    var circle = [47.53, -120];
    this.map = L.map('map', {
      center: Bob,
      zoom: 7,
      layers: [
        baselayer , heatmapLayer
      ]
    });


    var LeafIcon = L.Icon.extend({
      options: {
        shadowUrl: 'leaf-shadow.png',
        iconSize:     [38, 95],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
      }
    }); 
    // var map = L.map('map'),
    // realtime = L.realtime({
    //     url: 'https://wanderdrone.appspot.com/',
    //     crossOrigin: true,
    //     type: 'json'
    // }, {
    //     interval: 3 * 1000
    // }).addTo(map);

    // realtime.on('update', function() {
    // map.fitBounds(realtime.getBounds(), {maxZoom: 3});
    // });



    // L.circle(circle, 500, {
    //   color: 'red',
    //   fillColor: '#f03',
    //   fillOpacity: 0.5
    // }).addTo(this.map).bindPopup("I am a circle.");

    L.marker(Bob).addTo(this.map)
      .bindPopup("<b>Bob</b>").openPopup();


    L.marker(Bob1).addTo(this.map)
      .bindPopup("<b>Bob's friend</b>").openPopup();
      

      heatmapLayer.setData(testData);
  }

  render() {
    return <div id="map" style={style}></div>
  }
}

export default Map;