const Livro = require("../models/livro.js")

const store = async (req, res) => {
    try{
        const livro = new Livro(req.body)
        await livro.save()
        return res.status(201).json(livro)
    }catch(erro){
        return res.status(400).json({
            errors: erro.errors
        })
    }
};

const index = async (req, res) => {
    try{
        const livro = await Livro.find()
        return res.status(200).json(livro)
    }catch(erro){
        return res.status(400).json({
            errors: erro.errors
        })
    }
};

const showById = async (req, res) => {
    try{
        const autor = await Autor.findById(req.params.id)
        return res.status(200).json(autor);
    }catch(erro){
        return res.status(400).json({
            errors: erro.errors
        })
    }
};

const showByTitulo = async (req, res) => {
    try{
        const autor = await Autor.findOne({titulo: req.params.titulo})
        return res.status(200).json(autor);
    }catch(erro){
        return res.status(400).json({
            errors: erro.errors
        })
    }
};

const update = async (req, res) => {
    try{
        const livro = await Livro.findByIdAndUpdate(req.params.id, req.body, {new: true})
        return res.status(200).json(livro);
    }catch(erro){
        return res.status(400).json({
            errors: erro.errors
        })
    }
};

const destroy = async (req, res) => {
    try{
        const livro = await Livro.findByIdAndDelete(req.params.id)
        return res.status(200).json(livro);
    }catch(erro){
        return res.status(400).json({
            errors: erro.errors
        })
    }
};

module.exports = {store, index, showById, showByTitulo, update, destroy};