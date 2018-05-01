import React from 'react';
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Provider} from 'react-redux';


// if you wanted to pass something into the store from the server or a file you could pass that into the argument of configureStore but we arent doing any such thing here so might as well leave it at this
const store = configureStore();
render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('root')
)