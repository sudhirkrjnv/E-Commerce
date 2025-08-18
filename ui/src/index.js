import React from "react";
import ReactDOM  from "react-dom";
import './index.css';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import store from "./redux/Store";

let persistor = persistStore(store);

// ReactDOM.render(

//     <BrowserRouter>
//         <App/>  
//     </BrowserRouter>,

// document.getElementById('root')
// );


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
            <App /> 
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);


