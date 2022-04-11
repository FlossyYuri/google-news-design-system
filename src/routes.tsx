import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import News from './pages/News';

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <main className='h-screen lg:pl-64 pl-0 pt-16 w-full'>
        <Switch>
          <Route exact path='/:search'>
            <News />
          </Route>
          <Redirect to='/technologia' />
        </Switch>
      </main>
    </BrowserRouter>
  );
}
export default Routes;
