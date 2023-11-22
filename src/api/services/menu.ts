import { api, transformation } from "./api";

export const menuApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getMenu: builder.query<any, void>({
      query: () => ({ url: "menu", params: { populate: "dishes" } }),
      transformResponse: (response: any) => transformation({ response }),

      providesTags: ["Menu"],
    }),
  }),
});

export const { useGetMenuQuery } = menuApi;
