import React, { Suspense }  from 'react';
import { Route, Switch } from 'react-router-dom';
import './stylesheet/styles.css';
import { Home } from './components/Home';
import { AddCatalogueItem } from './components/AddCatalogueItem';
import { EditCatalogueItem } from './components/EditCatalogueItem';

import { GlobalProvider } from './context/GlobalState';

import logo from './logo.svg';
import './App.css';

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
    <div>loading...</div>
  </div>
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <GlobalProvider>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/add" component={AddCatalogueItem} exact />
          <Route path="/edit/:sku" component={EditCatalogueItem} exact />
        </Switch>
      </GlobalProvider>
    </Suspense>
  );
}

export default App;
