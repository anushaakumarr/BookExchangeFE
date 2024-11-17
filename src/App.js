import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import BookList from './components/Books/BookList';
import SearchBar from './components/Search/SearchBar';
import SearchResults from './components/Search/SearchResults';
import ProtectedRoute from './components/ProtectedRoute';
import SendRequest from './components/Exchange/SendRequest';
import UpdateRequest from './components/Exchange/UpdateRequest';
import TransactionHistory from './components/Exchange/TransactionHistory';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/books"
          element={
            <ProtectedRoute>
              <BookList />
            </ProtectedRoute>
          }
        />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/search-results" element={<SearchResults />} />
        {/* Exchange Routes */}
        <Route
          path="/exchange/send"
          element={
            <ProtectedRoute>
              <SendRequest />
            </ProtectedRoute>
          }
        />
        <Route
          path="/exchange/update"
          element={
            <ProtectedRoute>
              <UpdateRequest />
            </ProtectedRoute>
          }
        />
        <Route
          path="/exchange/history"
          element={
            <ProtectedRoute>
              <TransactionHistory />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
