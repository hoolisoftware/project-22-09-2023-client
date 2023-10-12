import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import AuthProvider from './provider/authProvider.tsx'
import QueryProvider from './provider/queryProvider.tsx'
import { store } from './app/store'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </QueryProvider>
    </AuthProvider>
  </React.StrictMode>,
)