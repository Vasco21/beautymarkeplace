import React, { useState, useEffect }from "react";
import Header  from "./components/Navbars/Header";
import HomePage  from "./components/Home/Slider";
import Products  from "./components/Product/Produts";
import Checkout  from "./components/Checkout/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import "./App.css";
import "./index.css";
import { commerce } from "./Lib/commerces"

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCarts] = useState({})

  const fetchProducts = async () =>{
    const { data } = await commerce.products.list();
    setProducts(data);
  }
  const handleAddToCart = async (productId, quantity) =>{
    const { cart } = await commerce.cart.add(productId, quantity);

    setCarts(cart);
  } 
  const handleUpdateCartQty = async (productId, quantity) =>{
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCarts(cart);
  }

  const handleRemoveFromCart = async (productId) =>{
    const { cart } = await commerce.cart.remove(productId)

    setCarts(cart);
  }

  const handleEmptyCart = async () =>{
    const { cart } = await commerce.cart.empty();

    setCarts(cart);
  }

  const fetchCart = async ()=>{
    setCarts(await commerce.cart.retrieve());
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  console.log(cart)

  return (
    <Router>
    <div className="App">
      <div className="gradient__bg">
        <Header totalItems={cart.total_items}/>
      </div>
        <HomePage/>
      <Switch>
        <Route exact path="/">
          <Products products={products} onAddToCart={handleAddToCart} />
        </Route>

        <Route exact path="/cart">
          <Cart cart={cart} 
          handleUpdateCartQty={handleUpdateCartQty}
          handleRemoveFromCart={handleRemoveFromCart}
          handleEmptyCart={handleEmptyCart}
          />
          </Route>
          <Route exact path="/checkout"> 
            <Checkout/>
          </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
