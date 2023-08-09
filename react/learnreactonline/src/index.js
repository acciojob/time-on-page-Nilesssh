import React, {useState, useEffect} from "react";
import {createRoot} from "react-dom/client";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js"

function App() {
    // TODO: replace with your access token
    mapboxgl.accessToken = "pk.eyJ1IjoidnNscWRzaGNiaWlnc291eGtkIiwiYSI6ImNsM3dyZDhvaTBucjkzbGxkM2syYTZpYW4ifQ.UyVIpJDgWM2-ZIufnxMBZQ";

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/dark-v10',
            center:  [ 12.567898, 55.67583 ],
            zoom: 9
        });
    },[]);

    const stores = {
        central: [12.567898, 55.67583],
        norrebro: [12.553806, 55.699299],
        airport: [12.650784, 55.618042]
    }


    return <>
        <div className="map-overlay">
            <h3>Choose store: </h3>
            <select>
                <option value="central">Central station</option>
                <option value="norrebro">Norrebro street</option>
                <option value="airport">CPH Airport</option>
            </select>
        </div>
        <div id="map"></div>
    </>;
}

// Do NOT modify the code below
// Special map loading setup
// specific to react-tutorial.app
const script = document.createElement("script");
script.src = "https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.js";
script.onload = () => {
    createRoot(document.querySelector("#react-root")).render(<React.StrictMode><App /></React.StrictMode>);
}

document.body.appendChild(script)
