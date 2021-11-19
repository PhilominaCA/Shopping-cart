import { Items } from './Items';


export function Cart({ cartItems,deleteOp}) {
    return (
        <div className="cart-items-list">
            {cartItems.map(({ photo, itemName, rating, discountRate, rate }) => (
                <Items photo={photo} itemName={itemName} rating={rating} discountRate={discountRate} rate={rate} deleteOp={deleteOp} />
            )
            ) }
        </div>
    );
}
