

const ALL_PRODUCTS = 'products/ALL_PRODUCTS';

const getAllProducts = (products) => ({
    type: ALL_PRODUCTS,
    products,
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

let initialState = {}

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case ALL_PRODUCTS:
            return { ...state, ...action.products };
    //   case REMOVE_USER:
    //     return { user: null }
      default:
        return state;
    }
  }
