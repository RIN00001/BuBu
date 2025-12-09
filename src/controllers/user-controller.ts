// import {Request, Response, NextFunction} from 'express';
// import { RegisteredUserRequest, UserResponse } from '../models/user-model';
// import { UserService } from '../services/user-service';
// import { LoginUserRequest } from '../models/user-model';

// export class UserController {
//  static async register(req: Request, res: Response, next: NextFunction) {
//     try {
//         const request: RegisteredUserRequest = req.body as RegisteredUserRequest;
//         const response: UserResponse = await UserService.register(request)
//         res.status(200).json({ 
//             data: response
//          });
//     } catch (error) {
//         next(error);
//     }
//     }
//     static async login(req: Request, res: Response, next: NextFunction) {
//     try {
//         const request: LoginUserRequest = req.body as LoginUserRequest;
//         const response: UserResponse = await UserService.login(request)
//         res.status(200).json({ 
//             data: response
//          });
//     } catch (error) {
//         next(error);
//     }
    
//     }

// }