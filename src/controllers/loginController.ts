import bcrypt from 'bcryptjs';
import { NextFunction, Request, Response, Router } from 'express';
import * as HttpStatus from 'http-status-codes';
import { body, validationResult } from 'express-validator/check';
import config from '../config/config';
import { AuthHandler } from '../middlewares/authHandler';
import { ApiResponseError } from '../resources/interfaces/ApiResponseError';
import { UserService } from '../services/users.service';
import { LoginRequest } from '../resources/interfaces/request/loginRequest'
const loginRouter: Router = Router();
const { errors } = config;

// on routes that end in /login
// -----------------------------
loginRouter.route('/')
  .post(
    [
      body('email').isEmail(),
      body('password').isLength({ min: 1 }),
    ],
    async (req: Request, res: Response, next: NextFunction) => {



    });



const doLogin = async (loginRequest: LoginRequest) : Promise<string> =>{
  const userService = new UserService();
  let user = await userService.getByEmail(loginRequest.email);
 
  if (!user)  throw new Error(errors.emailNotFound)
  
  const isPasswordCorrect = await bcrypt.compare(loginRequest.password, user.password);
  if (isPasswordCorrect) {
    const authHandler = new AuthHandler();
    const token = authHandler.generateToken(user);
    return token;
  } 
  
}
export default loginRouter;
