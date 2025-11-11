import express from 'express'

import {
    createPost,
    geatAllPosts
} from '../controllers/postControllers.js'

const router = express.Router()

router.post('/', createPost)
router.get('/', getAllPosts)

export default router;