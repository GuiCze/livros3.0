const db = require("../db.js")

const Schema = db.Schema;

const livroSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    ano: {
        type: Number,
        required: true,
    },
    genero: {
        type: String,
        required: true
    }
});

module.exports = db.model("Livro", livroSchema);