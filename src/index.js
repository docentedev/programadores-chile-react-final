import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Home from './containers/home/Home'
import ProductDetail from './containers/product-detail/ProductDetail'
import ProductCreate from './containers/product-create/ProductCreate'
import NotFound from './containers/not-found/NotFound'
import reportWebVitals from './reportWebVitals'
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path={['/', '/products']} exact>
            <Home />
          </Route>
          <Route path={'/products/detail/:id'}>
            <ProductDetail />
          </Route>
          <Route path={'/products/create'}>
            <ProductCreate />
          </Route>
          <Route path={'*'}>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
