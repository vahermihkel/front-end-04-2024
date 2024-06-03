import React, { createContext, useState } from 'react';

// 1. Create a context --> saan kätte globaalset muutujat / muuta teda
const CartSumContext = createContext();

// 2. Create a provider component --> temaga seadistan globaalsuse
const CartSumContextProvider = ({ children }) => {
  const [cartSum, setCartSum] = useState(calculateCartSum());

  function calculateCartSum() {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];

    let total = 0;
    cartLS.forEach(t => total = total + t.toode.price * t.kogus);
    return total.toFixed(2);
  }

  return (                  // muutujad ja funktsioonid, mis on globaalsed
    <CartSumContext.Provider value={{ cartSum, setCartSum }}>
      {children}
    </CartSumContext.Provider>
  );
};

// CartSumContext - saan kätte globaalset muutujat / muuta teda
// CartSumContextProvider - panen index.js sisse, siis on ta üle rakenduse
//            aga võin ka panna nt Cart ümber, see tähendab, et ta on kättesaadav vaid
//            Cart componendis ja tema alamkomponentides (Payment, ParcelMachines)
export { CartSumContext, CartSumContextProvider };