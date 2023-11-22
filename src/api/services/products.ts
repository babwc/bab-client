import { IProductNew, ResponseMessage } from "../../ts/interfaces";
import { api, transformation } from "./api";

interface ProductAllParams {
  searchValue: string;
  department: string;
  limit: number;
  currentPage: number;
}

interface ProductMany {
  user: string;
  updatedAt: string;
  products: {
    data: {
      _id: string;
      image: string;
      name: string;
      price: number;
    };
    quantity: number;
  }[];
}

export const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<any, any>({
      query: ({ searchValue, department, pageSize, currentPage }: any) => {
        return {
          url: "products?populate=*&",
          params: {
            "filters[isModifier][$eq]": false,
            "filters[department][title]": department,
            "filters[title][$containsi]": searchValue,
            "pagination[page]": 1,
            "pagination[pageSize]": pageSize,
          },
        };
      },
      transformResponse: (response: any) =>
        transformation({ response, includeMeta: true }),
      providesTags: ["Product"],
    }),
    getOneProduct: builder.query<any, any>({
      query: (id) => {
        return {
          url: `products/${id}`,
          params: {
            "populate[product][populate]": "department",
            populate: "image",
          },
        };
      },
      transformResponse: (response: any) =>
        transformation({ response, isArray: false }),
      providesTags: ["Product"],
    }),
    sendMessage: builder.query<any, any>({
      query: (value) => {
        return {
          url: `products/send`,
          method: "POST",
          body: value,
        };
      },
      providesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetOneProductQuery,
  useLazySendMessageQuery,
} = productsApi;
