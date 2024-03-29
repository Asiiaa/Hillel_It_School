import './index.css';

import App from './App';
import AuthProvider from './modules/common/auth/providers/AuthProvider';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@mui/system';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <AuthProvider>
                    <App />
                </AuthProvider>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);
