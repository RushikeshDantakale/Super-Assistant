const express = require('express');
const router = express();
const request = require('request');
const axios = require('axios');
require('@shopify/shopify-api/adapters/node');
const {shopifyApi, LATEST_API_VERSION} = require( '@shopify/shopify-api');
const cors = require('cors');
const bodyParser = require('body-parser');

router.use(cors());

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
// const User = require("../model/shopifyUserSchema"); 
// const { json } = require('body-parser');

const authToken =  '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';
const key = '46b7128caec7f37604a0ca9a6d95af03';


  







router.get('/customer',async (req,res)=>{

    let customer = {
        'method': 'GET',
        'url':`https://${key}:${authToken}@superassistant9080.myshopify.com/admin/api/2023-01/customers.json`,
        'header':{
            'Content-Type' : 'application/json'
        }    
    }

    request(customer, (error,response)=>{
        if(error) throw new Error(error);

       const users  = JSON.parse(response.body);

       

res.send(users);
    })

    
})

router.post('/customerWithId/:id',async (req,res)=>{

   const id =Number(req.params.id);

    console.log(id, 56);

    let customer = {
        'method': 'GET',
        'url':`https://${key}:${authToken}@superassistant9080.myshopify.com/admin/api/2023-01/customers/${id}.json`,
        'headers':{
            'Content-Type' : 'application/json'
        },
          
    }

    request(customer, (error,response)=>{
        if(error) throw new Error(error);

       const users  = JSON.parse(response.body);

       

res.send(users);
    })

    
})


router.put('/UpdateCustomer',(req,res)=>{

  
    const {id, title , value} = req.body.data;

    console.log(id,title,value);
    //req object which is send to sgopify api with othcode and api key
    let updateCustomer = {
        
        'method': 'PUT',
        'url':`https://${key}:${authToken}@superassistant9080.myshopify.com/admin/api/2023-01/customers/${id}.json`,
        'headers':{
            'Content-Type' : 'application/json'
        } ,
        body:JSON.stringify({'customer':{
            'id':id,
           [title]: value,
        }})   
    }
   //updating the customer name

    request(updateCustomer, (err,response)=> {
        if(err) throw new Error(err);
        res.send(response.body);
    })


            
})



module.exports = router; 