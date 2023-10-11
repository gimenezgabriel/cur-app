import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

import { baseUrl} from '../firebase/index'

export const shopApi = createApi({
    reducerPath: 'shopApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: builder => ({
        getCategories: builder.query({
            query: () => 'categories.json'
        }),
        getProducts: builder.query({
            query: () => 'products.json'
        }),
        getProductsByCategory: builder.query({
            query: category => `products.json?orderBy="category"&equalTo="${category}"`
        }),
        postOrder: builder.mutation({
            query: ({...orders}) =>({
                url: 'orders.json',
                method: 'POST',
                body: orders,
            }),
        })
    }),
})

export const {
    useGetCategoriesQuery,
    useGetProductsQuery,
    useGetProductsByCategoryQuery,
    usePostOrderMutation,
} = shopApi
