// following this pattern: https://github.com/pourya7/react-without-redux

import React, {
  createContext,
  useContext,
  useReducer,
  useCallback
} from 'react';

import {IContextProps} from "./types";
import { asyncer } from './middlewares';
import mainReducer, { initialState } from './reducers';

const GlobalStore = createContext({} as IContextProps);

export const useGlobalStore = () => useContext(GlobalStore);

export default function Provider({ children } : { children: React.ReactNode}) {
  const [ state, dispatchBase ] = useReducer(mainReducer, initialState);

  const dispatch = useCallback(asyncer(dispatchBase, state), []);

  return (
    <GlobalStore.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStore.Provider>
  );
}
