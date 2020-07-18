import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

const useParking = (id) => {
  const { data, error } = useSWR(`${process.env.REACT_APP_API}&q=&facet=description&refine.id=${id}`, fetcher);
  return {
    parking: data && data.records[0],
    isLoading: !error && !data,
    isError: error,
  };
};

export default useParking;
