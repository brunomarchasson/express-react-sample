import { useEffect, useReducer } from 'react';
import { api } from '.';

interface dataFetchState {
  isLoading: boolean;
  isError: boolean;
  data?: object | null;
}
enum dataFetchActionKind {
  FETCH_INIT = 'FETCH_INIT',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_FAILURE = 'FETCH_FAILURE',
}
interface dataFetchAction {
  type: dataFetchActionKind;
  payload?: object;
}
const dataFetchReducer = (state: dataFetchState, action: dataFetchAction) => {
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

export const useData = (url: string, opts = {}) => {
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: null,
  });

  const refresh = async () => {
    dispatch({ type: dataFetchActionKind.FETCH_INIT });
    try {
      const result = await api.get(url).json();
      dispatch({
        type: dataFetchActionKind.FETCH_SUCCESS,
        payload: result as object,
      });
    } catch (error) {
      console.error(error);
      dispatch({ type: dataFetchActionKind.FETCH_FAILURE });
    }
  };

  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      console.log(opts);
      //   if (opts.waitAuth && !isAuthentified) return;
      dispatch({ type: dataFetchActionKind.FETCH_INIT });
      try {
        const result = await api.get(url, opts).json();
        if (!didCancel) {
          dispatch({
            type: dataFetchActionKind.FETCH_SUCCESS,
            payload: result as object,
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
