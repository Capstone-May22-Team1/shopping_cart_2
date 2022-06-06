import React from "react";
import {useState, useEffect} from "react";
import ShoppingCart from "./ShoppingCart";
import Products from "./Products";
import AddProduct from "./AddProduct";
let data = [
  {
    id: 1,
    title: "Amazon Kindle E-reader",
    quantity: 5,
    price: 79.99,
  },
  {
    id: 2,
    title: "Apple 10.5-Inch iPad Pro",
    quantity: 3,
    price: 649.99,
  },
  {
    id: 3,
    title: "Yamaha Portable Keyboard",
    quantity: 2,
    price: 155.99,
  },
  {
    id: 4,
    title: "Tinker, Tailor, Soldier, Spy - A John le Carre Novel",
    quantity: 12,
    price: 13.74,
  },
];


const App = () => {
  let [ products, setProducts ] = useState([])
  let [ shoppingCart, setShoppingCart ] = useState([])
  let [ toggleAdd, setToggleAdd ] = useState(false)

  useEffect(() => {
    setProducts(data)
  }, [])


  return (
    <div id="app">
      <ShoppingCart/>
      <main>
        <Products products={products} />
        {(toggleAdd) 
        ? <AddProduct product={products} setProducts={setProducts} setToggleAdd={setToggleAdd}/>
        : <p><a class="button add-product-button" onClick={() => {setToggleAdd(true)}}>Add A Product</a></p>
      }
      </main>
    </div>
  );
};

export default App;
