const express = require("express");
const router = express.Router();
const autor = require("../controllers/autor_controller.js");
const cep_endereco = require("../middlewares/cep_endereco.js");

router.post("/",cep_endereco, autor.store);
router.get("/", autor.index);
router.get("/id/:id", autor.showById);
router.get("/nome/:nome", autor.showByNome);
router.put("/:id",cep_endereco, autor.update);
router.delete("/:id", autor.destroy);

module.exports = router;

