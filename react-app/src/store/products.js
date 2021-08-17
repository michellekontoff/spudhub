

const ALL_PRODUCTS = 'products/ALL_PRODUCTS';
const CREATE_PRODUCT = 'products/CREATE_PRODUCT';
const EDIT_PRODUCT = 'products/EDIT_PRODUCT';
const DELETE_PRODUCT = 'products/DELETE_PRODUCT'

const getAllProducts = (products) => ({
    type: ALL_PRODUCTS,
    products,
})

const createProduct = (product) => ({
    type: CREATE_PRODUCT,
    product,
})

const editProduct = (product) => ({
    type: EDIT_PRODUCT,
    product
})

const deleteProduct = (productId) => ({
    type: DELETE_PRODUCT,
    productId
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

export const fetchCreateProduct = (user_id, name, description, price, quantity, image) => async (dispatch) => {

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

export const fetchEditProduct = (id, name, description, price, quantity, image) => async (dispatch) => {
    const response = await fetch(`/api/products/${id}`, {
        method: "PUT",
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify({
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
        dispatch(editProduct(data))
    }
}

export const fetchDeleteProduct = (id) => async (dispatch) => {
    const response= await fetch(`/api/products/${id}`, {
        method: "DELETE"
    })
    console.log(response)
    if (response.ok) {
        const data = await response.json()
        console.log("Delete id : ", id)
        if (data.errors) {
            return;
        }
        dispatch(deleteProduct(id))
        return response
    }

}

let initialState = {}

export default function reducer(state = initialState, action) {
    let newState = { ...state }
    switch (action.type) {
        case ALL_PRODUCTS:
            return { ...state, ...action.products };
        case CREATE_PRODUCT:
            newState[action.product.id] = action.product
            return newState
        case EDIT_PRODUCT:
            newState[action.product.id] = action.product
            return newState
        case DELETE_PRODUCT:
            delete newState[action.productId]
            return newState
        default:
            return state;
    }
}
