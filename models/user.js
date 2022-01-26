let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
   projectId: {
       type: Array
   },
   name: {
       type: String
   },
   state: {
    type: String
    },
   phone: {
       type: Number
   },
   inBusinessSince: {
       type: String
   },
   numberOfProjects: String,
   totalProjects: String,
   ongoingProjects: String,

   projectsDone : Array,

    category: {
        type: String
    },
   
   sizeOfFirm: {
       type: String
   },
    email: {
       type: String
   },
   services: {
       type: Array
   },
   achievements: {
    type: Array
   },
   website: {
       type: String
   },
   description: {
    type: String
    },
    workExperience: {
        type: Array
    },
   usingTemlin: {
       type: Boolean
   },
   password: {
       type: String
   },
   occupation: {
       type: Array
   }, 
   launchDate: {
       type: String
   },
   paymentId: {
       type: Array
   },
   status: {
       type: String,
       enum: ['active','inActive'],
       default: 'inActive'
   }
})

let User = mongoose.model('User',userSchema);

module.exports = User;