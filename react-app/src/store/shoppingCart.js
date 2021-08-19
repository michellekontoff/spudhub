
const LOAD_CART = 'cart/LOAD_CART'
const ADD_TO_CART = 'cart/ADD_TO_CART'
const REMOVE_FROM_CART = 'cart/REMOVE_FROM_CART'
const SUBTRACT_FROM_CART = 'cart/SUBTRACT_FROM_CART'

const loadCart = (cart) => ({
    type: LOAD_CART,
    cart
})

export const addToCart = (itemId) => ({
    type: ADD_TO_CART,
    itemId
})

export const removeFromCart = (itemId) => ({
    type: REMOVE_FROM_CART,
    itemId
})

export const subtractFromCart = (itemId) => ({
    type: SUBTRACT_FROM_CART,
    itemId
})

export const loadCartFromStorage = () => async(dispatch) => {

}


let initialState =
    {
        1: {
            productId: 1,
            quantity: 3
        },
        6: {
            productId: 6,
            quantity: 4
        }
    }


export default function reducer(state = initialState, action) {
    let newState = { ...state }
    let itemId;
    switch (action.type) {
        case LOAD_CART:
            return { ...state, ...action.products };
        case ADD_TO_CART:
            itemId = action.itemId
            if (itemId in newState) {
                newState[itemId].quantity += 1
            } else {
                newState[itemId] = { productId: itemId, quantity: 1 }
            }
            return newState
        case SUBTRACT_FROM_CART:
            itemId = action.itemId
            if (newState[itemId].quantity <= 1) {
                delete newState[itemId]
            } else {
                newState[itemId].quantity -= 1
            }
            return newState
        case REMOVE_FROM_CART:
            itemId = action.itemId
            delete newState[itemId]
            return newState
        default:
            return state;
    }
}
