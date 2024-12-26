import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    car:{type:String,require:true},
    brand:{type:String,require:true},
    colour:{type:String,require:true},
    cc:{type:String,require:true},
    imag:{type:String,require:true},
    fuel:{type:String,require:true},
    seat:{type:String,require:true},
    milage:{type:String,require:true},
    
})
export default mongoose.model.cars||mongoose.model("car",userSchema)
    