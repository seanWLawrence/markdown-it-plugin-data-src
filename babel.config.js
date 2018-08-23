// add default and flow babel presets
const presets = ['@babel/env', '@babel/flow'];

// ignore test files
const ignore = ['src/__tests__'];

// export the config file
module.exports = function(api) {
  // if NODE_ENV  is in test mode, don;t ignore the test files
  if (api.cache(() => process.env.NODE_ENV === 'test')) ignore.pop();

  // return config object
  return {
    presets,
    ignore,
    comments: false,
  };
};
