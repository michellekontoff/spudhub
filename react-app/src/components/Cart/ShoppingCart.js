import { useSelector } from "react-redux"
import { useResetCartItems } from "../../store/shoppingCart"
import CartItem from "./CartItem"
import "./Cart.css"
import { useEffect, useState } from "react"



const ShoppingCart = ({cart, setCart}) => {
   const [total, setTotal] = useState(0)

   const cartObject = useSelector(state => state.shoppingCart)
   const itemList = Object.values(cartObject)
   const resetCart = useResetCartItems()

   function purchase() {
       resetCart()
       setCart(!cart)
   }


   useEffect(() => {

      let total = 0;
      itemList.forEach((item) => {
         total += item.price
      })

      setTotal(total.toFixed(2))

   }, [setTotal, itemList])


   let purchaseButton ;
   if (itemList.length){
      purchaseButton= <button className="purchase_btn" onClick={purchase}>Purchase</button>
   }
   else{
      purchaseButton = null
   }

   return (
      <>
         <div className='shopping_cart_container'>
            {itemList?.map((item) => (
               <CartItem key={item.productId} item={item} />
            ))}
            {total > 0 ? null : 'Buy something!'}
         </div>
         <div className="parent-div-purchase">
            <div className='total_purchase_container'>
               <div className='total'>{total > 0 ? `Total: $${total}` : null}</div>
               <div>{purchaseButton}</div>
            </div>
         </div>
      </>
   )
}

export default ShoppingCart
