import { api, transformation } from "./api";

import { ICateringCtg, ResponseMessage } from "../../ts/interfaces";

export const cateringCtgApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<any, void>({
      query: () => ({ url: "catering-categories" }),
      transformResponse: (response: any) => transformation({ response }),

      providesTags: ["CateringCategory"],
    }),
  }),
});

export const { useGetCategoriesQuery } = cateringCtgApi;
