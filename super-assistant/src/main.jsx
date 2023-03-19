import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';



ReactDOM.createRoot(document.getElementById('root')).render(
  
  <AppProvider i18n={enTranslations}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </AppProvider>
)
