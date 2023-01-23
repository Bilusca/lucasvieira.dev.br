import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: process.env.GRAPHCMS_ENDPOINT,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
      errorPolicy: "none",
    },
    query: {
      fetchPolicy: "network-only",
      errorPolicy: "all",
    },
  }
});