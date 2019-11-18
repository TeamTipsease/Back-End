exports.seed = function(knex) {
  return knex('users').insert([
    {id: 1, username: 'JimmyJohnFan1352', password: 'password123', isServiceWorker: 1},
    {id: 2, username: 'BigOhioStateFan12', password: 'password456', isServiceWorker: 1},
    {id: 3, username: 'IHateTheLakers', password: 'password789', isServiceWorker: 1}, 
    {id: 4, username: 'BadaBingBadaBoom', password: 'password987', isServiceWorker: 1}
  ]); 
};
