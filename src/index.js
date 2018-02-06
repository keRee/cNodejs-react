import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, browserHistory} from 'react-router'
// import { Router, IndexRoute, Link , hashHistory, browserHistory} from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import myStore from './model/reducers/index'
import routeConfig from './router/router'
const middleware = [ thunk ]
const store = createStore(
  myStore,
  applyMiddleware(...middleware)
);
ReactDOM.render(
  <Provider store={store}>
    <Router routes={routeConfig} history={browserHistory}/>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
