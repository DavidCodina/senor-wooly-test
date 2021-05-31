import React                       from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { BreedsPage }              from '../pages/BreedsPage';
import { AboutPage }               from '../pages/AboutPage';
import NotFoundPage                from '../pages/NotFoundPage';


const Router = (props) => {
  const { value } = props;

  
  return (
    <Switch>  
      <Route exact path="/">
        <Redirect to="/breeds" />
      </Route>


      <Route 
        exact path="/breeds"
        render={(props) => {
          return <BreedsPage {...props} value={value} />;
        }}
      />

      <Route 
        exact path="/about"
        render={(props) => {
          return <AboutPage {...props} value={value} />;
        }}
      />

      <Route component={NotFoundPage} />
    </Switch>
  )
};


export default Router;

