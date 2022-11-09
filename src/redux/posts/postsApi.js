import axios from 'axios';
import { createApi } from '@reduxjs/toolkit/query/react';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'http://localhost:3333/api/',
  }),
  tagTypes: ['Posts'],
  endpoints: builder => ({
    getPosts: builder.query({
      query: () => ({ url: 'posts', method: 'get' }),
      keepUnusedDataFor: 1,
      providesTags: ['Posts'],
    }),
    addPost: builder.mutation({
      query: values => ({
        url: 'posts/add',
        method: 'POST',
        data: values,
        headers: { 'Content-Type': 'multipart/form-data' },
      }),
      invalidatesTags: ['Posts'],
    }),
    deletePost: builder.mutation({
      query: _id => ({
        url: `posts/${_id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
});
 

export const { useAddPostMutation,useDeletePostMutation,useGetPostsQuery } =
  postsApi;
