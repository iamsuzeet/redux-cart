export const addItemToCart = (cartItems, cartItemToAdd) => {
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : { ...cartItem }
  );
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  if (cartItemToRemove.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : { ...cartItem }
  );
};
