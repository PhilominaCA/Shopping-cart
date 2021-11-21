import { Items } from './Items';
import { itemList } from './itemList';
import Button from '@material-ui/core/Button';
import { useState } from 'react';

export function Products({cartvals,setCartvals}) {
    const [cval, setCval] = useState(0);

  return <div className="item-list">
    {itemList.map(({ photo, itemName, rating, discountRate, rate },index) => (
      <Items photo={photo} itemName={itemName} rating={rating} discountRate={discountRate} rate={rate}
       addButton={ !cval?<Button size="large" color="primary" 
       onClick={() => {  setCval(1); 
         const selectedItem=  itemList.filter((item,indx)=>( indx===index));
setCartvals([...cartvals,selectedItem] );
       }}>Add to Cart</Button> : <Button size="large" color="primary" disabled>Add to Cart</Button>
    }/>))}
      </div>;
}
