const express=require('express')
const mongoose=require('mongoose')
const alien = require('../models/alien')

const Alien=require('../models/alien')


const router =express.Router()

router.get('/',async(req,res)=>{
    try{

            const aliens=await Alien.find()
            res.json(aliens)
    }catch(err){
        res.send('ERROR '+err);
    }
   
})

router.post('/',async(req,res)=>{
    const alien= new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try{
       const a1=await alien.save()

       res.json(a1)
    }catch(err){
        res.send('Error')
    }
   
})


router.get('/:id',async(req,res)=>{
    try{

            const alien=await Alien.findById(req.params.id)
            res.json(alien)
    }catch(err){
        res.send('ERROR '+err);
    }
   
})


router.patch('/:id',async(req,res)=>{
    try{
        const alien=await Alien.findById(req.params.id)
        alien.sub=req.body.sub
        const a1= await alien.save()
        res.json(a1)

    }catch(err){
        res.send('Error')
    }
})


router.delete("/:id", async (req, res) => {
    try{
        const alienDeleted = await Alien.deleteOne({ _id: req.params.id})

        res.send(`Alien with id ${req.params.id} removed`) //template string
    }
    catch(e){
        res.send(e)
    }
})


module.exports = router

// router.delete('/:id', async(req, res) =>{
//     try{
//         const alien = await Alien.findById(req.params.id);
//         const a1 = await alien.remove();
//         res.send("Deleted " + a1.name);
//     }catch(err){
//         res.send("Error " + err);
//     }
// });




// router.delete("/:id", async (req, res) => {
//   try {
//     const alien = await Alien.findById(req.params.id);
//     const a1 = await alien.remove();
//     res.json(a1);
//   } catch (error) {
//     res.send("Error " + error);
//   }
// });






// A better (and non-specific patch method);
// router.patch("/:id", async (req, res) => {
//     try{
//         const alien = await Alien.findById(req.params.id)
//         const body = req.body
//         if(body.name) alien.name = body.name
//         if(body.tech) alien.tech = body.tech
//         if(body.sub) alien.sub = body.sub
//         res.json(await alien.save())
//     }
//     catch(e){
//         res.send(e)
//     }
// })


// router.delete("/:id", async (req, res) => {
//     try{
//         const alienDeleted = await Alien.deleteOne({ _id: req.params.id})

//         res.send(`Alien with id ${req.params.id} removed`) //template string
//     }
//     catch(e){
//         res.send(e)
//     }
// })