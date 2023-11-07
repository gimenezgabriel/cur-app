import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: "userLogged",
    updatedAt: Date.now().toLocaleString(),
    items: [],
    total: 0,
}

export const cartSlice = createSlice ({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const products = state.items
            const productRepeated = products.find(
                item => item.id === action.payload.id
            )

            if (!productRepeated)
            return {
              ...state,
              items: [...state.items, action.payload],
              total: state.total + action.payload.price,
              updatedAt: new Date().toLocaleString(),
            }
    
          const itemsUpdated = products.map(item => {
            if (item.id === action.payload.id) {
              return Object.assign({}, item, {
                quantity: item.quantity + action.payload.quantity,
              })
            }
            return item
          })
          return {
            ...state,
            items: itemsUpdated,
            total: state.total + action.payload.price,
            updatedAt: new Date().toLocaleString(),
          }
        },
        removeItem: (state, action) => {
      const productToRemove = state.items.find(item => item.id === action.payload.id);
      
      if (productToRemove) {
        const updatedItems = state.items.filter(item => item.id !== action.payload.id);
        const updatedTotal = state.total - (productToRemove.price * productToRemove.quantity);

        return {
          ...state,
          items: updatedItems,
          total: updatedTotal,
          updatedAt: new Date().toLocaleString(),
        };
      }

      return state;
    },
  },
})
    
    export const { addItem, removeItem } = cartSlice.actions
    
    export default cartSlice.reducer
