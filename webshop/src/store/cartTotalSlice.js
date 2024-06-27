import { createSlice } from '@reduxjs/toolkit'

const setInitialCart = () => {
  const cartLS = JSON.parse(localStorage.getItem("cart")) || [];

  let total = 0;
  cartLS.forEach(t => total = total + t.kogus);
  return total;
}

export const cartTotalSlice = createSlice({
  name: 'cartTotal',
  initialState: {
    value: setInitialCart(),
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
    zero: (state) => {
      state.value = 0;
    },
  },
})

export const { increment, decrement, decrementByAmount, zero } = cartTotalSlice.actions

export default cartTotalSlice.reducer