import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './stylesheet/styles.css';
import { Home } from './components/Home';
import { AddCatalogueItem } from './components/AddCatalogueItem';
import { EditCatalogueItem } from './components/EditCatalogueItem';


import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add" component={AddCatalogueItem} exact />
        <Route path="/edit/:sku" component={EditCatalogueItem} exact />
      </Switch>
    </GlobalProvider>
  );
}

export default App;
