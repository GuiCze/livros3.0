const express = require("express");
const app = express();
const livros = require("./routes/livro");
const autores = require("./routes/autor");
const porta = 3000;

app.use(express.json());
app.use("/autor", autores);
app.use("/livro", livros);


app.listen(porta, () => {
    console.log(`Server running in ${porta} port.`);
})