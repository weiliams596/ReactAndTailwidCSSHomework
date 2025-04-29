import axios from "axios";


export const API_URL = "https://67ddabf7471aaaa7428230f7.mockapi.io/MyProject/LoginInfo";

/*
    Data format :
    {
        "id": Object ID(Read Only),
        "name": string,
        "email": string,
        "userName":string,
        "phone": string,
        "password": string
    }
 */

export async function GetAllUser() {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function InsertUser(data) {
    try {
        const allUser = await GetAllUser();
        const user = allUser.find(user => user.email === data.email);
        if (user) {
            throw new Error('User already exists');
        }
        else {
            const response = await axios.post(API_URL, data);
            localStorage.setItem('userName',response.data.userName);
            localStorage.setItem('isLoggedIn','true');
            return response.data;
        }
    } catch (error) {
        console.error(error);
    }
}
