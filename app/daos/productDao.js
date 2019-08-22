const model = require ('../models');
module.exports.createProduct = function (productData, callback, errorCallback){
    let data = productData
    console.log('data',data)
    model.Product.create(data).then(response => {
        console.log('llllllllllll', response)
        callback(response)
    }).catch(error => {
        console.log('data',error)
        errorCallback(error)

    })
}
module.exports.updateProduct = function (productData, callback, errorCallback) {
    model.Product.findOne({
        where: {
            id: productData.id
        }
    }).then(
        response => {
            if (response) {
                response.update(productData).then(
                    resp => {
                        console.log("reponse on update product", resp)
                        callback(resp)
                    }
                ).catch(error => {
                    errorCallback(error)
                })
            }
        }
    ).catch(error => {
        errorCallback(error)
    })
 }  
 module.exports.deleteProduct = function (productData, callback, errorCallback) {
    model.Product.destroy({
        where: {
            id: productData
        }
    }).then(
        response => {
            if (response) {
               callback(response)
              
            }
        }
    ).catch(error => {
        errorCallback(error)
    })
 }  
