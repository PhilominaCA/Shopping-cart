import './App.css';
import {
  Switch,
  Route,
  Link} from "react-router-dom";
import { itemList } from './itemList';
import { Products } from './Products';
import { CartItemsList } from './CartItemsList';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import 'react-slideshow-image/dist/styles.css'
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import { Home } from './Home';
import { Errorpage } from './Errorpage';

function App() {

  const [items,setItems]=useState(itemList);
  const[cartvals,setCartvals]=useState([]);
  const hist = useHistory();
  return (
    <div className="App">
     <header className="App-header">
     <h4><AcUnitRoundedIcon fontSize="large"/> <p>DRIZZLE STORE</p></h4>  
      <Link to="/">Home</Link>      
        <Link to="/products">All Products</Link>
        <Button variant="outlined" color="inherit" onClick={()=> hist.push("/cart")}><ShoppingCartIcon/> Cart</Button>
      </header>
      <div className="content">
        <Switch>
        <Route exact path="/">
        <Home/>
            </Route>
          <Route path="/products">
          <Products cartvals={cartvals} setCartvals={setCartvals} items={items} setItems={setItems}/>    
         </Route>
               <Route path="/cart">
            <CartItemsList cartvals={cartvals} setCartvals={setCartvals} items={items} setItems={setItems}/>
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



