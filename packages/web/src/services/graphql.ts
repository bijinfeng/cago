import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@/__generated__/gql';
import { USER_TOKEN } from '@/lib/constants';

export const graphqlClient = new ApolloClient({
  uri: `${import.meta.env.VITE_STRAPI_URL}/graphql`,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${localStorage.getItem(USER_TOKEN)}`,
  },
});

export const GET_ORGANIZATION = gql(/* GraphQL */ `
  query Organization {
    organization {
      data {
        id
        attributes {
          host
          name
        }
      }
    }
  }
`);
