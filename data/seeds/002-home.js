
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('home').del()
    .then(function () {
      // Inserts seed entries
      return knex('home').insert([
        {id: 1, name: 'Tony', description: 'Worker at Walmart', user_id: '1'},
        {id: 2, name: 'Kevin', description: 'Woker at K-Mart', user_id: '2'},
        {id: 3, name: 'Melissa', description: 'Frequent Customer', user_id: '3'}, 
        {id: 4, name: 'Barbara', description: 'Frequent Customer', user_id: '4'}
      ]);
    });
};
