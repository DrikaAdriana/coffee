import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "@material-ui/icons";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { FetchApiCoffees } from "./services/FetchApiCoffees";

import CoffeeList from "./components/CoffeeList";
import NewCoffee from "./components/NewCoffee";
import EditCoffee from "./components/EditCoffee";


function App() {
  const dispatch: Dispatch<AnyAction> = useDispatch();

  useEffect(() => {
    async function getCoffees() {
      const coffees = await FetchApiCoffees('all');
      dispatch({ type: "FETCH_COFFEES_SUCCESS", payload: coffees });
    }
    getCoffees();
  }, [dispatch]);

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Coffee App</Typography>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/coffees" exact component={CoffeeList} />
        <Route path="/coffees/new" exact component={NewCoffee} />
        <Route path="/coffees/:id/edit" exact component={EditCoffee} />
      </Switch>
    </Router>
  );
}

export default App;