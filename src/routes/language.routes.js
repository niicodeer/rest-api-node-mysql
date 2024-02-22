import { Router } from "express";
import { methods as languageController } from "./../controllers/language.controller";

const router = Router();

router.get("/api/languages", languageController.getLanguages);
router.post("/api/languages", languageController.addLanguages);
router.get("/api/languages/:id", languageController.getLanguage);
router.put("/api/languages/:id", languageController.updateLanguage);
router.delete("/api/languages/:id", languageController.deleteLanguage);

export default router;
