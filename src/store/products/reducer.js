const initialState = { products: [], categories: [] };

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case "products/FETCHED": {
      // => Ask yourself: what is action.payload?
      return {
        ...state,
        products: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
