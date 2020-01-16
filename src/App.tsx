import React from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../src/components/layout/navbar";
import MyKart from "../src/components/pages/mykart";
import MyProducts from "../src/components/pages/myproducts";
import { MainPage } from "../src/components/pages/main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/core/redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Switch>
                <Route path="/meus-produtos">
                  <MyProducts />
                </Route>
                <Route path="/meu-carrinho">
                  <MyKart />
                </Route>
                <Route path="/">
                  <MainPage />
                </Route>
              </Switch>
            </div>
            <ToastContainer
              autoClose={5000}
              position={toast.POSITION.BOTTOM_RIGHT}
            />
          </div>
        </Router>
      </Provider>
    </>
  );
}

export default App;