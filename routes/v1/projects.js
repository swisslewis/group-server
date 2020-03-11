const router = require('express').Router()
const _ = require('lodash')
const mongoose = require('mongoose')

const User = mongoose.model('User')
const Project = mongoose.model('Project')


/********** GET ALL PROJECTS **********/

router.get('/', function (req, res, next) {
    console.log('***** Get Projects *****')
    Project
        .find()
        // .populate('author')
        // .sort({ createdAt: 'desc' })
        .then(function (projects) {
            return res.json({
                projects: projects.map(function (project) {
                    return project.toJSON()
                })
            })
        })
})

//---------- END ----------//

/********** CREATE A PROJECT **********/

router.post('/', async function (req, res, next) {
    console.log('****** Create Project ******', req.body);
    let project = new Project(req.body)
    await project.save()
    return res.json({ project: project.toJSON() })
})


//---------- END ----------//





module.exports = router

// router.param('article', function (req, res, next, id) {
//     Article.findById(id)
//     .then(function (article) {
//         if(!article){
//             return res.sendStatus(404)
//         }
//         req.article = article
//         return next()
//     })
// })

// // Get all articles
// router.get('/', function (req, res, next) {
//     console.log('***** Get Articles *****')
//     Article
//         .find()
//         .populate('author')
//         .sort({ createdAt: 'desc' })
//         .then(function (articles) {
//             return res.json({
//                 articles: articles.map(function(article){
//                     return article.toJSON()
//                 })
//             })
//         })
// })
// // Get an article by id
// router.get('/:article', function (req, res, next) {
//     console.log('***** Article by id *****')
//     return res.json({ article: req.article.toJSON() })
// })


// // Create an article
// router.post('/', async function (req, res, next) {
//     let email = req.body.email
//     let user = await User.findOne({ email: email })
//     if(!user){
//         return res.status(422).json({
//             success: false, message: "User does not exist"
//         })
//     }
//     let article = new Article(req.body)
//     article.author = user
//     await article.save()
//     user.articles.push(article)
//     await user.save()
//     return res.json({ article: article.toJSON() })
// })


// // Update an article
// router.put('/:article', async function (req, res, next) {
//     console.log('***** Article Updated *****')
//     let updatedArticle = _.extend(req.article, req.body)
//     await updatedArticle.save({ article: updatedArticle.toJSON() })
//     return res.json(updatedArticle)
// })
// // delete an article
// router.delete('/:article', async function (req, res, next) {
//     console.log('***** Article Deleted *****');
//     await Article.findByIdAndRemove(req.article.id)
//     return res.sendStatus(204)
// })

