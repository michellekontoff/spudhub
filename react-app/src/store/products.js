

const ALL_PRODUCTS = 'products/ALL_PRODUCTS';
const CREATE_PRODUCT = 'products/CREATE_PRODUCT';

const getAllProducts = (products) => ({
    type: ALL_PRODUCTS,
    products,
})

const createProduct = (product) => ({
    type: CREATE_PRODUCT,
    product,
})

export const fetchAllProducts = () => async (dispatch) => {
    const response = await fetch('/api/products/');
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        }

        dispatch(getAllProducts(data));
    }
}

export const fetchCreateProduct = (user_id ,name, description, price,quantity,image) => async (dispatch) => {

    const response = await fetch('/api/products/create', {
        method: "POST",
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify({
            user_id,
            name,
            description,
            price,
            quantity,
            image
        })
    })
    if (response.ok) {
        const data = await response.json()
        if (data.errors) {
            return;
        }
        dispatch(createProduct(data))
    }
}


let initialState = {}

export default function reducer(state = initialState, action) {
    let newState = { ...state }
    switch (action.type) {
        case ALL_PRODUCTS:
            return { ...state, ...action.products };
        //   case REMOVE_USER:
        //     return { user: null }
        case CREATE_PRODUCT:
            newState[action.product.id] = action.product
            return newState
        default:
            return state;
    }
}
