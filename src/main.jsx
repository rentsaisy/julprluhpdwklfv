import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ClerkProvider } from "@clerk/clerk-react";
import App from './App.jsx'
import { AppContextProvider } from './context/AppContext.jsx'
import {BrowserRouter} from 'react-router-dom'

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ClerkProvider publishableKey={clerkPubKey} afterSignOutUrl='/'>
        <BrowserRouter>
          <AppContextProvider>
            <App />
          </AppContextProvider>
        </BrowserRouter>
      </ClerkProvider>
  </React.StrictMode>
);
