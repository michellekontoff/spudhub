import { useSelector } from "react-redux"
import CartItem from "./CartItem"



const ShoppingCart = () => {

    const cartObject = useSelector(state => state.shoppingCart)
    const itemList = Object.values(cartObject)

     return (
        <div>
            {itemList?.map((item) => (
               <CartItem key={item.productId} item={item} />
            ))}
        </div>
     )
}

export default ShoppingCart
