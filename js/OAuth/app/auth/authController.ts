import  {signUp as signUpLocal}  from './controllers/local';
import  {signIn as signInLocal}  from './controllers/local';




export const authController =  {
    local:{
        signUp: signUpLocal,
        signIn: signInLocal,
    }
}