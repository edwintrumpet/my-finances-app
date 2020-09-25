export const types = {
  CREATE_WALLET: 'CREATE_WALLET',
};

export const createWallet = (payload) => ({
  payload,
  type: types.CREATE_WALLET,
});
