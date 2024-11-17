import React, { useEffect, useState } from 'react';
import apiClient from '../../api/apiClient';

function TransactionHistory() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await apiClient.get('/exchange/transactions');
        setTransactions(response.data);
      } catch (error) {
        alert('Error fetching transaction history.');
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div>
      <h3>Transaction History</h3>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.exchange_id}>
            {transaction.status} - Book: {transaction.book_id.title} - With: {transaction.receiver.name || transaction.sender.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionHistory;
