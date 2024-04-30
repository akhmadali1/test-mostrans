import { gql, useQuery } from '@apollo/client';
export default function queryLocation() {
    const getAllLocationList = () => {
        const CHARACTERS_QUERY = gql`
        query {
            locations {
              results {
                id
                name
              }
            }
          }
            `;
        const { loading, error, data } = useQuery(CHARACTERS_QUERY);
        return { loading, error, data };
    }

    return {
        getAllLocationList,
    };
}