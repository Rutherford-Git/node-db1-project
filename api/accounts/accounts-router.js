const router = require('express').Router()
const accounts = require('./accounts-model')
const md = require('./accounts-middleware')

router.get('/', async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const data = await accounts.getAll()
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', md.checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  res.json(req.account)
})

router.post('/', md.checkAccountPayload, md.checkAccountNameUnique, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const data = await accounts.create({
      name: req.body.name.trim(),
      budget: req.body.budget
    })
    res.status(201).json(data)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', md.checkAccountId, md.checkAccountPayload, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const data = await accounts.updateById(req.params.id, req.body)
    res.status(200).json(data)
  } catch (err) {
    next(err)
  }
});

router.delete('/:id',md.checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    await accounts.deleteById(req.params.id)
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({
    message: err.message
  })
})

module.exports = router;
