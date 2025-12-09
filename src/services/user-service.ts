// import { RegisteredUserRequest, UserResponse } from "../models/user-model";

// import { prismaClient } from "../utils/database-util";
// import { ResponseError } from "../error/rensponse-error";
// import { toUserResponse } from "../models/user-model";
// import { LoginUserRequest } from "../models/user-model";


// export class UserService{
//     static async register(request: RegisteredUserRequest): Promise<UserResponse> {
//         const validateData = validation.validate(
//             UserValidation.REGISTER,
//             request
//         );

//         const email = await prismaClient.user.findFirst({
//             where: {
//                 email: validateData.email
//             },
//         });

//         if(email){
//             throw new ResponseError(400, 'Email already exists');
//         }

//         validateData.password = await bycrypt.hash(validateData.password,10);

//         const user = await prismaClient.user.create({
//             data: {
//                 username: validateData.username,
//                 email: validateData.email,
//                 password: validateData.password,
//             },
//         });
        
//         return toUserResponse(user.id, user.username, user.email);
//     }

//     static async login(request: LoginUserRequest): Promise<UserResponse> {
//         const validateData = validation.validate(
//             UserValidation.LOGIN,
//             request
//         );

//         const user = await prismaClient.user.findFirst({
//             where: {
//                 email: validateData.email
//             },
//         });

//         if (!user) {
//             throw new ResponseError(400, 'Invalid email or password')
//         }

//         const isPasswordValid = await bycrypt.compare(validateData.password, user.password)
//         if (!isPasswordValid) {
//             throw new ResponseError(400, 'Invalid email or password')
//         }
//         return toUserResponse(user.id, user.username, user.email);
//     }
// }
