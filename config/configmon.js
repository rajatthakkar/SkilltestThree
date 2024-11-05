import mongoose from "mongoose";
const Url = 'mongodb://localhost:27017/postawayDB'
export const connectMongoose = async()=>{
     try {
        await mongoose.connect(Url,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
    }) 
    console.log("MongoDb Connected via mongoose")
     } catch (error) {
          console.log(error)
     }
}