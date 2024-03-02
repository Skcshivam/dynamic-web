const express = require ('express')
const hbs = require ('hbs')
const app = express()
const mongoose = require ('mongoose')
const bodyparser =require('body-parser')
const routes = require ('./routes/main')
const Detail = require ('./models/detail')
const slider =require('./models/slider')
const banner1=require("./models/banner1")
const service = require("./models/service")
const banner2 =require("./models/banner2")
const banner3 =require("./models/banner3")
const PORT = process.env.PORT || 5000;

app.use(bodyparser.urlencoded({
    extended : true
}))

app.use('',routes)
app.use('/static',express.static('public'))


app.set('view engine', 'hbs')
app.set('views','views')

hbs.registerPartials('views/partials')




mongoose.connect('mongodb://localhost:27017/website_tut')
.then (() =>{
    console.log('connected')


    // banner3.create({
    //     heading3 :" WE work for people ,not for money",
    //     paragraph3: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam mollitia commodi, maxime maiores, enim vitae fugiat accusantium explicabo reprehenderit aut eum alias exercitationem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error aliquam explicabo animi libero ex, recusandae facere totam soluta ullam porro vero ipsa adipisci officia atque.consequuntur distinctio et odio a rerum aliquid tenetur, magnam ipsa.",
    //     button3: "Click Here",
    //     Image2 : "/static/images/website.svg"
    // })

     




    // banner2.create({
    //     heading2 :" WE work for people ,not for money",
    //     paragraph2: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam mollitia commodi, maxime maiores, enim vitae fugiat accusantium explicabo reprehenderit aut eum alias exercitationem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error aliquam explicabo animi libero ex, recusandae facere totam soluta ullam porro vero ipsa adipisci officia atque.consequuntur distinctio et odio a rerum aliquid tenetur, magnam ipsa.",
    //     button2: "Click Here",
    //     Image : "/static/images/illustration-1.svg"
    // })



    // banner1.create({
    //     heading1 : "Start Learning new Technology here",
    //     paragraph1 : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta laborum nam cum rem ducimus. Soluta maxime dignissimos facilis ut similique, numquam repellat? Recusandae eos soluta provident nisi adipisci, tenetur reprehenderit alias voluptates ipsa officia!",
    //     button1 :"Start learning"
    // })

    //  service.create([
    //     {
    //         Icon : "fa-solid fa-book-open-reader",
    //         title : "provided Best Courses",
    //         description : "we are provided coureses that helps our students in learning and in placement",
    //         linkText: "https://www.google.com",
    //         link : "Check"
    //     },
    //     {
    //         Icon : "fa-solid fa-code",
    //         title : "provided Best Courses",
    //         description : "we are provided coureses that helps our students in learning and in placement",
    //         linkText: "https://www.google.com",
    //         link : "Check"
    //     },
    //     {
    //         Icon : "fa-solid fa-book-open-reader",
    //         title : "provided Best Courses",
    //         description : "we are provided coureses that helps our students in learning and in placement",
    //         linkText: "https://www.google.com",
    //         link : "Check"
    //     },
    //  ])


    // slider.create ([
    //     {
    //      title: "Learn Java very easy mannner",
    //      subtitle : "java is one of the most programming langauage",
    //      imageUrl : "/static/images/500_F_218537567_Z4W3By4FP4VTi8ncqA0Uv1RiGdcuKWnk.jpg"
    //     },
    //     {
    //      title: "what is phython",
    //         subtitle : "python is programming languag which is basically used for backend",
    //         imageUrl : "/static/images/istockphoto-1075599562-612x612.jpg"
    //        },
    //      {
    //         title: "what about Node js",
    //         subtitle : "Node is a runtime environment this is used for backend ",
    //         imageUrl : "/static/images/coding-924920_640.jpg"
    //        },
        
    // ])
    
    
    
    
    // Detail.create({
    //     brandName : "Universal Foundation" ,
    //     brandIconUrl : "",
    //     links : [{
    //         label : "Home" ,
    //         Url : "/"
    //     },
    //     {
    //         label : "services",
    //         Url : "/services"
    //     },
    //     {
    //         label : "gallery",
    //         Url : "/gallery"
    //     },
    //     {
    //         label : "contact us",
    //         Url : "/contact-us"
    //     }
    // ]
    // })
})


app.listen(PORT , () => {
    console.log("server started")
})