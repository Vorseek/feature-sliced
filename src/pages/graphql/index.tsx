import { gql, useQuery } from '@apollo/client';
import React from 'react';

const EXCHANGE_RATES = gql`
  query GetCharterRick {
    characters(page: 1, filter: { name: "rick" }) {
      info {
        count
      }
      results {
        id
        name
        status
      }
    }
  }
`;

const Graphql = () => {
  const { data, loading, refetch } = useQuery(EXCHANGE_RATES);
  console.log(data);
  if (loading) return <h1>{'>>>>Loading<<<<'}</h1>;
  return (
    <div>
      <h1>GraphQl</h1>
      <button type="button" onClick={() => refetch()}>ReFetch</button>
    </div>
  );
};

export default Graphql;
