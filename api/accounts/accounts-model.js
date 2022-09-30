 const db = require('../../data/db-config.js')
 
 const getAll = async () => {
  /* const result = await 
      .select('*') */
  return db('accounts')
}

const getById = async id => {
  const result = await db('accounts').where('id', id).first()
  return result 
}

const create = async account => {
  const newAccount = await db('accounts').insert(account)
  return getById(newAccount)
}

const updateById = async (id, account) => {
  // DO YOUR MAGIC
  await db('accounts').where('id', id).update(account)
  return getById(id)
}

const deleteById = id => {
  // DO YOUR MAGIC
  return db('accounts').where('id', id).del()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
