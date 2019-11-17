
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('service_worker').del()
    .then(function () {
      // Inserts seed entries
      return knex('service_worker').insert([
        {id: 1, name: 'Tony', info: '37 yr Male living in Florida', work_length: '2017-08-23', tagline: 'We are not in Kansas anymore.', tip: 3, worker_id: 1},
        {id: 2, name: 'Kevin', info: '28 yr Male living in Ohio', work_length: '2018-02-12', tagline: 'Did I do that?', tip: 5, worker_id: 2}
      ]);
    });
};
