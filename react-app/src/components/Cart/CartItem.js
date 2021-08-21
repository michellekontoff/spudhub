import { useSelector } from "react-redux"
import { useRemoveItem, useAddItem, useSubtractItem } from "../../store/shoppingCart"
import "./Cart.css"

const CartItem = ({ item }) => {

    const user = useSelector((state) => state.session.user)
    const product = useSelector(state => state.products[item.productId])
    const cart = useSelector(state => state.shoppingCart)
    const addItem = useAddItem(product, cart, user.id)
    const removeItem = useRemoveItem(product.id, cart, user.id)
    const subtractItem = useSubtractItem(product, cart, user.id)

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
