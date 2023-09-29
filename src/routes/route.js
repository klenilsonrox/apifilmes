import { Router } from "express";
import { createFilmes, deleteFilmes, getFilmes, getFilmesByiD, home, updateFilmes } from "../../controllers/FilmeController.js";

const router = Router()


router.get('/', home)
router.get("/filmes", getFilmes)
router.get("/filmes/:id", getFilmesByiD)
router.post("/filmes", createFilmes)
router.put("/filmes/:id", updateFilmes)
router.delete("/filmes/:id", deleteFilmes)


export default router