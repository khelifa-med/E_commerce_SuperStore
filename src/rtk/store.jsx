

import { configureStore } from '@reduxjs/toolkit'
import { Products_Slice } from './slices/ProductsSlice'
import CartSlice from './slices/CartSlice'

export const store = configureStore({
  reducer: {
    products : Products_Slice.reducer,
    cart : CartSlice.reducer
  },
})