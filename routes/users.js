const db = require("../models");

const users = {}

users.get = async (req, res) => {
  const data = await db.User.findAll()
    res.render('page/users', data)
    console.log(data);
}

users.create_get = (req, res) => {
  res.render('pages/create')
}

users.create_post = async (req, res) => {
  const [name, email, password, birth_date, avatar] = req.body
  const create = await db.User.create({
    name,
    email,
    password,
    birth_date,
    avatar
  })

  if (create.status === 200){
    res.render('pages/users')
  }
}
module.exports = users
