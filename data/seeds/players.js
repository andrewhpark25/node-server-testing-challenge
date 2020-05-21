exports.seed = function (knex, Promise) {
  return knex('players').truncate()
  .then(function () {
  return knex('players').insert([
    {
      id:1,
      name: "Bruno Fernandes",
      team: "Manchester United",
      position:"Midfielder"
    },
    {  id:2,
      name: "Lionel Messi",
      team: "Barcelona",
      position:"Striker"
    },
    {
      id:3,
      name: "David De Gea",
      team: "Manchester United",
      position:"Goalkeeper"
    }
  ]);
})
}
 