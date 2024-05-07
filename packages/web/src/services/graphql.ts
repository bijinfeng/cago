import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@/__generated__/gql';
import { USER_TOKEN } from '@/lib/constants';

export const graphqlClient = new ApolloClient({
  uri: `${import.meta.env.VITE_STRAPI_URL}/graphql`,
  cache: new InMemoryCache(),
  connectToDevTools: true,
  headers: {
    Authorization: `Bearer ${localStorage.getItem(USER_TOKEN)}`,
  },
});

export const GET_ORGANIZATION = gql(/* GraphQL */ `
  query Organizations {
    organizations {
      data {
        id
        attributes {
          host
          name
          members_count
          logo {
            data {
              id
              attributes {
                width
                height
                size
                url
              }
            }
          }
        }
      }
    }
  }
`);
