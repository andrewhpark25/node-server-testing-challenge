const db = require('../data/dbConfig.js');

module.exports = {
  getAll,
  add,
  findById,
  remove,
  update

};


function getAll() {
  return db('players');
}


async function add(player) {
    try {
      const [id] = await db("players").insert(player, "id");
  
      return findById(id);
    } catch (error) {
      throw error;
    }
  }
  
  function findById(id) {
    return db("players").where({ id }).first();
  }
  
  function remove(id) {
    return db("players")
      .where("id", id)
      .del();
  }
  

  function update(changes, id) {
    return db("players")
      .where('id', id)
      .update(changes)
      .then(() => findById(id));
  }
  
  