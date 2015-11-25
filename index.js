module.exports = function(dbLink) {
  return {
    db: require('./db')(dbLink),
    endpoints: require('./endpoints'),
    routes: require('./routes')(dbLink),
    templateHooks: require('./template-hooks')
  };
};
