import request, { gql } from 'graphql-request';
import { useQuery } from 'react-query';

export type GraphQlAgency = {
  id: number;
  name: string;
  description: string;
  slug: string;
  verified: boolean;
  createdAt: string;
  updatedAt: string;
  servicesByProviderId: {
    edges: [
      {
        node: {
          id: 6;
          name: 'Knapping';
          budget: '55992$';
        };
      },
      {
        node: {
          id: 7;
          name: 'Candle making';
          budget: '34843$';
        };
      }
    ];
  };
};

export const useLongtailAgencies = () => {
  return useQuery('longtail-agencies', async (): Promise<GraphQlAgency[]> => {
    const data = await request(
      'https://sortlist-clone-api.herokuapp.com/graphql',
      gql`
        query {
          allProviders {
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
    return data.allProviders.edges.map((el: any) => el.node);
  });
};
