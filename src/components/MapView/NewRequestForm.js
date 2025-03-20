// src/components/MapView/NewRequestForm.js
import React, { useState } from 'react';

const NewRequestForm = ({ onClose }) => {
	const [formData, setFormData] = useState({
		pickUp: '',
		dropOff: '',
		description: '',
		image: null,
	});

	const handleSubmit = () => {
		// Post formData to database here
		console.log('New Request Submitted', formData);
		onClose();
	};

	return (
		<div className="modal">
			<h2>New Fetchd Request</h2>
			<form>
				<input
					type="text"
					placeholder="Pick-up Location"
					value={formData.pickUp}
					onChange={(e) => setFormData({ ...formData, pickUp: e.target.value })}
				/>
				<input
					type="text"
					placeholder="Drop-off Location"
					value={formData.dropOff}
					onChange={(e) => setFormData({ ...formData, dropOff: e.target.value })}
				/>
				<textarea
					placeholder="Description"
					value={formData.description}
					onChange={(e) => setFormData({ ...formData, description: e.target.value })}
				/>
				<input type="file" onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })} />
				<button type="button" onClick={handleSubmit}>
					Submit
				</button>
				<button type="button" onClick={onClose}>
					Cancel
				</button>
			</form>
		</div>
	);
};

export default NewRequestForm;