export const addItemToCart = (cartItems, carItemToAdd) => {
  const existingCartItem = cartItems.find(
      cartItem => cartItem.id === carItemToAdd.id
    );

    if(existingCartItem) {
        return cartItems.map(cartItem =>
          cartItem.id === carItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
        
        )
    }

    return [...cartItems, {...carItemToAdd, quantity: + 1 }]
}

export const removeItemFromCart = (cartItems, carItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === carItemToRemove.id
  )

  if(existingCartItem.quantity === 1){
    return cartItems.filter(cartItem => cartItem.id !== carItemToRemove.id)
  }

  return cartItems.map(
    cartItem =>
    cartItem.id === carItemToRemove.id ?
     { ...cartItem, quantity: cartItem.quantity -1 }
     : cartItem
  )

}