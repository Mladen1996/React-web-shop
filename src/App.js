import React,{useState,useEffect} from 'react';
//import Products from "./components/Products/Products";
import {commerce} from "./lib/commerce";
import {Products,Cart,Checkout,Category,Header,Pagination} from "./components";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { CssBaseline } from '@material-ui/core';


const App=()=>{
    const[products,setProducts]=useState([]);
    const[cart,setCart]=useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);

    const fetchProducts=async () => {
        const {data}=await commerce.products.list();

        setProducts(data);
    }



    const fetchCart=async () => {
        const cart=await commerce.cart.retrieve();

        setCart(cart);
    }

    const handleAddToCart = async (productId, quantity) => {
        const {cart} = await commerce.cart.add(productId, quantity);
    
        setCart(cart);
      };

    const handleUpdateCartQty=async (productId, quantity) => {
        const {cart} = await commerce.cart.update(productId,{quantity} );
    
        setCart(cart);
      };

      const handleRemoveFromCart=async (productId) => {
        const {cart} = await commerce.cart.remove(productId);
    
        setCart(cart);
      };

      const handleEmptyCart=async (productId) => {
        const {cart} = await commerce.cart.empty();
    
        setCart(cart);
      };

      const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();
    
        setCart(newCart);
      };

      const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
          const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
    
          setOrder(incomingOrder);
    
          refreshCart();
        } catch (error) {
          setErrorMessage(error.data.error.message);
        }
      };


    useEffect(()=>{
        fetchProducts();
        fetchCart();
        
    },[]);

   // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

// Change page
const paginate = pageNumber => setCurrentPage(pageNumber);
  
    return(
        <Router>
            <div>
            <CssBaseline />
            <Header totalItems={cart.total_items}/>
            {/*  <Navbar totalItems={cart.total_items} />*/}
           
            <Switch>
                <Route exact path="/">
                  <Products products={currentPosts} onAddToCart={handleAddToCart} />
                </Route>
                <Route exact path="/cart">
                <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart}/>
                </Route>
                <Route exact path="/checkout">
                    <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage}/>
                </Route>
                <Route exact path="/huawei">
                    <Category categoryName="huawei" onAddToCart={handleAddToCart}/>
                </Route>
                <Route exact path="/samsung">
                    <Category categoryName="samsung" onAddToCart={handleAddToCart}/>
                </Route>
                <Route exact path="/iphone">
                    <Category categoryName="iphone" onAddToCart={handleAddToCart}/>
                </Route>
            </Switch>
            <Pagination postsPerPage={postsPerPage} totalPosts={products.length} paginate={paginate} />
            </div>
        </Router>
        
    )
}

export default App;