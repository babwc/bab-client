import { CartProduct } from "../ts/interfaces";
import { Operator } from "../ts/types";

const setCartData = (cartData: any) => {
  const now = new Date();

  cartData.expiresAt = new Date(now.setDate(now.getDate() + 7));
  window.localStorage.setItem("cart", JSON.stringify(cartData));
};

export const getCart = () => {
  const cart: any = window.localStorage.getItem("cart");

  return JSON.parse(cart);
};

export const getItem = (id: number) => {
  const cart: any = window.localStorage.getItem("cart");

  return cart
    ? JSON.parse(cart).items.find((item: any) => item.id === id)
    : null;
};
export const addToCart = (input: any) => {
  const cart: any = window.localStorage.getItem("cart");
  let cartData: any = { items: [] };

  const { id, quantity } = input;

  if (cart) {
    cartData = JSON.parse(cart);

    const product = cartData.items.find((product: any) => {
      return product.id === id;
    });

    if (product) {
      Object.assign(product, { quantity: quantity + product.quantity });
    } else {
      cartData.items.push({ id, data: input.data, quantity });
    }
  } else {
    cartData.items = [{ id, data: input.data, quantity }];
  }

  setCartData(cartData);
};
export const updateQuantity = ({
  id,
  operator,
}: {
  id: number;
  operator: Operator;
}) => {
  const cart: any = window.localStorage.getItem("cart");
  const cartData: any = JSON.parse(cart);

  cartData.items.forEach((product: any) => {
    if (id === product.id) {
      if (operator === Operator.Add) {
        product.quantity += 1;
      } else {
        product.quantity -= 1;
      }
    }
  });

  setCartData(cartData);
};

export const addToCartMany = (cartData: any) => {
  setCartData(cartData);
};
export const deleteProduct = (productId: any) => {
  const cart: any = window.localStorage.getItem("cart");
  let cartData: any = JSON.parse(cart);

  cartData.items = cartData.items.filter(({ id }: any) => {
    return id !== productId;
  });

  if (cartData.items.length) {
    setCartData(cartData);
  } else {
    window.localStorage.removeItem("cart");
  }
};
export const clearCart = () => {
  window.localStorage.removeItem("cart");
};

export const getNotifConfig = () => {
  const notif: any = window.localStorage.getItem("notif");

  return JSON.parse(notif);
};

export const setNotifLimit = (updatedAt: any) => {
  // const notif: any = window.localStorage.getItem("notif");

  // const { isActive, updatedAt } = notif;

  const notifData = { isActive: false, updatedAt };

  window.localStorage.setItem("notif", JSON.stringify(notifData));
};

export const notifLimitRemove = () => {
  window.localStorage.removeItem("notif");
};
