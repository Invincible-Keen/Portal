import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/font-awesome/css/font-awesome.css'
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import registerServiceWorker from './registerServiceWorker';
import { Route, HashRouter, Switch } from 'react-router-dom';

// ReactDOM.render(<HomePage />, document.getElementById('root'));

//Hash history
ReactDOM.render((
  <HashRouter>
  	<Switch>
    	<Route exact path="/" component={HomePage}/>
    	<Route path="/News" component={NewsPage}/>
    </Switch>
  </HashRouter>
), document.getElementById('root'));

registerServiceWorker();
