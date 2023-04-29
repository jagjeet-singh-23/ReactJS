import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const articleAPI = createApi({
     reducerPath: 'articleAPI',
     baseQuery: fetchBaseQuery({
          baseUrl: '',
     }),
     endpoints: (builder) => ({
          getSummary: builder.query({
               query: (params) => `test`
          })
     })
})