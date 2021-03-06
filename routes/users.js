let express = require('express')
let User = require('../models/user');
const asyncHandler = require('express-async-handler');
let router = express.Router();

router.get('/getallusers',asyncHandler(async (req,res)=>{
    let users = await User.find()
    res.send(users);
}))

router.get('/getuser/:id',asyncHandler(async (req,res)=>{
    let user = await User.findById(req.params.id);
    res.send(user);
}))

router.put('/edituser/:id',(req,res)=>{
    res.send('this is the update page')
})

router.post('/adduser',asyncHandler(async (req,res)=> {
    let data = await User.create({
        name: req.body.name,
        state: req.body.state,
        phone: req.body.phone,
        inBusinessSince: req.body.inBusinessSince,
        numberOfProjects: req.body.numberOfProjects,
        sizeOfFirm: req.body.sizeOfFirm,
        email: req.body.email,
        services: req.body.services,
        achievements: req.body.achievements,
        website: req.body.website,
        description: req.body.description,
        usingTemlim: req.body.usingTemlim,
        workExperience: req.body.workExperience,
        password: req.body.password,
        totalProjects: req.body.totalProjects,
        ongoingProjects: req.body.ongoingProjects,
        category: req.body.category,
        projectsDone: req.body.projectsDone
    });
    res.status(200).send(data)
}))

router.post('/login', async (req,res)=>{
    try{
        let data = await User.findOne({phone: req.body.phone})
        if(!data){
             res.status(401).send({
             error: "No user found!"
            })
            
        } else {
            if(data.password === req.body.password){
                res.send(data)
            } else {
                    res.status(401).send({
                    error: "Incorrect Password!"
                   })
            }
       }
    } catch(err){
        console.log(err);
    }

})



module.exports = router

