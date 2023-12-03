import { Request, Response } from 'express';
import { findAllPontuacao } from '../services/pontuacao/findAllPontuacao.service';

export const getAllPontuacao = async (req: Request, res: Response) => {
  try {
    console.log('teste');
    const resp = await findAllPontuacao(req.params.id);
    return res.status(200).json(resp);
  } catch (error) {
    console.log(error);
  }
};
