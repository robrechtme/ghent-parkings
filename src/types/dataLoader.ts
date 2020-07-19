export type DataLoader<T> = {
  data: T;
  isLoading: boolean;
  isValidating: boolean;
  error?: Error;
};
