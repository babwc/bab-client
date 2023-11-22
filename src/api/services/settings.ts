import { api, transformation } from "./api";

export const settingsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSettings: builder.query<any, any>({
      query: () => {
        return {
          url: `settings`,
          params: { "fields[0]": "orders", "fields[1]": "reservations" },
        };
      },
      transformResponse: (response: any) =>
        transformation({ response, isArray: false }),
      providesTags: ["Settings"],
    }),
  }),
});

export const { useGetSettingsQuery } = settingsApi;
