exports.seed = function(knex) {
  return knex('users').insert([
    { username: 'JimmyJohnFan1352', password: 'password123', isServiceWorker: 1},
    { username: 'BigOhioStateFan12', password: 'password456', isServiceWorker: 1},
    { username: 'IHateTheLakers', password: 'password789', isServiceWorker: 1}, 
    { username: 'BadaBingBadaBoom', password: 'password987', isServiceWorker: 1}
  ]); 
};
