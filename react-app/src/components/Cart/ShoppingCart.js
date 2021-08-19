import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react-router-dom"
import { resetCart } from "../../store/shoppingCart"
import CartItem from "./CartItem"


import "./Cart.css"



const ShoppingCart = () => {
   const dispatch = useDispatch()

    const cartObject = useSelector(state => state.shoppingCart)
    console.log(cartObject)
    const itemList = Object.values(cartObject)

    // const cartTotal = (itemList) => {

    //     let total = 0;
    
    //     itemList.forEach(item => {
    //         let product = useSelector(state => state.products[item.productId]);
    //         let price = item.quantity * product.price;
    
    //         total += price;
    //     })
    
    //     return total
    // }

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
