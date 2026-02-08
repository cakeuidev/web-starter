import express from 'express'
import cookieParser from 'cookie-parser'

const router = express.Router()

router.use(cookieParser())
router.use(express.json())
router.use(express.urlencoded({ extended: true }))

router.get('/api', (_, res) => {
  res.json({
    message: 'Hello, World!'
  })
})

router.use('/api', (_, res) => res.status(404).end())

export default router
