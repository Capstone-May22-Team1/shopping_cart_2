import React from "react";
import {useState, useEffect} from "react";
import ShoppingCart from "./ShoppingCart";
import Products from "./Products";
import AddProduct from "./AddProduct";
import axios from 'axios'


const App = () => {
  let [ toggleAdd, setToggleAdd ] = useState(false)



  return (
    <div id="app">
      <ShoppingCart />
      <main>
        <Products />
        {(toggleAdd) 
        ? <AddProduct setToggleAdd={setToggleAdd}/>
        : <p><a class="button add-product-button" onClick={() => {setToggleAdd(true)}}>Add A Product</a></p>
      }
      </main>
    </div>
  );
};

export default App;
