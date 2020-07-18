import useSWR from 'swr';
import fetcher from '../api/fetcher';

const useParkings = () => {
  const { data, error, isValidating } = useSWR(`${process.env.REACT_APP_API}&q=&facet=description`, fetcher);
  return {
    parkings: data && data.records,
    isLoading: !error && !data,
    isValidating,
    isError: error,
  };
};

export default useParkings;
