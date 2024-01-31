// Rapid API Url = https://rapidapi.com/restyler/api/article-extractor-and-summarizer
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const KEY = "c2dce69484msh6fe0a2b118cdb70p14415djsn0af42e3ce277";
// const KEY = import.meta.env.KEY;

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', KEY);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    }),
})

export const { useLazyGetSummaryQuery } = articleApi;