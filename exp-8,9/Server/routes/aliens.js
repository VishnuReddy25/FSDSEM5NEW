const express = require('express')
const router = express.Router()
const Student = require('../models/alien')
router.get('/', async(req,res) => 
    {
        try
        {
               const stu = await Alien.find()
               res.json(stu)
        }
        catch(err)
        {
            res.send('Error ' + err)
        }
    })
    
    router.get('/:id', async(req,res) => 
    {
        try
        {
               const stu = await Alien.findById(req.params.id)
               res.json(stu)
        }
        catch(err)
        {
                res.send('Error ' + err)
            }
        })
        router.post('/', async(req,res) => 
            {
                const stu = new Student
               ({
                    name: req.body.name,
                    tech: req.body.tech,
                    sub: req.body.sub
                })
            
                try
               {
                    const a1 =  await stu.save() 
                    res.json(a1)
                }
                 catch(err)
               {
                    res.send('Error')
                }
            })
            
            // router.patch('/:id',async(req,res)=> 
            // {
            //     try
            //    {
            //         const alien = await Alien.findById(req.params.id) 
            //         alien.sub = req.body.sub
            //         const a1 = await alien.save()
            //         res.json(a1)   
            //     }
            // catch(err)
            //    {
            //         res.send('Error')
            //     }
            
            // })
            
            module.exports = router
                    