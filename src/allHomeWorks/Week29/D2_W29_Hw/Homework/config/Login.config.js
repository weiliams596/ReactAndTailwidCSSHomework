import { API_URL ,GetAllUser} from "./Register.config.js";

export async function LoginByEmail(email, password) {
    try{
        const userData =await GetAllUser();
        const tempUserInfo = userData.find(user => user.email === email && user.password === password);
        console.log(tempUserInfo);        
        if(tempUserInfo){
            localStorage.setItem("userName", tempUserInfo.userName);
            localStorage.setItem("isLoggedIn",'true');
            return true;
        }
        else{
            return false;
        }
    }
    catch(error){
        console.error(error);
    }
}