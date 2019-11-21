import React, { createContext } from "react";
import { useImmer } from "use-immer";

const { Consumer, Provider } = createContext();

const useModel = initialState => {
  const [state, setState] = useImmer(initialState);
  return [state, setState];
};

const createProvide = () => {
  function WrapProvider(props) {
    const { children, value } = props;
    const [_state, _dispatch] = useModel(value);
    return <Provider value={{ _state, _dispatch }}>{children}</Provider>;
  }
  return WrapProvider;
};

export const connect = fn => ComponentUi => () => (
  <Consumer>
    {state => {
      const { _state, _dispatch } = state
      const filterState = typeof fn === "function" ? fn(_state) : _state;
      return <ComponentUi _state={filterState} _dispatch={_dispatch} />;
    }}
  </Consumer>
);

export default createProvide;
