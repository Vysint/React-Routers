import { Route } from "react-router-dom";
import { Fragment } from "react";
import Welcome from "./pages/Welcome";
import Products from './pages/Products';
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <Fragment>
      <MainHeader/>
      <main>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products/>
      </Route>
      </main>
    </Fragment>
  );
}

export default App;
