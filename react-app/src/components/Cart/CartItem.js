import { useDispatch, useSelector } from "react-redux"
import { useRemoveItem, useAddItem, useSubtractItem } from "../../store/shoppingCart"
import "./Cart.css"

const CartItem = ({ item }) => {
    const dispatch = useDispatch()

    const product = useSelector(state => state.products[item.productId])
    const cart = useSelector(state => state.shoppingCart)
    const addItem = useAddItem(product, cart)
    const removeItem = useRemoveItem(product.id, cart)
    const subtractItem = useSubtractItem(product, cart)

    return (
        <div className='cart-item'>
            <img src={product.image} alt={product.name} className="cart-item-img"></img>
            <div className="cart-item-name">{product.name}</div>
            <div className="cart-item-price">${item.price.toFixed(2)}</div>
            <div className="cart-item-quantity">
                <button onClick={addItem}>+</button>
                <div>{item.quantity}</div>
                <button onClick={subtractItem}>-</button>
            </div>
            <button className="cart-item-remove" onClick={removeItem}>Remove</button>
        </div>
    )
}

export default CartItem
