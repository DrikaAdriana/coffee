
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CoffeeList from './components/coffee/CoffeList';
import CoffeeDetails from './components/coffee/CoffeeDetails';
import CoffeeForm from './components/coffee/CoffeeForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={CoffeeList} />
          <Route exact path="/coffees/:id" component={CoffeeDetails} />
          <Route exact path="/add-coffee" component={CoffeeForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;