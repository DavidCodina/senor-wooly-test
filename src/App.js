
import React, { useContext } from 'react';
import { Context }           from './Context';
import { HashRouter }        from 'react-router-dom'; // HashRouter generally works better for GitHub, but normally use BrowserRouter.
import Router                from './components/navigation/Router';
import Navigation            from './components/navigation/Navigation';

import './scss/bootstrap/bootstrap-icons.css';
import './scss/bootstrap/custom-bootstrap.scss';
import './scss/App.scss';


function App(){  
  const value = useContext(Context);
  
  return (
    <HashRouter>
    <header id="primary-header">
      <Navigation />
    </header>

    <main className="pb-5">
      <div className="container-fluid pt-3 px-md-5">
        <Router value={value} />
      </div>        
    </main>
    </HashRouter>
  );
}


export default App;

