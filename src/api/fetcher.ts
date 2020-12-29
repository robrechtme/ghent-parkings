import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetcher = (url: string): Promise<any> => axios.get(url).then((res) => res.data);

export default fetcher;
