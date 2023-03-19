const express = require('express');
const router = express();
const request = require('request');
const axios = require('axios');

const cors = require('cors');
const bodyParser = require('body-parser');

router.use(cors());

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
// const User = require("../model/shopifyUserSchema"); 
// const { json } = require('body-parser');

const authToken =  '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';
const key = '69bc0889363283b61308cd6e9f15ffd0';

let customer = {
    'method': 'GET',
    'url':`https://${key}:${authToken}@store-ecom-super-assistant.myshopify.com/admin/api/2023-01/customers.json`,
    'header':{
        'Content-Type' : 'application/json'
    }    
}






router.get('/customer', (req,res)=>{
    
    request(customer, function(error,response){
        if(error) throw new Error(error);
// console.log(response.body);
    //    const users  = JSON.parse(response.body);

    //    console.log(users.customers);

    //    users.customers.map( (uSer)=>{
    //     const {first_name, last_name , email} = uSer;
    //     console.log();
    //     const user = new User({f_name:first_name, l_name:last_name , email});
              
    //    user.save();
    //    })
res.send(response.body);
    })

    
})


router.put('/UpdateCustomer',(req,res)=>{
    console.log(req.body);
    const {id, title , value} = req.body;
//    const id = 6829080510741;
//    const title = "f_name";
//    const value = "Rushikesh";

    // console.log(id);
    // let updateCustomer = {
        
    //     'method': 'PUT',
    //     'uri':`https://${key}:${authToken}@store-ecom-super-assistant.myshopify.com/admin/api/2023-01/customers/${id}.json`,
    //     'header':{
    //         'Content-Type' : 'application/json'
    //     } ,
    //     'body':JSON.stringify({'customer':{
    //         'id':id,
    //        [`${title}`]: value,
    //     }})   
    // }
    // console.log(updateCustomer.body,updateCustomer.url ,74);
    // request(updateCustomer,function(err,response){
    //     if(err) throw new Error(err);
    //     res.send(response.body);
    // })

  const  response = axios.put(`https://${key}:${authToken}@store-ecom-super-assistant.myshopify.com/admin/api/2023-01/customers/${id}.json`,

    {
        'header':{
            'X-Shopify-Token':'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'
        },
        
        'body':JSON.stringify({
               title: value,
        })
    });

            res.send(response.data);
            console.log(response.data);
            
})



module.exports = router; 