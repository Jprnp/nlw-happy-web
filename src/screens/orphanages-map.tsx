import React, { Component } from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, GoogleApiWrapper, InfoWindow, mapEventHandler } from 'google-maps-react';
import logoNoText from '../images/logo-no-text.svg';
import '../styles/pages/orphanages-map.css';
import { sortAndDeduplicateDiagnostics } from 'typescript';

let infoWindow: google.maps.InfoWindow;

function handleLocationError(
    browserHasGeolocation: boolean,
    infoWindow: google.maps.InfoWindow,
    pos: google.maps.LatLng,
    map: google.maps.Map
) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
}

export class OrphanagesMap extends Component<{ google: any }> {

    loaded: boolean = false;

    initMap(mapProps: any, map: any) {
        let circle: google.maps.Circle;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position: Position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };

                    map.setCenter(pos);
                    circle = new google.maps.Circle({
                        strokeColor: "#99C1FF",
                        fillColor: "#99C1FF",
                        map: map,
                        center: pos,
                        radius: 700
                    });
                },
                () => {
                    handleLocationError(true, infoWindow, map.getCenter(), map);
                }
            );
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter(), map);
        }
    }

    render() {
        return (
            <div id="page-map">
                <div className="content-wrapper">
                    <aside>
                        <div id="sidebar">
                            <div className="sidebar-wrapper">
                                <header>
                                    <img src={logoNoText} alt="Happy logo" />

                                    <h2 id="text-pick">Escolha um orfanato no mapa</h2>
                                    <p id="text-wait">Muitas crianças estão esperando a sua visita :)</p>
                                </header>

                                <footer>
                                    <strong>Goiânia</strong>
                                    <span>Goiás</span>
                                </footer>
                            </div>
                        </div>
                    </aside>

                    <div className="map-wrapper">
                        {/* <div id="map"></div> */}
                        <Map
                            google={google}
                            zoom={16}
                            draggable
                            initialCenter={{
                                lat: -1.2884,
                                lng: 36.8233
                            }}
                            onReady={this.initMap}
                            zoomControl={false}
                            streetViewControl={false}
                        >
                        </Map>
                    </div>

                </div>

                <Link to="" className="create-orphanage">
                    <FiPlus size={26}></FiPlus>
                </Link>
            </div>
        );
    }
}

export default GoogleApiWrapper(
    (props: any) => ({ apiKey: `${ process.env.REACT_APP_MAPS_TOKEN }` })
)(OrphanagesMap);