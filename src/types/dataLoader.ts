// Wrapper around server data of type T, useful for API calls.
export type DataLoader<T> = {
  data: T;
  isLoading: boolean;
  isValidating: boolean;
  error?: Error;
};
