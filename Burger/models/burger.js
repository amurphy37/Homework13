var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function (res){
      cb(res)
    })
  },
  create: function(name, cb) {
    //hint:orm.create()
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    //hint:orm.update
  }
};

module.exports = burger;