import { api } from "./api";

import {
  ICheckoutItems,
  IConfirmOrder,
  IOrder,
  ResponseMessage,
} from "../../ts/interfaces";

import { Order_Status } from "../../ts/types";

export const orderApi = api.injectEndpoints({
  endpoints: (builder) => {
    return {
      createOrder: builder.mutation<any, any>({
        query: (body) => {
          return {
            url: "orders",
            method: "POST",
            body,
          };
        },
        invalidatesTags: ["Order"],
      }),
      updateOrder: builder.mutation<any, any>({
        query: (sessionId: string) => {
          return {
            url: `orders/${sessionId}`,
            method: "PUT",
          };
        },
        invalidatesTags: ["Order"],
      }),
    };
  },
});

export const { useCreateOrderMutation, useUpdateOrderMutation } = orderApi;
