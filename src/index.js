import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"
import App from '@/App';
import { Provider } from "react-redux"
import store from './store';
import { ThemeProvider } from "styled-components"
import theme from './assets/them';

// 重置css文件
import "normalize.css"
import "@/assets/css/index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
    </Provider>
  </React.StrictMode>
);