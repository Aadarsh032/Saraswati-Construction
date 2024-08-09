import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import pinkmarker from '../../assets/pink-location.png'

const Marker = () => <div id="mapMarker" >
     <svg xmlns="http://www.w3.org/2000/svg"
         style={{margin: 'auto', display: 'block', shapeRendering: 'auto',}} width="200px"
         height="150px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="50" cy="50" r="0" fill="none" stroke="#DF7F8E" strokeWidth="2">
            <animate attributeName="r" repeatCount="indefinite" dur="1.4925373134328357s" values="0;40" keyTimes="0;1"
                     keySplines="0 0.2 0.8 1" calcMode="spline" begin="0s"/>
            <animate attributeName="opacity" repeatCount="indefinite" dur="1.4925373134328357s" values="1;0"
                     keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="0s"/>
        </circle>
        <circle cx="50" cy="50" r="0" fill="none" stroke="#DF7F8E" strokeWidth="2">
            <animate attributeName="r" repeatCount="indefinite" dur="1.4925373134328357s" values="0;40" keyTimes="0;1"
                     keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.7462686567164178s"/>
            <animate attributeName="opacity" repeatCount="indefinite" dur="1.4925373134328357s" values="1;0"
                     keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.7462686567164178s"/>
        </circle>
        <circle cx="50" cy="50" r="4" fill="#DF7F8E"></circle>
    </svg>
</div>;

class Map extends Component {
    static defaultProps = {
        center: {
          lat: 23.3478,
          lng: 85.2690
        },  
        zoom: 14
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{height: '100%', width: '100%', minHeight: "16rem"}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: "AIzaSyCTg9ICaw-Cv4VZYP7RW5ihx4y4c7n2wpk"}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    options={
                        {
                            styles: [
                                {
                                  "elementType": "geometry",
                                  "stylers": [
                                    {
                                      "color": "#1d2c4d"
                                    }
                                  ]
                                },
                                {
                                  "elementType": "labels.text.fill",
                                  "stylers": [
                                    {
                                      "color": "#8ec3b9"
                                    }
                                  ]
                                },
                                {
                                  "elementType": "labels.text.stroke",
                                  "stylers": [
                                    {
                                      "color": "#1a3646"
                                    }
                                  ]
                                },
                                {
                                  "featureType": "administrative.country",
                                  "elementType": "geometry.stroke",
                                  "stylers": [
                                    {
                                      "color": "#4b6878"
                                    }
                                  ]
                                },
                                {
                                  "featureType": "administrative.land_parcel",
                                  "elementType": "labels.text.fill",
                                  "stylers": [
                                    {
                                      "color": "#64779e"
                                    }
                                  ]
                                },
                                {
                                  "featureType": "administrative.province",
                                  "elementType": "geometry.stroke",
                                  "stylers": [
                                    {
                                      "color": "#4b6878"
                                    }
                                  ]
                                },
                                {
                                  "featureType": "landscape.man_made",
                                  "elementType": "geometry.stroke",
                                  "stylers": [
                                    {
                                      "color": "#334e87"
                                    }
                                  ]
                                },
                                {
                                  "featureType": "landscape.natural",
                                  "elementType": "geometry",
                                  "stylers": [
                                    {
                                      "color": "#023e58"
                                    }
                                  ]
                                },
                                {
                                  "featureType": "poi",
                                  "elementType": "geometry",
                                  "stylers": [
                                    {
                                      "color": "#283d6a"
                                    }
                                  ]
                                },
                                {
                                  "featureType": "poi",
                                  "elementType": "labels.text.fill",
                                  "stylers": [
                                    {
                                      "color": "#6f9ba5"
                                    }
                                  ]
                                },
                                {
                                  "featureType": "poi",
                                  "elementType": "labels.text.stroke",
                                  "stylers": [
                                    {
                                      "color": "#1d2c4d"
                                    }
                                  ]
                                },
                                {
                                  "featureType": "poi.park",
                                  "elementType": "geometry.fill",
                                  "stylers": [
                                    {
                                      "color": "#023e58"
                                    }
                                  ]
                                },
                                {
                                  "featureType": "poi.park",
                                  "elementType": "labels.text.fill",
                                  "stylers": [
                                    {
                                      "color": "#3C7680"
                                    }
                                  ]
                                },
                                {
                                  "featureType": "road",
                                  "elementType": "geometry",
                                  "stylers": [
                                    {
                                      "color": "#304a7d"
                                    }
                                  ]
                                },
                                {
                                  "featureType": "road",
                                  "elementType": "labels.text.fill",
                                  "stylers": [
                                    {
                                      "color": "#98a5be"
                                    }
                                  ]
                                },
                                {
                                  "featureType": "road",
                                  "elementType": "labels.text.stroke",
                                  "stylers": [
                                    {
                                      "color": "#1d2c4d"
                                    }
                                  ]
                                },
                                {
                                  "featureType": "road.highway",
                                  "elementType": "geometry",
                                  "stylers": [
                                    {
                                      "color": "#2c6675"
                                    }
                                  ]
                                },
                                {
                                  "featureType": "road.highway",
                                  "elementType": "geometry.stroke",
                                  "stylers": [
                                    {
                                      "color": "#255763"
                                    }
                                  ]
                                },
                                {
                                  "featureType": "road.highway",
                                  "elementType": "labels.text.fill",
                                  "stylers": [
                                    {
                                      "color": "#b0d5ce"
                                    }
                                  ]
                                },
                                {
                                  "featureType": "road.highway",
                                  "elementType": "labels.text.stroke",
                                  "stylers": [
                                    {
                                      "color": "#023e58"
                                    }
                                  ]
                                },
                                {
                                  "featureType": "transit",
                                  "elementType": "labels.text.fill",
                                  "stylers": [
                                    {
                                      "color": "#98a5be"
                                    }
                                  ]
                                },
                                {
                                  "featureType": "transit",
                                  "elementType": "labels.text.stroke",
                                  "stylers": [
                                    {
                                      "color": "#1d2c4d"
                                    }
                                  ]
                                },
                                {
                                  "featureType": "transit.line",
                                  "elementType": "geometry.fill",
                                  "stylers": [
                                    {
                                      "color": "#283d6a"
                                    }
                                  ]
                                },
                                {
                                  "featureType": "transit.station",
                                  "elementType": "geometry",
                                  "stylers": [
                                    {
                                      "color": "#3a4762"
                                    }
                                  ]
                                },
                                {
                                  "featureType": "water",
                                  "elementType": "geometry",
                                  "stylers": [
                                    {
                                      "color": "#0e1626"
                                    }
                                  ]
                                },
                                {
                                  "featureType": "water",
                                  "elementType": "labels.text.fill",
                                  "stylers": [
                                    {
                                      "color": "#4e6d70"
                                    }
                                  ]
                                }
                              ]
                            
                        }
                    }
                >
                    <Marker 
                        lat={23.3478}
                        lng={85.2690}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;

