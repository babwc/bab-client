import { departments } from "../features/products/constants";
import { Order_Status, Role } from "./types";

export interface IProduct {
  uid: string;
  id: number;
  title: string;
  amount: number;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  image: any;
  modifiers: any;
  inStock: boolean;
  isModifier: boolean;
  popularity: number;
  price: number;
}

export interface ICateringDish {
  id: number;
  name: string;
  image: string;
  description: string;
}

export interface ICateringCtg {
  id: number;
  title: string;
}

export interface ICartData {
  id: number;
  quantity: number;
}

// --- //

export interface ICart {
  _id: string;
  customer: string;
  products: [{ data: IProduct; quantity: number }];
}

export interface IModifier {
  _id: string;
  name: string;
}

export interface IParent {
  _id: string;
  name: string;
  department: string;
}

export interface IContainer {
  _id: string;
  uid: string;
  createdAt?: string;
  updatedAt?: string;
  department: string;
  description: string;
  image: string;
  imageUrl: string;
  isContainer: boolean;
  name: string;
  modifiers?: IProduct[] | IModifier[];
}

export interface IAuthSlice {
  id: string;
  userData: { name: string; role: Role | null };
  token: string;
  isAuth: boolean;
}

export type ResponseMessage = string;

export interface ICateringNew {
  name: string;
  category: string;
  price?: string;
  description: string;
  image: string;
}

export interface ICateringCtg {
  _id: string;
  name: string;
  dishes: string[];
}

export interface IOrder {
  _id: string;
  createdAt: string;
  updatedAt?: string;
  customer: string;
  date: string;
  items: Item[];
  orderNumber: string;
  paymentId: string;
  phone: string;
  status: Order_Status;
  totalPrice: number;
}

interface Item {
  product: IProductInOrder;
  quantity: number;
}

export interface IProductInOrder {
  department: string;
  id: string;
  image: string;
  imageUrl?: string;
  name: string;
  price: string;
}

export interface ICheckoutItems {
  data: IProduct;
  quantity: number;
}

export interface IProductNew {
  name: string;
  department: string;
  isContainer: boolean;
  parent?: null | { _id: string; name: string; department: string };
  modifiers?: string[];
  price: string;
  description: string;
  image: null | File;
}

export interface IConfirmOrder {
  items: ICheckoutItems[];
  customer?: string;
  guest?: string;
  paymentId: string;
  phone: string;
  date: string;
}

export interface CartProduct {
  id: string;
  data?: {
    image: string;
    title: string;
    department: string;
    price: string;
  };
  quantity: number;
}

export interface CartData {
  items: CartProduct[];
  expiresAt: string;
}

export interface IUserInfo {
  name: string;
  email: string;
}

export interface IChangePass {
  password: string;
  newPassword: string;
}

export interface IDish {
  uid: string;
  _id: string;
  image: string;
  imageUrl?: string;
  name: string;
  description: string;
}
