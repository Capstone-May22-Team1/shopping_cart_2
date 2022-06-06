import React from "react";
import ShoppingCart from "./ShoppingCart";
import Products from "./Products";
import AddProduct from "./AddProduct";

const App = () => {
  return (
    <div id="app">
      <ShoppingCart/>
      <main>
        <Products/>
        <AddProduct/>
      </main>
    </div>
  );
};

export default App;
