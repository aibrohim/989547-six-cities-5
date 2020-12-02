import React from "react";
import leaflet from "leaflet";
import propTypes from "prop-types";
import {connect} from "react-redux";
import "leaflet/dist/leaflet.css";
import {MapTypes} from "../../consts";

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

const BIG_MAP_ZOOM = 13;

class CityMap extends React.PureComponent {
  constructor(props) {
    super(props);

    this.offers = props.offers;
    this.markers = [];
    this.styles = Object.assign(
        props.styles,
        {height: `100%`}
    );
    this.setMarkersWithActive = this.setMarkersWithActive.bind(this);
  }

  setMarkersWithActive(offers, activeOffer) {
    this.markers.forEach((marker) => marker.remove());
    this.setMarkers(offers);

    if (this.markers) {
      this.markers.forEach((marker) => marker.remove());
    }

    this.markers = offers.reduce((items, {id, location}) => {
      const coords = toCordsArray(location);
      const pin = leaflet.marker(coords, {
        icon: id === activeOffer.id ? activeIcon : icon
      });

      items.push(pin);

      return items;
    }, []);

    this.markers.forEach((marker) => marker.addTo(this.map));
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
    let city = toCordsArray(this.offers[0].location);
    let zoom = this.offers[0].location.zoom;
    if (this.props.type === MapTypes.BIG) {
      zoom = BIG_MAP_ZOOM;
      city = toCordsArray(this.props.activeOffer.location);
    }
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

    if (this.props.type === MapTypes.BIG) {
      const {offers, activeOffer} = this.props;
      offers.push(activeOffer);
      this.setMarkersWithActive(offers, activeOffer);
    }
  }

  componentDidUpdate() {
    const {hoveredOffer, activeOffer, type} = this.props;
    const offers = this.props.offers.slice();
    if (type === MapTypes.BIG) {
      this.map.setView(toCordsArray(activeOffer.location), BIG_MAP_ZOOM);
    } else {
      this.map.flyTo(toCordsArray(offers[0].location), offers[0].location.zoom);
    }
    if (hoveredOffer.location) {
      const hoveredOfferIndex = offers.findIndex((offer) => offer.id === hoveredOffer.id);

      if ((hoveredOfferIndex < 0)) {
        this.map.flyTo(toCordsArray(offers[0].location), offers[0].location.zoom);
      } else {
        this.map.flyTo(toCordsArray(offers[hoveredOfferIndex].location), offers[hoveredOfferIndex].location.zoom);
      }
    }

    if (type === MapTypes.BIG) {
      offers.push(activeOffer);
    }
    this.setMarkersWithActive(offers, activeOffer ? activeOffer : hoveredOffer);
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

CityMap.propTypes = {
  offers: propTypes.array.isRequired,
  styles: propTypes.object.isRequired,
  hoveredOffer: propTypes.object,
  activeOffer: propTypes.object,
  type: propTypes.string.isRequired
};

const mapStateToProps = ({PROCESS}) => ({
  hoveredOffer: PROCESS.hoveredOffer
});

export {CityMap};
export default connect(mapStateToProps)(CityMap);
