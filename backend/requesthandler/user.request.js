import userSchema from "../modules/user.modules.js"

export async function addcar(req,res) {
    const{name,brand,cc,fuel,milage,Colour,seat,imag}=req.body
    console.log(name,brand,cc,fuel,milage,Colour,seat);
    if(!(name&&brand&&cc&&fuel&&milage&&Colour&&seat))
        return res.status(404).send({msg:"feilds are empty"});
    const data=await userSchema.findOne({name})
    if(data)
        return res.status(404).send({msg:"car already exists"});
await userSchema.create({name,brand,cc,fuel,milage,Colour,seat,imag}).then(()=>{
    return res.status(201).send({msg:"succesfully created"});

}).catch((error)=>{
    res.status(500).send({error})
})
}
