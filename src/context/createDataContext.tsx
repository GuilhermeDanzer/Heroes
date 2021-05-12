import React, { useReducer, FunctionComponent, Reducer, Dispatch } from "react";

interface DataState {
  [key: string]: any;
}
interface Action {
  type: string;
  payload: any;
}

type BoundActions<T> = {
  [K in keyof T]: T[K] extends (d: Dispatch<Action>) => infer R ? R : never;
};
type ContextValue<T> = {
  state: DataState;
} & BoundActions<T>;

export const createDataContext = <T extends {}>(
  reducer: Reducer<DataState, Action>,
  actions: T,
  initialState: DataState
) => {
  const Context = React.createContext({
    state: initialState,
  } as ContextValue<T>);

  const Provider: FunctionComponent = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions = {} as BoundActions<T>;
    for (let key in actions) {
      // @ts-ignore
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
