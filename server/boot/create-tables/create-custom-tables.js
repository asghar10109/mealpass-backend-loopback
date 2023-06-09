'use strict';

module.exports = function(app) {
  const numModels = Object.keys(app.models).length;
  for (let dataSource of Object.values(app.dataSources)) {
    dataSource.setMaxListeners(numModels);
  }
  var ds = app.dataSources.mySqlDs;

  ds.autoupdate('user', function(err) {
    if (err) throw err;
    console.log('account table created');
  });
  ds.autoupdate('category', function(err) {
    if (err) throw err;
    console.log('category table created');
  });
  ds.autoupdate('resturant', function(err) {
    if (err) throw err;
    console.log('resturant table created');
  });
  // ds.autoupdate('accountprofile', function(err) {
  //   if (err) throw err;
  //   console.log('accountprofile created');
  // });
  // ds.autoupdate('medicine', function(err) {
  //   if (err) throw err;
  //   console.log('medicine table created');
  // });
  // ds.autoupdate('favourite', function(err) {
  //   if (err) throw err;
  //   console.log('favourite table created');
  // });
  // ds.autoupdate('databaseSync', function(err) {
  //   if (err) throw err;
  //   console.log('databaseSync table created');
  // });
  // ds.autoupdate('databaseSyncConfig', function(err) {
  //   if (err) throw err;
  //   console.log('databaseSyncConfig table created');
  // });
};
