// src/components/MapView/MapView.js
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../../styles/MapView111.css";
import NewRequestForm from "./NewRequestForm";
import RequestDetailsModal from "./RequestDetailsModal";

const MapView = () => {
	const [showForm, setShowForm] = useState(false);
	const [showDetails, setShowDetails] = useState(false);

	// Example data for map markers
	const requests = [
		{ id: 1, name: "Request 1", lat: 51.505, lng: -0.09, details: "Details for request 1" },
		{ id: 2, name: "Request 2", lat: 51.51, lng: -0.1, details: "Details for request 2" },
	];

	return (
		<div className="map-view">
			<h1>Fetchd Map View</h1>
			<div className="map-buttons">
				<button onClick={() => setShowDetails(true)}>View details of preloaded request</button>
				<button onClick={() => setShowForm(true)}>Make New Fetchd Request</button>
				<button>Provide a delivery</button>
			</div>
			<MapContainer center={[51.505, -0.09]} zoom={13} className="map">
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				/>
				{requests.map((request) => (
					<Marker key={request.id} position={[request.lat, request.lng]}>
						<Popup>
							<h3>{request.name}</h3>
							<p>{request.details}</p>
						</Popup>
					</Marker>
				))}
			</MapContainer>

			{/* Modals */}
			{showDetails && <RequestDetailsModal onClose={() => setShowDetails(false)} />}
			{showForm && <NewRequestForm onClose={() => setShowForm(false)} />}
		</div>
	);
};

export default MapView;