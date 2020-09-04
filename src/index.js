import React from 'react';
import ReactDOM from 'react-dom'
import {createStore} from "redux";
import reducer from "./reducer";
import './base.css'
import StoreContext from "./store-context";

import App from './components/app';

const store = createStore(reducer);

const update = () => {
    ReactDOM.render(
        <StoreContext.Provider value={store}>
            <App />
        </StoreContext.Provider>,
        document.getElementById('root')
    );
};

update();
store.subscribe(update);


