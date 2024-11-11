import { useCallback, useEffect, useMemo, useState } from "react";
import { AxiosPropTypes } from "../common/types";

const GlobalLoaderConfig = ({ axios }: AxiosPropTypes) => {
  const [counter, setCounter] = useState<number>(0);

  const increment = useCallback(() => setCounter((counter: number) => counter + 1), [
    setCounter
  ]); // add to counter
  const decrement = useCallback(() => setCounter((counter: number) => counter - 1), [
    setCounter
  ]); // remove from counter

  const interceptors: any = useMemo(
    () => ({
      request: (config: any) => {
        increment();
        return config;
      },
      response: (response: any) => {
        decrement();
        return response;
      },
      error: (error: Error) => {
        decrement();
        return Promise.reject(error);
      }
    }),
    [increment, decrement]
  ); // create the interceptors

  useEffect(() => {
    // add request interceptors
    axios.interceptors.request.use(interceptors.request, interceptors.error);
    // add response interceptors
    axios.interceptors.response.use(interceptors.response, interceptors.error);

    return () => {
      // remove all intercepts when done
      axios.interceptors.request.eject(interceptors.request);
      axios.interceptors.request.eject(interceptors.error);
      axios.interceptors.response.eject(interceptors.response);
      axios.interceptors.response.eject(interceptors.error);
    };
  }, [interceptors]);

  return [counter > 0];
};

export { GlobalLoaderConfig };