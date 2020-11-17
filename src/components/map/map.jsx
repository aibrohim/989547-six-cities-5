import React from "react";
import leaflet from "leaflet";
import propTypes from "prop-types";
import {connect} from "react-redux";

import "../../../node_modules/leaflet/dist/leaflet.css";

const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});

const activeIcon = leaflet.icon({
  iconUrl: `img/pin-active.svg`,
  iconSize: [27, 39]
});

const toCordsArray = (location) => {
  return Array.from(Object.values(location));
};

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
      const offerCords = toCordsArray(offer.location);
      const marker = leaflet.marker(offerCords, {icon});
      this.markers.push(marker);
      marker.addTo(this.map);
    });
  }

  componentDidMount() {
    const city = toCordsArray(this.offers[0].location);
    const zoom = this.offers[0].location.zoom;
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
    const {offers, hoveredOffer} = this.props;
    this.markers.forEach((marker) => marker.remove());
    this.setMarkers(offers);

    if (this.markers) {
      this.markers.forEach((marker) => marker.remove());
    }

    this.markers = offers.reduce((items, {id, location}) => {
      const coords = toCordsArray(location);
      const pin = leaflet.marker(coords, {
        icon: id === hoveredOffer.id ? activeIcon : icon
      });

      items.push(pin);

      return items;
    }, []);

    this.markers.forEach((marker) => marker.addTo(this.map));
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
  styles: propTypes.object.isRequired,
  hoveredOffer: propTypes.object
};

const mapStateToProps = ({PROCESS}) => ({
  hoveredOffer: PROCESS.hoveredOffer
});

export {Map};
export default connect(mapStateToProps)(Map);
