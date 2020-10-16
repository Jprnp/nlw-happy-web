import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logoNoText from '../images/logo-no-text.svg';
import '../styles/pages/orphanages-map.css';


function OrphanagesMap() {
    return (
        <div id="page-map">
            <div className="content-wrapper">
                <aside>                
                    <div id="sidebar">
                        <div className="sidebar-wrapper">
                            <header>
                                <img src={logoNoText} alt ="Happy logo" />
        
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
            </div>

            </div>

            <Link to="" className="create-orphanage">
                <FiPlus size={26}></FiPlus>
            </Link>
        </div>
    );
}

export default OrphanagesMap;