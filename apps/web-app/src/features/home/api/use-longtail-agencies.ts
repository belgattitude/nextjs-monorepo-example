import request, { gql } from 'graphql-request';
import { useQuery } from 'react-query';

export const useLongtailAgencies = () => {
  return useQuery('longtail-agencies', async () => {
    const {
      posts: { data },
    } = await request(
      'https://sortlist-clone-api.herokuapp.com/',
      gql`
        query {
          allProviders(condition: { id: 1 }) {
            edges {
              node {
                id
                name
                description
                slug
                verified
                createdAt
                updatedAt
                servicesByProviderId {
                  edges {
                    node {
                      id
                      name
                      budget
                    }
                  }
                }
              }
            }
          }
        }
      `
    );
    return data;
  });
};
