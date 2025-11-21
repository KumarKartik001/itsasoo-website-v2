"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix marker icon path issue
delete (L.Icon.Default as any).prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: "/marker-icon-2x.png",
    iconUrl: "/marker-icon.png",
    shadowUrl: "/marker-shadow.png",
});

const keyMarkets = [
    { name: "USA", lat: 39.8283, lng: -98.5795 },
    { name: "Canada", lat: 56.1304, lng: -106.3468 },
    { name: "UK", lat: 55.3781, lng: -3.436 },
    { name: "New Zealand", lat: -40.9006, lng: 174.886 },
    { name: "Australia", lat: -25.2744, lng: 133.7751 },
    { name: "India", lat: 20.5937, lng: 78.9629 },
];

export default function LeafletMap() {
    return (
        <MapContainer
            center={[20, 0]}
            zoom={2}
            scrollWheelZoom={false}
            className="w-full h-full"
        >
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />

            {keyMarkets.map((market) => (
                <Marker key={market.name} position={[market.lat, market.lng]}>
                    <Tooltip permanent>{market.name} - We serve here!</Tooltip>
                </Marker>
            ))}
        </MapContainer>
    );
}
