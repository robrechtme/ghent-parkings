import useSWR from 'swr';
import fetcher from '../api/fetcher';

const useParking = (id) => {
  const { data, error, isValidating } = useSWR(`${process.env.REACT_APP_API}&q=&facet=description&refine.id=${id}`, fetcher);
  return {
    parking: data && data.records[0],
    isLoading: !error && !data,
    isValidating,
    isError: error,
  };
};

export default useParking;
