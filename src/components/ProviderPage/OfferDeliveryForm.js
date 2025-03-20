import React, { useState } from 'react';

const OfferDeliveryForm = ({ request, onClose, onSubmit }) => {
	const [formData, setFormData] = useState({
		vehicleType: '',
		vehicleImage: null,
		vehicleId: '',
		deliveryDate: '',
		deliveryTime: '',
		additionalInfo: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit({ ...formData, requestId: request.id });
		onClose();
	};

	return (
		<div className="modal">
			<h2>Offer Delivery</h2>
			<form onSubmit={handleSubmit}>
				<select
					required
					value={formData.vehicleType}
					onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
				>
					<option value="">Select Vehicle</option>
					<option value="Pick">Pick</option>
					<option value="Van">Van</option>
				</select>
				<input
					type="text"
					placeholder="Vehicle ID"
					value={formData.vehicleId}
					onChange={(e) => setFormData({ ...formData, vehicleId: e.target.value })}
					required
				/>
				<input
					type="file"
					onChange={(e) => setFormData({ ...formData, vehicleImage: e.target.files[0] })}
				/>
				<input
					type="date"
					value={formData.deliveryDate}
					onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
					required
				/>
				<input
					type="time"
					value={formData.deliveryTime}
					onChange={(e) => setFormData({ ...formData, deliveryTime: e.target.value })}
					required
				/>
				<textarea
					placeholder="Additional Info"
					value={formData.additionalInfo}
					onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
				/>
				<button type="submit">Submit</button>
				<button type="button" onClick={onClose}>
					Cancel
				</button>
			</form>
		</div>
	);
};

export default OfferDeliveryForm;