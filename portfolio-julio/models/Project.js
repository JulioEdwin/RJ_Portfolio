const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    link: String,
    tech: [String] // Exemple: ['React', 'Node.js']
});

module.exports = mongoose.model('Project', projectSchema);