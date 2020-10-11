import React from 'react';
import './App.css';
import Home from './components/HomePage/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AppointmentPage from './components/AppointmentPage/AppointmentPage/AppointmentPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/appointment">
          <AppointmentPage></AppointmentPage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
