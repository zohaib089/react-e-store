import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import ItemDetails from './components/ItemDetails';
import PageNotFound from './components/PageNotFound';
import Cart from './components/cart';
import Modal from './components/Modal';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/details" component={ItemDetails} />
          <Route exact path="/cart" component={Cart} />
          <Route component={PageNotFound} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }

}

export default App;
