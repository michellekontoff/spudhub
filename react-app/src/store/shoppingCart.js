import { useDispatch } from "react-redux"
const LOAD_CART = 'cart/LOAD_CART'
const ADD_TO_CART = 'cart/ADD_TO_CART'
const REMOVE_FROM_CART = 'cart/REMOVE_FROM_CART'
const SUBTRACT_FROM_CART = 'cart/SUBTRACT_FROM_CART'
const RESET_CART = 'cart/RESET_CART'


export const loadCart = (cart) => ({
    type: LOAD_CART,
    cart
})

export const addToCart = (item) => ({
    type: ADD_TO_CART,
    item
})

export const removeFromCart = (itemId) => ({
    type: REMOVE_FROM_CART,
    itemId
})

export const subtractFromCart = (item) => ({
    type: SUBTRACT_FROM_CART,
    item
})

export const resetCart = () => ({
    type: RESET_CART,
})

const saveCart = (cart) => {
    try {
        const jsonCart = JSON.stringify(cart)
        localStorage.setItem('cart', jsonCart)
    }
    catch (err) {
    // ignore
    }
}

export const useAddItem = (product, cart) => {
    const dispatch = useDispatch()
    return async function() {
        if (product.id in cart) {
            cart[product.id].quantity += 1
            cart[product.id].price = product.price * cart[product.id].quantity
        } else {
            cart[product.id] = { productId: product.id, quantity: 1, price: product.price }
        }
        await dispatch(loadCart(cart));
        saveCart(cart)
        return
    }
}

export const useSubtractItem = (product, cart) => {
    const dispatch = useDispatch()
    return async function() {
        if (cart[product.id].quantity <= 1) {
            delete cart[product.id]
        } else {
            cart[product.id].quantity -= 1
            cart[product.id].price = product.price * cart[product.id].quantity
        }
        await dispatch(loadCart(cart));
        saveCart(cart)
        return
    }
}

export const useRemoveItem = (productId, cart) => {
    const dispatch = useDispatch()
    return async function() {
        await dispatch(removeFromCart(productId));
        delete cart[productId]
        saveCart(cart)
        return
    }
}

export const useResetCartItems = () => {
    const dispatch = useDispatch()
    return async function() {
        await dispatch(resetCart());
        localStorage.removeItem('cart')
        window.alert('Thank you for your purchase!')
        return
    }
}


let initialState = {}


export default function reducer(state = initialState, action) {
    let newState = { ...state }
    let itemId;
    let item;

    switch (action.type) {
        case LOAD_CART:
            return { ...state, ...action.products };
        case ADD_TO_CART:
            item = action.item
            if (item.id in newState) {
                newState[item.id].quantity += 1
                newState[item.id].price = item.price * newState[item.id].quantity
            } else {
                newState[item.id] = { productId: item.id, quantity: 1, price: item.price }
            }
            return newState
        case SUBTRACT_FROM_CART:
            item = action.item
            if (newState[item.id].quantity <= 1) {
                delete newState[item.id]
            } else {
                newState[item.id].quantity -= 1
                newState[item.id].price = item.price * newState[item.id].quantity
            }
            return newState
        case REMOVE_FROM_CART:
            itemId = action.itemId
            delete newState[itemId]
            return newState
        case RESET_CART:
            return state = {}
        default:
            return state;
    }
}
