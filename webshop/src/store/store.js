import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import cartTotalReducer from './cartTotalSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    cartTotal: cartTotalReducer
  },
})