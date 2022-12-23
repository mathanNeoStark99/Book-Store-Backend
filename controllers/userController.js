const database = require("../models")
const User = database.user;

//Login user
exports.userLogin = async (req,res) => {

    let email = req.body.email;
    let password = req.body.password;

    await User.findOne({where: { email: email, password: password }})
    .then( data => {
      res.status(200).json(data);
    }).catch( err => {
      res.status(500).json(err);
    });
}

//create New User
exports.createUser = async (req,res) => {
    let user = req.body;

    await User.create(user)
        .then( data => {
          res.status(200).send(data);
        })
        .catch( err => {
          res.status(500).send({
            message:
              err.message
          });
        });
}