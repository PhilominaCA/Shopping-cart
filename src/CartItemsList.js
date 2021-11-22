import { Cart } from './Cart';
import Button from '@material-ui/core/Button';


export function CartItemsList({cartvals,setCartvals,items,setItems}) {

   return (<div>
        <div className="item-list">
            { cartvals.length? cartvals.map((item,index) => (
                <Cart cartItems={item} deleteOp={<Button size="large" color="primary" aria-label="delete" 
                onClick={()=>{ 
                    const intemIndx = items.map((itm)=>itm.photo).indexOf(item[0].photo); 
                    const remItem= cartvals.filter((item,idx)=> idx!==index);
                    setCartvals(remItem);
                   const itemCopy=[...items];
                    itemCopy[intemIndx].inCart = !itemCopy[intemIndx].inCart;
                    setItems(itemCopy);
            }}>Delete</Button> }/>
            )): <h1 className="empty-cart">No items in Cart</h1>}
        </div>
    </div>);
}
