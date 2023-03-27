import { Router} from "express";
import { deletePhrase, createPhrase, getPhrase, putPhrase, getPhrases } from "../controllers/phrase.cotrollers.js";
//Router es para crear toda una sesion de rutas y les coloca nombre

const router = Router()


router.get('/phrase',getPhrases)
router.get('/phrase/:id',getPhrase)
router.post('/phrase',createPhrase )
router.delete('/phrase/:id',deletePhrase)
router.patch('/phrase/:id',putPhrase)

export default router