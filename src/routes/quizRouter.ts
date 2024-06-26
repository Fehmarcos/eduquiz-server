import express from "express";
import {
  deleteQuiz,
  getAllQuizzes,
  getOneQuizze,
  createQuiz,
} from "../controllers/quizController";

const quizRouter = express.Router();

// Rota para obter todos os quizzes
quizRouter.get("/", getAllQuizzes);

// Rota para obter um quiz por ID
quizRouter.get("/:id", getOneQuizze);

// Rota para salvar quiz
quizRouter.post("/create", createQuiz);

// Rota para deleter quiz
quizRouter.delete("/:id", deleteQuiz);

export default quizRouter;
