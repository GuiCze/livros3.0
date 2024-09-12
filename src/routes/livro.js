const express = require("express");
const router = express.Router();
const livro = require("../controllers/livro_controller.js");

router.post("/", livro.store);
router.get("/", livro.index);
router.get("/:id", livro.showById);
router.get("/titulo/:titulo", livro.showByTitulo);
router.put("/:id", livro.update);
router.delete("/:id", livro.destroy);

module.exports = router;