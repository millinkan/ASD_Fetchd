import React, { useState } from 'react';
import OfferDeliveryForm from './OfferDeliveryForm';
//import RequestList from './RequestList';

const ProviderPage = ({ completedRequests, updatedRequests }) => {
	const [showOfferForm, setShowOfferForm] = useState(false);
	const [selectedRequest, setSelectedRequest] = useState(null);

	return (
		<div>
			<h1>Provider Page</h1>
			<RequestList
				completedRequests={completedRequests}
				updatedRequests={updatedRequests}
				onSelectRequest={(request) => {
					setSelectedRequest(request);
					setShowOfferForm(true);
				}}
			/>
			{showOfferForm && (
				<OfferDeliveryForm
					request={selectedRequest}
					onClose={() => setShowOfferForm(false)}
				/>
			)}
		</div>
	);
};

export default ProviderPage;