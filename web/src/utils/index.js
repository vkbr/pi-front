
let store;

export const registerStore = appStore => {
	store = appStore;
};

export const subscribeToStore = fn => store.subscribe(fn);

export const getState = () => store.getState();

export const dispatchToStore = param => store.dispatch(param);
