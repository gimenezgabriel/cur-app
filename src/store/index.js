import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { shopApi } from '../services/shopApi'
import shopSlice from '../features/shop/shopSlice'
import counterSlice from '../features/counter/CounterSlice'
import cartSlice from '../features/cart/cartSlice'
import { authApi } from '../services/authApi'
import authSlice from '../features/auth/authslice'

const store = configureStore({
  reducer: {
    shop: shopSlice,
    cart: cartSlice,
    auth: authSlice,
    counter: counterSlice,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware),
})

setupListeners(store.dispatch)

export default store
