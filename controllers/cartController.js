const database = require("../models")
const Product = database.product;
const Cart = database.cart;

//get All Cart Items
exports.getAllProductsFromCart = async (req, res) => {
  const userId = req.params.id;
  await Cart.findAll({where: { userId: userId }})
  .then( data => {
    res.status(200).json(data);
  }).catch( err => {
    res.status(401).json(err);
  })
}

//Insert into cart
exports.insertCart = async (req, res) => {
    const body = req.body;

    const product = await Product.findOne({where: {productId: body.cartId}});

    let productQuantity = product.dataValues.quantity;

    if(productQuantity > 0){
      product.dataValues.quantity -= 1;
      await Product.update(product.dataValues,{where: { productId: product.dataValues.productId}});

      const cart = await Cart.findOne({where: { cartId: body.cartId}});

      if(cart == undefined || cart == null){
        await Cart.create(body);
      }else{
        let qty = parseInt(cart.dataValues.quantity);
        cart.dataValues.quantity = qty + 1;
        await Cart.update(cart.dataValues,{where: {cartId : cart.dataValues.cartId}});
      }

      res.status(200).send("success");
    }else{
      res.status(500).send("insufficient stock");
    }
}

//Remove Item from cart
exports.removeFromCart = async (req, res) => {

  const id = req.params.id;

  const product = await Product.findOne({where: {productId: id}});

  const cart = await Cart.findOne({where: { cartId: id}});

  if(product.dataValues == null){
    await Cart.destroy({where: {cartId : id }});
    res.status(200).send();
  }


  let originalQuantity = parseInt(product.dataValues.quantity);
  let cartQuantity = parseInt(cart.dataValues.quantity);

  product.dataValues.quantity = originalQuantity+cartQuantity;

  await Product.update(product.dataValues,{where: {productId: id}});

  await Cart.destroy({where: {cartId : id }});

  res.status(200).send();
}

//Remove Item from cart
exports.deleteAllItemsFromCart = async (req, res) => {

  const cart = await Cart.findAll();

  cart.forEach(async element =>{
    await Cart.destroy({where: {cartId : element.dataValues.cartId }});
  })
  res.status(200).json();
}