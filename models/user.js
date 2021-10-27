let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
   projectId: {
    type: Array
    },
   name: {
       type: String
   },
   phone: {
       type: Number
   },
   email: {
       type: String
   },
   website: {
       type: String
   },
   address: {
       type: String
   },
   password: {
       type: String
   },
   occupation: {
       type: Array
   },
   description: {
       type: String
   },
   highlights: {
       type: Array
   },
   catalogue: {
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
       enum: ['active','inActive']
   }
})

let User = mongoose.model('user',userSchema);

module.exports = User;