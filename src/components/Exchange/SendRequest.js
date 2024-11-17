import React, { useState } from 'react';
import apiClient from '../../api/apiClient';

function SendRequest({ bookId, receiverId }) {
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [exchangeDuration, setExchangeDuration] = useState('');

  const handleSendRequest = async () => {
    try {
      await apiClient.post('/exchange', {
        receiver: receiverId,
        book_id: bookId,
        terms: { deliveryMethod, exchangeDuration },
      });
      alert('Exchange request sent!');
    } catch (error) {
      alert('Error sending exchange request.');
    }
  };

  return (
    <div>
      <h3>Send Exchange Request</h3>
      <input
        type="text"
        placeholder="Delivery Method"
        value={deliveryMethod}
        onChange={(e) => setDeliveryMethod(e.target.value)}
      />
      <input
        type="text"
        placeholder="Exchange Duration"
        value={exchangeDuration}
        onChange={(e) => setExchangeDuration(e.target.value)}
      />
      <button onClick={handleSendRequest}>Send Request</button>
    </div>
  );
}

export default SendRequest;
