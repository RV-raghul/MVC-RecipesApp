import express from "express";

import recipesRoutes from './recipes.routes.js'

const router = express.Router()

router.use('/recipes',recipesRoutes)


export default router