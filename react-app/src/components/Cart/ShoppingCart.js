import { useSelector, useDispatch } from "react-redux"
import { resetCart } from "../../store/shoppingCart"
import CartItem from "./CartItem"

import "./Cart.css"
import { useEffect, useState } from "react"



const ShoppingCart = () => {
   const dispatch = useDispatch()
   const [total, setTotal] = useState(0)

    const cartObject = useSelector(state => state.shoppingCart)
    const itemList = Object.values(cartObject)

    useEffect(() => {

        let total = 0;
        itemList.forEach((item) => {
            total += item.price
        })

        setTotal(total.toFixed(2))

    })

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
           {total > 0 ? total : null} {purchaseButton}
        </div>
     )
}

export default ShoppingCart
