
const productDAO = require('../daos/productDao')




module.exports.createProduct = function (data, callback, errorCallback) {

    productDAO.createProduct(data, (productResponse) => {
        callback(productResponse)
    },(productError) => {
        errorCallback(productError)
    })
    
}

//update product

module.exports.updateProduct = function (data, callback, errorCallback) {

    productDAO.updateProduct(data, (productResponse) => {
        callback(productResponse)
    },(productError) => {
        errorCallback(productError)
    })
    
}

///delete product

module.exports.deleteProduct = function (data, callback, errorCallback){
    productDAO.deleteProduct(data, (productResponse) =>{
        callback(productResponse)
    },(productError) => {
        errorCallback(productError)
    })
}
