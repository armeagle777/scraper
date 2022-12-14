import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloProvider } from "@apollo/client"
import { client } from './utils/apolloClient';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </Router>
    </ApolloProvider>
  </React.StrictMode>
);

