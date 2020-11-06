import React from "react";
import leaflet from "leaflet";
import propTypes from "prop-types";

import "../../../node_modules/leaflet/dist/leaflet.css";

const city = [52.38333, 4.9];

const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});

const zoom = 12;

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this.offers = props.offers;
    this.markers = [];
    this.styles = Object.assign(
        props.styles,
        {height: `100%`}
    );
  }

  setMarkers(offers) {
    offers.forEach((offer) => {
      const offerCords = offer.coords;
      const marker = leaflet.marker(offerCords, {icon});
      this.markers.push(marker);
      marker.addTo(this.map);
    });
  }

  componentDidMount() {
    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    this.map = map;
    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);
    this.setMarkers(this.offers);
  }

  componentDidUpdate() {
    const {offers} = this.props;
    this.markers.forEach((marker) => marker.remove());
    this.setMarkers(offers);
  }

  componentWillUnmount() {
    this.map.remove();
    this.map = null;
  }

  render() {
    return (
      <div id="map" style={this.styles}></div>
    );
  }
}

Map.propTypes = {
  offers: propTypes.array.isRequired,
  styles: propTypes.object.isRequired
};

export default Map;
