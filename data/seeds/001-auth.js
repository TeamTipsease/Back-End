
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('auth').del()
    .then(function () {
      // Inserts seed entries
      return knex('auth').insert([
        {id: 1, username: 'JimmyJohnFan1352', password: 'password123', role: 'worker'},
        {id: 2, username: 'BigOhioStateFan12', password: 'password456', role: 'worker'},
        {id: 3, username: 'IHateTheLakers', password: 'password789', role: 'customer'}, 
        {id: 4, username: 'BadaBingBadaBoom', password: 'password987', role: 'customer'}
      ]);
    });
};
