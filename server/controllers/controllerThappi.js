const thappiOrder=require('../model/thappiOrder')

exports.thappi=async(req,res)=>
{
    const {name,email,number,Quantity,Purpose,comment}=req.body
    const data={
        name:name,
        email:email,
        number:number,
        Quantity:Quantity,
        Purpose:Purpose,
        comment:comment
    }

    try{
        thappiOrder.insertMany([data])
        res.json("done")
    }
    catch(e)
    {
        console.log(e)
    }
}