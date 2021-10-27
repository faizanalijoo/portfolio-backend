let mongoose = require('mongoose');

let projectSchema = new mongoose.Schema({
    name: {
        type: String
    },
    userId: {
        type: Array
    }
})

let Project = mongoose.model('project',projectSchema);

module.exports = Project;