import React from "react";
import { Provider } from "react-redux";
import store from "./container/store";
import OrderPage from "./components/order-page/OrderPage";
import PizzaStages from "./components/pizza-stages/PizzaStages";
import MainSection from "./components/main-section/MainSection";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="app-container d-flex flex-column">
        <h1 className="m-2">Pizza Shop Simulator</h1>
        <OrderPage />
        <div className="flex-container">
          <PizzaStages />
          <MainSection />
        </div>
      </div>
    </Provider>
  );
}

export default App;
