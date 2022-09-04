import React from 'react';
import FirebaseProvider from './firebase/firebase'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FirebaseProvider>
        <App />
    </FirebaseProvider>
);
