const router = require('express').Router()
const _ = require('lodash')
const mongoose = require('mongoose')

const User = mongoose.model('User')
const Project = mongoose.model('Project')










module.exports = router

// router.param('user', function (req, res, next, id) {
//     User.findById(id)
//         .then(function (user) {
//             if (!User) {
//                 return res.sendStatus(404)
//             }
//             req.user = user
//             return next()
//         })
// })

// // Get all users
// router.get('/', function (req, res, next) {
//     console.log('***** Get Users *****')
//     User
//         .find()
//         .sort({ createdAt: 'desc' })
//         .then(function (users) {
//             return res.json({
//                 users: users.map(function (user) {
//                     return user.toJSON()
//                 })
//             })
//         })
// })
// // Get an user by id
// router.get('/:user', async function (req, res, next) {
//     console.log('***** User by id *****')
//     await req.user.populate('articles').execPopulate()
//     return res.json({ user: req.user.toJSON() })
// })
// // Create a user
// // router.post('/', async function (req, res, next) {
// //     console.log(req.body)
// //     let user = new User(req.body)
// //     await user.save()
// //     return res.json({ user: user.toJSON() })
// // })
// // Update a user
// router.put('/:user', async function (req, res, next) {
//     console.log('***** User Updated *****')
//     let updatedUser = _.extend(req.user, req.body)
//     await updatedUser.save({ user: updatedUser.toJSON() })
//     return res.json(updatedUser)
// })
// // delete a user
// router.delete('/:user', async function (req, res, next) {
//     console.log('***** User Deleted *****')
//     await User.findByIdAndRemove(req.user.id)
//     return res.sendStatus(204);
// })



// // Entity Releationships

// // Get a users articles
// // /v1/user/:user/articles

// router.get('/:user/articles', async function (req, res, next) {
//     let articles = await Article.find({ author: req.user })
//     return res.json({
//         articles: articles.map(function (article) {
//             return article.toJSON()
//         })
//     })
// })

// // Create an article for a user
// // POST /v1/users/:user/article
// router.post('/:user/article', async function (req, res, next) {
//     if (!req.user) {
//         return res.status(422).json({
//             success: false, message: "User does not exist"
//         })
//     }
//     let article = new Article(req.body)
//     article.author = req.user
//     await article.save()
//     req.user.articles.push(article)
//     await req.user.save()
//     return res.json({ article: article.toJSON() })
// })


// /***********
// *** AUTH ***
// ***********/

// // Login
// // POST /v1/users/login

// router.post('/login', async function (req, res, next) {
//     if (!req.body.email) {
//         return res.status(422).json({
//             success: false,
//             message: "Email cant be blank"
//         })
//     }

//     let user = await User.findOne({ email: req.body.email })
//     if (!user) {
//         return res.status(422).json({
//             success: false,
//             message: "User not found"
//         })
//     }
//     return res.json({ user: user.toJSON() })

// })

// /************************
// *** Register New User ***
// ************************/

// // Login
// // POST /v1/users/register

// router.post('/register', async function (req, res, next) {

//     if(!req.body.email){
//         return res.status(422).json({
//             success: false,
//             message: "Email cant be blank"
//         })
//     }
//     if(!req.body.firstName){
//         return res.status(422).json({
//             success: false,
//             message: "First name cant be blank"
//         })
//     }
//     if(!req.body.lastName){
//         return res.status(422).json({
//             success: false,
//             message: "Last name cant be blank"
//         })
//     }

//     let newUserEmail = await User.findOne({ email: req.body.email })
//     if (newUserEmail) {
//         return res.status(422).json({
//             success: false,
//             message: "User aleady exists"
//         })
//     }

//     let user = new User(req.body)
//     await user.save()
//     return res.json({ user: user.toJSON() })
// })




