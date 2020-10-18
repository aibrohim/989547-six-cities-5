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
  }

  componentDidMount() {
    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    this.offers.forEach((offer) => {
      const offerCords = offer.coords;
      leaflet
        .marker(offerCords, {icon})
        .addTo(map);
    });
  }

  render() {
    return (
      <section className="cities__map map">
        <div id="map" ref={this.map} style={{width: `100%`, height: `100%`}}></div>
      </section>
    );
  }
}

Map.propTypes = {
  offers: propTypes.array.isRequired
};

export default Map;
