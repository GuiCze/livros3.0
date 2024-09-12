const Autor = require("../models/autor.js")

const store = async (req, res) => {
    try{
        const autor = new Autor(req.body)
        await autor.save()
        return res.status(201).json(autor)
    }catch(erro){
        return res.status(400).json({
            errors: erro.errors
        })
    }
};

const index = async (req, res) => {
    try{
        const autor = await Autor.find()
        return res.status(200).json(autor)
    }catch(erro){
        return res.status(400).json({
            errors: erro.errors
        })
    }
};

const showById = async (req, res) => {
    try{
        const autores = await Autor.findById(req.params.id)  
        console.log(autores);
        return res.status(200).json(autores);
    }catch(erro){
        return res.status(400).json({
            errors: erro.errors
        })
    }
};

const showByNome = async (req, res) => {
    try{
        const autor = await Autor.findOne({nome:req.params.nome})
        return res.status(200).json(autor);
    }catch(erro){
        return res.status(400).json({
            errors: erro.errors
        })
    }
};

const update = async (req, res) => {
    try{
        const autor = await Autor.findByIdAndUpdate(req.params.id, req.body, {new: true})
        return res.status(200).json(autor);
    }catch(erro){
        return res.status(400).json({
            errors: erro.errors
        })
    }
};

const destroy = async (req, res) => {
    try{
        const autor = await Autor.findByIdAndDelete(req.params.id)
        return res.status(200).json(autor);
    }catch(erro){
        return res.status(400).json({
            errors: erro.errors
        })
    }
};

module.exports = {store, index, showById, showByNome, update, destroy};
