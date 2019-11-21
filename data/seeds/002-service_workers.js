
exports.seed = function(knex) {
  return knex('service_workers').del()
  .then(function () {
  return knex('service_workers').insert([
    {
      user_id: 1, 
      name: 'Tony', 
      month_at_job: 6,
      info: '37 yr Male living in Florida',  
      tagline: 'We are not in Kansas anymore.', 
      tip: 3, 
    },
    {
      user_id: 2, 
      name: 'Kevin',
      month_at_job: 12, 
      info: '28 yr Male living in Ohio',  
      tagline: 'Did I do that?', 
      tip: 5, 
    },
    {
      user_id: 3, 
      name: 'Jill Scott',
      month_at_job: 12, 
      info: 'Valet with the magic touch',  
      tagline: 'servin and swervin?', 
      tip: 25, 
    },
    {
      user_id: 4, 
      name: 'Joe Shmoe',
      month_at_job: 24, 
      info: '19 yr server at your local diner',  
      tagline: 'Your coffee stays hot.', 
      tip: 50, 
    }
  ]);
});
};
