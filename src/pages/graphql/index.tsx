import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import { GetCharterRick } from './__generated__/GetCharterRick';

const EXCHANGE_RATES = loader('./GetCharterRick.graphql');

const Graphql = () => {
  const { data, loading, refetch } = useQuery<GetCharterRick>(EXCHANGE_RATES);

  if (loading) return <h1>{'>>>>Loading<<<<'}</h1>;
  return (
    <div>
      <h1>GraphQl</h1>
      {data?.characters?.results?.map((result) => (<div key={result?.id}>{result?.name}</div>))}
      <button type='button' onClick={() => refetch()}>
        ReFetch
      </button>
    </div>
  );
};

export default Graphql;
