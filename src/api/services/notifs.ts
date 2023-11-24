import { api, transformation } from "./api";

export const notifApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getNotification: builder.query<any, any>({
      query: () => {
        return {
          url: `notification`,
        };
      },
      transformResponse: (response: any) =>
        transformation({ response, isArray: false }),
      providesTags: ["Notifs"],
    }),
  }),
});

export const { useGetNotificationQuery } = notifApi;
