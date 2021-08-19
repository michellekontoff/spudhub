import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeFromCart, subtractFromCart } from "../../store/shoppingCart"


const CartItem = ({ item }) => {
    const dispatch = useDispatch()

    const product = useSelector(state => state.products[item.productId])
    console.log(item)

    return (
    <div className='cart-item'>
        <div>{product.name}</div>
        <div>{item.quantity}</div>
        <button onClick={() => dispatch(addToCart(product.id))}>+</button>
        <button onClick={() => dispatch(subtractFromCart(product.id))}>-</button>
        <button onClick={() => dispatch(removeFromCart(product.id))}>Remove</button>
    </div>
    )
}

export default CartItem
