import { useEffect, useReducer } from 'react';
import { api } from '.';

interface dataFetchState<T> {
  isLoading: boolean;
  isError: boolean;
  data?: T | null;
}
enum dataFetchActionKind {
  FETCH_INIT = 'FETCH_INIT',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_FAILURE = 'FETCH_FAILURE',
}
interface dataFetchAction<DataT> {
  type: dataFetchActionKind;
  payload?: DataT;
}
const dataFetchReducer = <DataT extends object>(
  state: dataFetchState<DataT>,
  action: dataFetchAction<DataT>,
): dataFetchState<DataT> => {
  switch (action.type) {
    case dataFetchActionKind.FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case dataFetchActionKind.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case dataFetchActionKind.FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

export const useData = <DataT extends object>(
  url: string,
  opts = {},
): [dataFetchState<DataT>] => {
  const [state, dispatch] = useReducer(dataFetchReducer<DataT>, {
    isLoading: false,
    isError: false,
    data: null,
  });

  const refresh = async () => {
    dispatch({ type: dataFetchActionKind.FETCH_INIT });
    try {
      const result = await api.get(url).json<DataT>();
      dispatch({
        type: dataFetchActionKind.FETCH_SUCCESS,
        payload: result,
      });
    } catch (error) {
      console.error(error);
      dispatch({ type: dataFetchActionKind.FETCH_FAILURE });
    }
  };

  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      dispatch({ type: dataFetchActionKind.FETCH_INIT });
      try {
        const result = await api.get(url, opts).json<DataT>();
        if (!didCancel) {
          dispatch({
            type: dataFetchActionKind.FETCH_SUCCESS,
            payload: result,
          });
        }
      } catch (error) {
        if (!didCancel) {
          console.error(error);
          dispatch({ type: dataFetchActionKind.FETCH_FAILURE });
        }
      }
    };
    if (url) fetchData();

    return () => {
      didCancel = true;
    };
  }, [/* isAuthentified, opts.waitAuth, */ url]);
  return [state, { refresh }];
};
