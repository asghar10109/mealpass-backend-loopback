'use strict';

module.exports = function(app) {
  const numModels = Object.keys(app.models).length;
  for (let dataSource of Object.values(app.dataSources)) {
    dataSource.setMaxListeners(numModels);
  }
  var ds = app.dataSources.mySqlDs;


  ds.autoupdate('category', function(err) {
    if (err) throw err;
    console.log('category table created');
  });
  ds.autoupdate('resturant', function(err) {
    if (err) throw err;
    console.log('resturant table created');
  });
  ds.autoupdate('reservations', function(err) {
    if (err) throw err;
    console.log('reservations table created');
  });
  ds.autoupdate('reviews', function(err) {
    if (err) throw err;
    console.log('reviews table created');
  });
  ds.autoupdate('products', function(err) {
    if (err) throw err;
    console.log('products table created');
  });
  ds.autoupdate('orders', function(err) {
    if (err) throw err;
    console.log('orders table created');
  });
  ds.autoupdate('orders_details', function(err) {
    if (err) throw err;
    console.log('orders_details table created');
  });
  ds.autoupdate('testuser', function(err) {
    if (err) throw err;
    console.log('testuser table created');
  });
  ds.autoupdate('pro_variations', function(err) {
    if (err) throw err;
    console.log('pro_variations table created');
  });
  ds.autoupdate('cart', function(err) {
    if (err) throw err;
    console.log('cart table created');
  });
  ds.autoupdate('groupcart', function(err) {
    if (err) throw err;
    console.log('groupcart table created');
  });
  
 
};
