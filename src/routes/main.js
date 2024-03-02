const express = require ('express')

const data= require('../models/contact')

const routes = express.Router();

const Detail = require("../models/detail")
const slider= require('../models/slider')
const banner1= require("../models/banner1");
const service = require('../models/service');
const banner_2 =require("../models/banner2")
const banner_3 =require("../models/banner3")
const contact = require('../models/contact');



routes.get ('/', async(req,res) => {
    const details= await Detail.findOne({"_id":"65d976eccdd81adf74b52762"})
    const slides = await slider.find();
    const banner =await banner1.find();
    const services = await service.find()
    const banner02 = await banner_2.find()
    const banner03 = await banner_3.find()


    res.render("index",{
    details :details,
    slides: slides,
    banner:banner,
    services: services,
    banner02:banner02,
    banner03 : banner03


})
})

routes.get('/gallery', async (req,res) => {
    const details= await Detail.findOne({"_id":"65d976eccdd81adf74b52762"})
    
    res.render("gallery",{
    details :details
})
})

// process contact form
routes.post("/process-contact-form", async (request,response) =>{
    console.log("data  summitted")
    console.log(request.body)


    try{
        const data = await contact.create(request.body)
        console.log(data)
        response.redirect('/')

    }
    catch(e){
        console.log(e);
        response.redirect('/')
    }
})


module.exports = routes;