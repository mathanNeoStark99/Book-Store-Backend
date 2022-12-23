const database = require("../models")
const Product = database.product;
const Cart = database.cart;

//Get All Products
exports.getAllProducts = async (req,res) => {
    await Product.findAll()
    .then( data => {
      res.status(200).json(data);
    }).catch( err => {
      res.status(500).json(err);
    });
}

//create New Product
exports.addProduct = async (req,res) => {
    let product = req.body;

    
    await Product.create(product)
        .then( data => {
          res.status(200).send(true);
        })
        .catch( err => {
          res.status(500).send({
            message:
              err.message
          });
        });
}

//Update Product
exports.updateProduct = async (req, res) => {
    const proId = req.params.id;
  
    await Product.update(req.body,{where: { productId: proId }})
    .then( data => {
      res.status(200).json(true);
    }).catch( err => {
      res.status(401).json(err);
    });
}

//Remove Product
exports.deleteProduct = async (req, res) => {
    const productId = req.params.id;

    await Cart.destroy({where: { cartId: productId}});
  
    await Product.destroy({where: {productId : productId }})
    .then( data => {
      res.status(200).json(true);
    }).catch( err => {
      res.status(401).json(err);
    });
}