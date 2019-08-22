'use strict';
const moment = require('moment')

const productService = require('../services/productService');

module.exports.createProduct = function (req, res) {
    let data = req.body;
    console.log('data',data);
    let responseBody = { data: "", status: 0, error: null }
    //store utc date time format
    // data.createdAt = moment().utc();
    
    productService.createProduct(
        data, (response) => {
            responseBody.status = 200
            responseBody.data = response
            res.json(responseBody)
        }, error => {
            responseBody.status = 400
            responseBody.error = error
            res.send(responseBody)
        });
}

//update product
module.exports.updateProduct = function (req, res){
    let data = req.body;
    console.log('data', data);
    let responseBody = { data: "",status:0,error: null };

    //store utc date time format
    data.updatedAt =  moment().utc();

    productService.updateProduct(
        data, (response) => {
            responseBody.status =  200
            responseBody.data = response
            res.json(responseBody)
        },error => {
            responseBody.status = 400
            responseBody.error = error
            res.send(responseBody)
        })
}
//delete users details
module.exports.deleteProduct = function (req, res){
    let data = req.params.id;
    console.log('data', data)
    let responseBody = { data: "deleted successfullty",status:0,error: null };

    

    productService.deleteProduct(
        data, (response) => {
            responseBody.status =  200
            responseBody.data = response
            res.json(responseBody)
        },error => {
            responseBody.status = 400
            responseBody.error = error
            res.send(responseBody)
        })
}
