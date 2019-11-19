import React, { Component } from 'react';
import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import Home from '../containers/Home/Home'
import Post from '../containers/Post/Post'
const appRouter= () => (
    <Switch>
        <Route exact path="/"  component={Home} />
        <Route path="/messages" component={Post}  />
        <Route path="/about" render={() => <h2>About</h2>} />
        <Redirect to="/" />
    </Switch>
);

export default appRouter