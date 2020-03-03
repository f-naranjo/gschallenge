import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList.js'
import ProductDetail from './components/ProductDetail';
import NavBar from './components/NavBar';
import ErrorNotFound from './components/ErrorNotFound';

function App() {

  return (
    <div className="App">
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={ProductList}/>
          <Route exact path="/:name/detail" component={ProductDetail}/>
          <Route exact path="/404" component={ErrorNotFound} />
          <Redirect to="/404" />
        </Switch>
    </div>
  );
}

export default App;
