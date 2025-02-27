import recipesModel from "../model/recipes.model.js";



//Create Recipe Controller
const createRecipe = async(req,res) => {
    try {
        let recipe = await recipesModel.findOne({ title: req.body.title })

        if(!recipe){
            await recipesModel.insertOne(req.body)
            res.status(201).send({message: "Recipe created successfully"})
        }
        else{
            res.status(400).send({message: "Recipe already exists"})
        }

    }
    
    catch(err){
        res.status(500).send({message: "Error creating recipe", error: err})

    }

}


const getAllRecipes = async(req,res) => {
    try {
        let recipes = await recipesModel.find()
        res.status(200).send(
            {data:recipes} )
    
}
catch(err){
    res.status(500).send({message: "Error fetching recipes", error: err})
}
}



const getRecipeById = async( req, res) => {
    try {
        let recipe = await recipesModel.findById(req.params.id)
        if(!recipe){
            res.status(404).send({message: "Recipe not found"})
        }
        else{
            res.status(200).send({data: recipe})
        }
}
catch(err){
    res.status(500).send({message: "Error fetching recipe", error: err})
}
}



const editRecipeById = async(req, res) => {
    try {
        let {id} = req.params
        let recipe = await recipesModel.findById(id)
        if(!recipe){
            res.status(400).send({message: "Recipe not found"})
        }
        else{
            recipe.title = req.body.title
            recipe.description = req.body.description

            await recipe.save()
            res.status(200).send({message: "Recipe updated successfully"})
        }
}catch(err){
    res.status(500).send({message: "Error updating recipe", error: err})
}
}


const deleteRecipeById = async(req,res) => {
    try {
        let {id} = req.params
        let recipe = await recipesModel.findById(id)
        if(!recipe){
            res.status(400).send({message: "Recipe not found"})
        } 
        else{
            await recipesModel.findByIdAndDelete(id)
            res.status(200).send({message: "Recipe deleted successfully"})
        }           
}
catch(err){
    res.status(500).send({message: "Error deleting recipe", error: err})
}
}







export default{
    createRecipe,
    getAllRecipes,
    getRecipeById,
    editRecipeById,
    deleteRecipeById
}