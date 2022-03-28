import { useState } from 'react';
import { useQuery } from 'react-query';

import { fetchDefinition } from '../api/api';
import Definition from './Definition';
import Thesaurus from './Thesaurus';

const Dictionary = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const { data, error, isError, isLoading, refetch } = useQuery(
    ['definition', searchTerm],
    () => fetchDefinition(searchTerm),
    {
      refetchOnWindowFocus: false,
      enabled: false
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    console.error(error);
    return <div>Error!</div>;
  }

  console.log('data', data);

  const definition = data?.def;

  const handleInput = e => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container">
      <h1>Dictionary</h1>
      <form>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          value={searchTerm}
          onChange={handleInput}
        ></input>

        <button
          className="btn btn-outline"
          type="submit"
          disabled={!searchTerm}
          onClick={() => refetch()}
        >
          Define
        </button>
      </form>

      <Definition definition={definition} />
      <Thesaurus definition={definition} />
    </div>
  );
};

export default Dictionary;
