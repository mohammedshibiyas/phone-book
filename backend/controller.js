import schema from "./user.model.js";

export async function addTask(req,res)
{   
    const{...contact}=req.body

console.log(req.body);
res.status(201).send(schema.create({...contact}));
}