import { useEffect } from "react";
import { useDispatch, Provider } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { FetchApiCoffees } from "./services/FetchApiCoffees";

import CoffeeList from "./components/CoffeeList";
import NewCoffee from "./components/NewCoffee";
import EditCoffee from "./components/EditCoffee";
import Home from "./components/Home"
import store from "./store/store";

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
   <Provider store={store}> 
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
    </Provider>
  );
}

export default App;