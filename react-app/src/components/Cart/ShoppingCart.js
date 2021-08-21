import { useSelector } from "react-redux"
import { useResetCartItems, loadCartItem, addItem } from "../../store/shoppingCart"
import CartItem from "./CartItem"
import "./Cart.css"
import { useEffect, useState } from "react"



const ShoppingCart = () => {
   const [total, setTotal] = useState(0)
   const user = useSelector((state) => state.session.user)
   const cartObject = useSelector(state => state.shoppingCart)
   let itemList = Object.values(cartObject)
   const resetCart = useResetCartItems()


   if (cartObject && user) {
      let data = loadCartItem(cartObject, user.id)
      let keys = Object.values(data)
      keys.map((key) => {
         return addItem(data[key], data, key)
      })
      itemList = Object.values(data)

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
      purchaseButton= <button className="purchase_btn" onClick={resetCart}>Purchase</button>
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
