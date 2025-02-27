import mongoose from 'mongoose'
import config from '../config/index.config.js'


main().catch( err => console.log("MongoDB Connection failed", err));

async function main() {
    await mongoose.connect(config.MONGODB_URL);
        console.log("MongoDB connected successfully")
}



export default mongoose