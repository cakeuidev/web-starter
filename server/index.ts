import express from 'express'

const router = express.Router()

router.use(express.json())

router.get('/api', (_, res) => {
  res.json({
    message: 'Hello, World!'
  })
})

router.use('/api', (_, res) => { res.status(404).end() })

export default router
