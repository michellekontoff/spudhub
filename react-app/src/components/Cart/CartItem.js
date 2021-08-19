import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeFromCart, subtractFromCart } from "../../store/shoppingCart"


const CartItem = ({ item }) => {
    const dispatch = useDispatch()

    const product = useSelector(state => state.products[item.productId])


    return (
    <div className='cart-item'>
        <img src={product.image} alt={product.name} className="cart-item-img"></img>
        <div className="cart-item-name">{product.name}</div>
        <div className="cart-item-price">{product.price}</div>
        <div className="cart-item-quantity">
            <button onClick={() => dispatch(addToCart(product.id))}>+</button>
            <div>{item.quantity}</div>
            <button onClick={() => dispatch(subtractFromCart(product.id))}>-</button>
        </div>
        <button className="cart-item-remove" onClick={() => dispatch(removeFromCart(product.id))}>Remove</button>
    </div>
    )
}

export default CartItem
