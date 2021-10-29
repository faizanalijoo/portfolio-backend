let express = require('express')
let User = require('../models/user');
let router = express.Router();

router.get('/getallusers',async (req,res)=>{
    let users = await User.find()
    res.send(users);
})

router.get('/getuser/:id',async (req,res)=>{
    let user = await User.findById(req.params.id);
    res.send(user);
})

router.post('/adduser',async (req,res)=> {

    let user = new User({
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
        workExperience: req.body.workExperience
     })

    let data = await user.save();
    res.send(data)
})

module.exports = router

