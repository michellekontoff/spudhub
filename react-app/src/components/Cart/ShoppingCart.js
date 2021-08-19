import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react-router-dom"
import { resetCart } from "../../store/shoppingCart"
import CartItem from "./CartItem"


import "./Cart.css"



const ShoppingCart = () => {
   const dispatch = useDispatch()

    const cartObject = useSelector(state => state.shoppingCart)
    const itemList = Object.values(cartObject)


    let purchaseButton ;
    if (itemList.length){
       purchaseButton= <button onClick={()=> dispatch(resetCart())}>Purchase</button>
    }
    else{
       purchaseButton = "Buy something"
    }

     return (
        <div>
            {itemList?.map((item) => (
               <CartItem key={item.productId} item={item} />
            ))}
            {purchaseButton}
        </div>
     )
}

export default ShoppingCart
