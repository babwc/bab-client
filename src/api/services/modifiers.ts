import { api, transformation } from "./api";

export const modifiersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getModifiers: builder.query<any, any>({
      query: ({ id }: { id: string }) => {
        return {
          url: `products`,
          params: { "filters[parentProduct][id]": id, populate: "image" },
        };
      },
      transformResponse: (response: any) => transformation({ response }),
      providesTags: ["Modifier"],
    }),
  }),
});

export const { useGetModifiersQuery } = modifiersApi;
