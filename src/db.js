const mongoose = require('mongoose');

const mongoDB = "mongodb+srv://usuario:senha@cluster0.pvlc3.mongodb.net/livraria"

async function main() {
    await mongoose.connect(mongoDB);
}

main() 
    .then(() => console.log("Conectado ao MongoDB"))
    .catch((err) => console.log(err));

module.exports = mongoose;
