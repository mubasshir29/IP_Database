import express from 'express'
import { getAllData,getData, addData,editData } from './../controller/data-controller.js'

const router = express.Router()

router.get('/', getAllData)
router.get('/:id', getData)
router.post('/new', addData)
router.put('/edit/:id',editData)

export default router;