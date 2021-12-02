module.exports =
  (...funcs) =>
  arg =>
    funcs.reduce((composed, f) => f(composed), arg);
