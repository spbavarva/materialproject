const College = require("../models/college")


exports.createCollege=(req,res)=>{
    
    const {name,description}=req.body;

    let pictures=[] 
    if(req.files && req.files.length>0){
        pictures=req.files.map(file=>{
            return { img : file.location }
        })
    }
    
    const college=new College({
        name,
        description,
        pictures,
    })
    
    college.save((err,college)=>{
        if(err){
            return res.status(400).send({error:err})
        }
        if(college){
            return res.status(201).send({college,pictures:req.files})
        }
    })

}

exports.getAllColleges=async(req,res)=>{
    College.find()
        .exec((error,college)=>{
            if(error){
                return res.status(400).send({error:error})
            }
            if(college){
                return res.status(200).send({colleges:college})
            }
        })
}

exports.getCollegeById=async(req,res)=>{
    const {id}=req.params

    if(id){
        College.findOne({_id:id})
        .exec((error,college)=>{
            if(error){
                return res.status(400).send({error:error})
            }
            if(college){
                return res.status(200).send({college})
            }

        })
    }else{
        return res.status(200).send({error:"params required"})
    }

}
