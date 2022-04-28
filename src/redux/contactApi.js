import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
    reducerPath: 'contactApi',
    baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://62680d6801dab900f1c927eb.mockapi.io/api/v1/' }),
    tagTypes:["Contact"],
    endpoints: (builder) => ({
      fetchContact: builder.query({
        query: () => "/contacts",
        providesTags:["Contact"]
        
      }),
      deleteContact:builder.mutation({
    query:contactId=>({
    url:`/contacts/${contactId}`,
    method:"DELETE"
}),
invalidatesTags: ['Contact'],
      }),
createContact:builder.mutation({
    query:createContact=>({
        url:"/contacts",
        method: "POST",
        body:createContact,
    }),
    invalidatesTags: ['Contact'],
})

    }),
  });
  
  
  export const { useFetchContactQuery,useCreateContactMutation,useDeleteContactMutation } = contactApi 