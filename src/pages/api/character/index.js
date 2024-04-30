import { gql, useQuery } from '@apollo/client';
export default function queryCharacter() {
    const getAllCharactersList = () => {
        const CHARACTERS_QUERY = gql`
            query {
                characters {
                results {
                    id
                    name
                    image
                    status
                    type
                    location {
                        name
                    }
                }
                }
            }
            `;
        const { loading, error, data } = useQuery(CHARACTERS_QUERY);
        return { loading, error, data };
    }

    const getCharactersListByLocationID = (id) => {
        const GET_CHARACTERS_BY_LOCATION = gql`
        query CharactersByLocation($id: ID!) {
            location(id: $id) {
            id
            name
            residents {
                id
                name
                image
                status
                type
                location {
                    name
                }
            }
            }
        }
        `;

        const { loading, error, data } = useQuery(GET_CHARACTERS_BY_LOCATION, {
            variables: { id },
        })

        return { loading, error, data };
    };
    const getCharactersListByID = (id) => {
        const GET_CHARACTERS_BY_LOCATION = gql`
        query Character($id: ID!) {
            character(id: $id) {
              id
              name
              status
              type
              origin {
                name
              }
              location {
                name
              }
              image
              episode{
                id
                name
              }
            }
          }
        `;

        const { loading, error, data } = useQuery(GET_CHARACTERS_BY_LOCATION, {
            variables: { id },
        })

        return { loading, error, data };
    };

    return {
        getAllCharactersList,
        getCharactersListByLocationID,
        getCharactersListByID,
    };
}