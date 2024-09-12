const db = require("../db.js")

const Schema = db.Schema;

const autorSchema = new Schema({
    nome: {
        type:String,
        required: true
    },
    endereco: {
        type:Object,
        required: true
    },
    email: {
        type:String,
        required: true,
        validate: {
            validator: function (v) {
              return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);           
            },
          },
}});

module.exports = db.model("Autor", autorSchema);