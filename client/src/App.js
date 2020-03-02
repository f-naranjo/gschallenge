import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProductList from './components/ProductList.js'
import ProductDetail from './components/ProductDetail';
import NotFoundPage from './components/NotFoundPage';
import NavBar from './components/NavBar';

function App() {

  return (
    <div className="App">
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={ProductList}/>
          <Route exact path="/:name/detail" component={ProductDetail}/>
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
    </div>
  );
}

export default App;
