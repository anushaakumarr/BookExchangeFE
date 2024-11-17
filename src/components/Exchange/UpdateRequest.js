import React, { useState } from 'react';
import apiClient from '../../api/apiClient';

function UpdateRequest({ requestId }) {
  const [status, setStatus] = useState('');
  const [terms, setTerms] = useState({ deliveryMethod: '', exchangeDuration: '' });

  const handleUpdateRequest = async () => {
    try {
      await apiClient.put(`/exchange/${requestId}`, { status, terms });
      alert('Exchange request updated!');
    } catch (error) {
      alert('Error updating request.');
    }
  };

  return (
    <div>
      <h3>Update Exchange Request</h3>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="pending">Pending</option>
        <option value="accepted">Accepted</option>
        <option value="rejected">Rejected</option>
        <option value="modified">Modified</option>
      </select>
      <input
        type="text"
        placeholder="Delivery Method"
        value={terms.deliveryMethod}
        onChange={(e) => setTerms({ ...terms, deliveryMethod: e.target.value })}
      />
      <input
        type="text"
        placeholder="Exchange Duration"
        value={terms.exchangeDuration}
        onChange={(e) => setTerms({ ...terms, exchangeDuration: e.target.value })}
      />
      <button onClick={handleUpdateRequest}>Update Request</button>
    </div>
  );
}

export default UpdateRequest;
