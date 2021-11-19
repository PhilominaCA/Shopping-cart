import './App.css';
import {
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { Products } from './Products';
import { CartItemsList } from './CartItemsList';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function App() {
  const[cartvals,setCartvals]=useState([]);
  const hist = useHistory();

  return (
    <div className="App">
     <header className="App-header">
     <h5> DRIZZLE STORE</h5>  
      <Link to="/home">Home</Link>      
        <Link to="/products">All Products</Link>
        <Button variant="outlined" color="inherit" onClick={()=> hist.push("/cart")}><ShoppingCartIcon/> Cart</Button>
      </header>
   
      <div>
        <Switch>
        <Route exact path="/home">
        <Products cartvals={cartvals} setCartvals={setCartvals}/>    
            </Route>
          <Route path="/products">
         <Redirect to="/home" /> 
         </Route>
               <Route path="/cart">
            <CartItemsList cartvals={cartvals} setCartvals={setCartvals}/>
               </Route>          
        <Route path="**">
        <Errorpage/> 
        </Route>
        </Switch>
        </div>
    </div>
  );
}

export default App;


export function Errorpage(){
  const styles={width: "40%"};
  return(
<div className="error-page">
<img alt="page not found" style={styles} src="https://image.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg"></img></div>
  );
}