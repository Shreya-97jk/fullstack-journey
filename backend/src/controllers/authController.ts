import { Request, Response } from 'express';
import * as authService from '../services/authService';

export async function signupUser(req: Request, res: Response) {
  const { email, password } = req.body;
  const user = await authService.signup(email, password);
  res.status(201).json(user);
}
export async function loginUser(req: Request, res: Response) {
  const { email, password } = req.body;
  const token = await authService.login(email, password);
  res.status(200).json({ token });
}