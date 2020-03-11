const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    title: String,
    description: String,
    desktopUrl: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })

ProjectSchema.methods.toJSON = function ()  {
    return {
        id: this.id,
        title: this.title,
        desktopUrl: this.desktopUrl,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt
        // author: this.author.toJSON()
    }
}

mongoose.model('Project', ProjectSchema)
