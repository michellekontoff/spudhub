import { useDispatch, useSelector } from "react-redux"
import { addItem, subtractItem, removeItem, removeItemCart, loadCart, loadThisItem } from "../../store/shoppingCart"
import "./Cart.css"

const CartItem = ({ item }) => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.session.user)
    const product = useSelector(state => state.products[item.productId])
    const cart = useSelector(state => state.shoppingCart)
    // const addItem = useAddItem(product, cart, user.id)
    // const removeItem = useRemoveItem(product, cart, user.id)
    // const subtractItem = useSubtractItem(product, cart, user.id)

    const add = () =>{
        dispatch(addItem(product, cart, user.id))
    }

    const subtract = () =>{
        dispatch(subtractItem(product, cart, user.id))
    }

    const remove = async () =>{
        await dispatch(removeItem(product, cart, user.id))
        await dispatch(loadThisItem(cart, user.id))
    }

    return (
        <>
            {product ?
            <div className='cart-item'>
                <img src={product.image} alt={product.name} className="cart-item-img"></img>
                <div className="cart-item-name">{product.name}</div>
                <div className="cart-item-price">${item.price.toFixed(2)}</div>
                <div className="cart-item-quantity">
                    <button onClick={add}>+</button>
                    <div>{item.quantity}</div>
                    <button onClick={subtract}>-</button>
                </div>
                <button className="cart-item-remove" onClick={remove}>Remove</button>
            </div>
            : null }
        </>
    )
}

export default CartItem
