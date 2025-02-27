import mongoose from "./index.model.js";

let recipesSchema = new mongoose.Schema({
    title:{ type: String, required: true} ,
    description:{ type: String, required: true} ,
    ingredients:{ type: Array, required: true} ,
    instructions: { type: String, required: true},
    cook_time: { type: Number, required:true}
},{
    collection:'recipes',
    versionKey:false
})


export default mongoose.model('recipes',recipesSchema)