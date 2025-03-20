import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../styles/HomePage.css";

// Define Custom Marker Icons
const pickupIcon = L.icon({
	iconUrl: "https://cdn-icons-png.flaticon.com/512/1237/1237946.png",
	iconSize: [15, 45],
	iconAnchor: [12.5, 40],
});

const deliveryIcon = L.icon({
	iconUrl: "https://cdn-icons-png.flaticon.com/512/1237/1237949.png",
	iconSize: [25, 40],
	iconAnchor: [12.5, 40],
});

const HomePage = () => {
	const [itemDescription, setItemDescription] = useState("");
	const [itemImage, setItemImage] = useState("");
	const [pickupLocation, setPickupLocation] = useState([46.9481, 7.4474]); // Default: Bern
	const [deliveryLocation, setDeliveryLocation] = useState([47.4245, 9.3767]); // Default: St. Gallen

	const handleFormSubmit = (e) => {
		e.preventDefault();
		alert("Fetch request submitted!");
	};

	return (
		<div>
			{/* Welcome Section */}
			<div className="welcome-section">
				<h1>Welcome to Fetch Easy!</h1>
				<p>
					Effortlessly schedule and track item deliveries with real-time locations. Whether
					it's picking up from one place or delivering to multiple locations, Fetch Easy
					simplifies your logistics.
				</p>
			</div>

			{/* Homepage Content */}
			<div className="homepage-container">
				{/* Left Section: Form */}
				<div className="form-container">
					<h2>Item Fetch Request</h2>
					<form onSubmit={handleFormSubmit}>
						<label>
							Item Description:
							<input
								type="text"
								value={itemDescription}
								onChange={(e) => setItemDescription(e.target.value)}
								placeholder="Enter item description"
								required
							/>
						</label>
						<label>
							Item Image URL:
							<input
								type="url"
								value={itemImage}
								onChange={(e) => setItemImage(e.target.value)}
								placeholder="Paste image URL"
								required
							/>
						</label>
						<label>
							Pickup Location (Lat, Lng):
							<input
								type="text"
								placeholder="e.g., 46.9481, 7.4474"
								onChange={(e) =>
									setPickupLocation(e.target.value.split(",").map((val) => parseFloat(val)))
								}
								required
							/>
						</label>
						<label>
							Delivery Location (Lat, Lng):
							<input
								type="text"
								placeholder="e.g., 47.4245, 9.3767"
								onChange={(e) =>
									setDeliveryLocation(e.target.value.split(",").map((val) => parseFloat(val)))
								}
								required
							/>
						</label>
						<button type="submit" className="fetch-button">
							Request Fetch
						</button>
					</form>
				</div>

				{/* Right Section: Map */}
				<div className="map-container">
					<h2>Map</h2>
					<MapContainer center={pickupLocation} zoom={5} scrollWheelZoom={false} style={{ height: "400px", width: "100%" }}>
						<TileLayer
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						/>
						{/* Pickup and Delivery Markers */}
						<Marker position={pickupLocation} icon={pickupIcon}>
							<Popup>Pickup Location</Popup>
						</Marker>
						<Marker position={deliveryLocation} icon={deliveryIcon}>
							<Popup>Delivery Location</Popup>
						</Marker>
						{/* Line Connecting Locations */}
						<Polyline positions={[pickupLocation, deliveryLocation]} color="blue" />
					</MapContainer>

					{/* Dynamically Loaded Item Image */}
					{itemImage && (
						<div className="item-image-container">
							<h3>Item Preview</h3>
							<img src={itemImage} alt="Item" className="item-image" />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default HomePage;