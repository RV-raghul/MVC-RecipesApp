import express from 'express'
import recipesController from '../controller/recipes.controller.js'
import payloadValidator from '../middleware/payloadValidator.middleware.js'
import { createRecipeSchema , updateRecipeSchema } from '../validator/recipe.validator.js'

const router = express.Router()


router.post('/',payloadValidator(createRecipeSchema),recipesController.createRecipe)
router.get('/',recipesController.getAllRecipes)
router.get('/:id',recipesController.getRecipeById)
router.post('/:id',payloadValidator(updateRecipeSchema),recipesController.editRecipeById)
router.delete('/:id',recipesController.deleteRecipeById)





export default router