import { Cart } from './Cart';
import Button from '@material-ui/core/Button';


export function CartItemsList({cartvals,setCartvals}) {

   return (<div>
        <div className="item-list">
            { cartvals.length? cartvals.map((item,index) => (
                <Cart cartItems={item} deleteOp={<Button size="large" color="primary" aria-label="delete" 
                onClick={()=>{
                    const deleteItem= cartvals.filter((item,idx)=> idx!==index);
                    setCartvals(deleteItem);
            }}>Delete</Button> }/>
            )): <h1>No items in Cart</h1>}
        </div>
    </div>);
}
