import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type Movie = {
  _id: string;
  image: string;
  title: string;
  rating: string;
  year: string;
  titleOriginal: string;
  uuid: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

type MovieResponse = {
  messageStatus: string;
  results: Movie[];
  status: number;
  success: boolean;
  total_pages: number;
  total_results: number;
};

// Define a service using a base URL and expected endpoints
export const movieApi = createApi({
  reducerPath: 'movieApi',
  keepUnusedDataFor: 3600,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://movies-app1.p.rapidapi.com/api/',
    prepareHeaders(headers) {
      headers.set(
        'x-rapidapi-key',
        process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY || ''
      );
      headers.set(
        'x-rapidapi-host',
        process.env.NEXT_PUBLIC_X_RAPIDAPI_HOST || ''
      );
      return headers;
    },
  }),
  tagTypes: ['Movie'],
  endpoints: (builder) => ({
    getMovies: builder.query<Movie[], void>({
      query: () => `movies?limit=20`,
      transformResponse(baseQueryReturnValue: MovieResponse) {
        return baseQueryReturnValue.results;
      },
      providesTags: ['Movie'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMoviesQuery } = movieApi;
