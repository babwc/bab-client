import { api } from "./api";

import { transformation } from "./api";

interface CartInstantModif {
  customerId: string;
  storedUserId: string;
  products: [{ data: string; quantity: number }];
  updatedAt: string;
}

export const cartApi = api.injectEndpoints({
  endpoints: (builder) => {
    return {
      getCart: builder.query<any, any>({
        query: (params: any) => {
          return {
            url: "products",
            params: { ...params, populate: "image" },
          };
        },
        transformResponse: (response: any) => transformation({ response }),
        providesTags: ["Cart"],
      }),
    };
  },
});

export const { useGetCartQuery, useLazyGetCartQuery } = cartApi;
