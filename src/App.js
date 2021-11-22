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
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';

function App() {
  const [items,setItems]=useState(itemList);
  const[cartvals,setCartvals]=useState([]);
  const hist = useHistory();
  return (
    <div className="App">
     <header className="App-header">
     <h5> DRIZZLE STORE</h5>  
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


export function Errorpage(){
  const styles={width: "40%"};
  return(
<div className="error-page">
<img alt="page not found" style={styles} src="https://image.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg"></img></div>
  );
}

export function Home()
{
  const slideImages = [
    {
      url: 'https://i.pinimg.com/originals/d1/11/43/d11143e71df51f4b4c15b8379ffea8ab.jpg',
   name:'Grocery',
    },
    {
      url: 'https://media.gettyimages.com/photos/overhead-view-of-electronic-devices-on-a-desk-picture-id469467260',
      name:'Electronics',
    },
    {
      url:'https://media.istockphoto.com/photos/assortment-of-fine-chocolate-candies-white-dark-and-milk-chocolate-picture-id1148258027?k=20&m=1148258027&s=612x612&w=0&h=QjpETfJNaqC4OkhZj3GuNl5irjqXwnY0_RDVDvKBYcs=',
      name:'Sweets',
    },
    {
      url:'https://img.freepik.com/free-photo/close-up-view-various-stylish-clothes-hanging-hangers-boutique-clothes_162998-251.jpg?size=626&ext=jpg',
      name:'Clothes',
    },
    {
      url:'https://cdn.igp.com/f_auto,q_auto/cards/birthday-gifts-for-women.jpg',
      name:'Gifts',
    }
  ];
  return (
    <div className="slide-container">
      <br/>
            <h1 className="empty-cart">DRIZZLE STORE </h1>
            <hr/>
            <br/> <br/>
      <ImageList  cols={5}>
        {slideImages.map((item) => (
          <ImageListItem >
            <img src={item.url} alt="shopping" />
            <ImageListItemBar
              title={item.name} />
          </ImageListItem>
        ))}
      </ImageList>
      <br/> <br/>
<hr/>
      <h1 className="empty-cart"> Enjoy Shopping!!!</h1>
    </div>
  )
}