import store from "../store";

const bindActionCreators = actions => {
  const boundActions = {};
  Object.entries(actions).map(action => {
    boundActions[action[0]] = (...args) => {
      return store.dispatch(action[1](...args));
    };
  });
  return boundActions;
};

export default bindActionCreators;
