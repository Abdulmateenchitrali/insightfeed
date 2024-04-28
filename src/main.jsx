import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { Provider } from 'react-redux';
import { getPersistor } from '@rematch/persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { ToastContainer } from "react-toastify";

import store from './store/store';
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";


import Routers from "./router/router";

const persistor = getPersistor();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routers />
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar pauseOnHover />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
