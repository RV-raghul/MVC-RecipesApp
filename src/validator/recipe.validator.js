import Joi from "joi";

const createRecipeSchema = Joi.object({
    title:Joi.string().required(),
    description:Joi.string().required(),
    ingredients:Joi.array().items(Joi.string()).required(),
    instructions:Joi.string(),
    cook_time: Joi.number()
})

const updateRecipeSchema = Joi.object({
    title:Joi.string().required(),
    description:Joi.string().required()
})


export  {
    createRecipeSchema,
    updateRecipeSchema
}