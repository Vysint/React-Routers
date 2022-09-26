import { Route } from "react-router-dom";
import { Fragment } from "react";
import Welcome from "./pages/Welcome";
import Products from './pages/Products';

function App() {
  return (
    <Fragment>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products/>
      </Route>
    </Fragment>
  );
}

export default App;
