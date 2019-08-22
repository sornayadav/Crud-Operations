var express = require ('express');
var router = express.Router();
var productControllers = require ('./app/controllers/productControllers')

router.post('/product/create',productControllers.createProduct)
// router.get('/product/',productControllers.getproduct)

router.post ('/product/update',productControllers.updateProduct)

router.delete ('/product/delete/:id',productControllers.deleteProduct)


module.exports = router;