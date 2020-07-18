import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

const useParkings = () => {
  const { data, error } = useSWR(`${process.env.REACT_APP_API}&q=&facet=description`, fetcher);
  return {
    parkings: data && data.records,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useParkings;
