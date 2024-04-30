import { gql, useQuery } from '@apollo/client';

// Custom hook to fetch all locations
export function useAllLocationList() {
    const LOCATIONS_QUERY = gql`
        query {
            locations {
                results {
                    id
                    name
                }
            }
        }
    `;
    const { loading, error, data } = useQuery(LOCATIONS_QUERY);
    return { loading, error, data };
}
