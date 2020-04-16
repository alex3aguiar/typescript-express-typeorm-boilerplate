import { Request, Response } from 'express';
interface IRouterFunction {
    (req: Request, res: Response): void;
}