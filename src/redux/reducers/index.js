import { types } from '../actions';

export default (state, action) => {
  switch (action.type) {
    case types.CREATE_WALLET:
      return {
        ...state,
        wallets: [...state.wallets, action.payload],
      };
    default:
      return state;
  }
};
