import { ICateringNew, IDish, ResponseMessage } from "../../ts/interfaces";
import { api, transformation } from "./api";

export const cateringApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCateringList: builder.query<any, number>({
      query: (id) => {
        return {
          url: "caterings",
          params: { "filters[catering_category][id]": id, populate: "image" },
        };
      },
      transformResponse: (response: any) => transformation({ response }),
      providesTags: ["Catering"],
    }),
    sendCateringRequest: builder.mutation<
      ResponseMessage,
      {
        name: string;
        email: string;
        phone: string;
        location: string;
        guests: number;
        date: string;
        message: string;
      }
    >({
      query: (value) => {
        return {
          url: "caterings/send",
          method: "POST",
          body: value,
        };
      },
    }),
  }),
});

export const { useGetCateringListQuery, useSendCateringRequestMutation } =
  cateringApi;
