import { Items } from './Items';
import { itemList } from './itemList';
import Button from '@material-ui/core/Button';

export function Products({cartvals,setCartvals,items,setItems}) {
  return (<div className="item-list">
    {itemList.map(({ photo, itemName, rating, discountRate, rate},index) => (
      <Items photo={photo} itemName={itemName} rating={rating} discountRate={discountRate} rate={rate}
       addButton={ 
         !items[index].inCart? <Button size="large" color="primary" 
       onClick={() => {  const itemCopy=[...items];
        itemCopy[index].inCart = !itemCopy[index].inCart;
        setItems(itemCopy); 
         const selectedItem =  itemList.filter((item,indx)=>( indx===index));
        setCartvals([...cartvals,selectedItem]);
       }}>Add to Cart </Button> : 
       <Button size="large" color="primary" disabled>Add to Cart</Button>
    }/>))}
      </div>)
}
