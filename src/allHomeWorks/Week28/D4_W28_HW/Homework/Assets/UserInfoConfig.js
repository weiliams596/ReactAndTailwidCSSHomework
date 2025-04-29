
export async function InsertNewUser(userName, psw, email) {
    try {
        const newUser = { "userName": userName, "password": psw, "email": email };
        const allUser = await GetUsers();
        if (allUser.some(user => user.email === email)) {
            throw new Error("User already exists");
        }
        // fetch Post request to insert new projection data
        const response = await fetch("https://67ddabf7471aaaa7428230f7.mockapi.io/MyProject/LoginInfo", { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(newUser) });
        if (response.ok) {
            return newUser;
        }
        else {
            throw new Error("Failed to insert new projection");
        }
    }
    catch (error) {
        console.log(error);
    }
}

export async function GetUsers() {
    try {
        // fetch Get request to get all projections data
        const response = await fetch("https://67ddabf7471aaaa7428230f7.mockapi.io/MyProject/LoginInfo");
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        else {
            throw new Error("Failed to get projections data");
        }
    }
    catch (error) {
        console.log(error);
    }
}

export async function DeleteUser(userID) {
    try {
        // fetch Delete request to delete projection data
        const response = await fetch(`https://67ddabf7471aaaa7428230f7.mockapi.io/MyProject/LoginInfo/${userID}`, { method: 'DELETE' });
        if (response.ok) {
            return true;
        }
        else {
            throw new Error("Failed to delete projection");
        }
    }
    catch (error) {
        console.log(error);
    }
}

export async function UpdateUser(userID, userName, psw, email) {
    try {
        const updatedUser = { "userName": userName, "password": psw, "email": email };
        // fetch Put request to update projection data
        const response = await fetch(`https://67ddabf7471aaaa7428230f7.mockapi.io/MyProject/LoginInfo/${userID}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(updatedUser) });
        if (response.ok) {
            return updatedUser;
        }
        else {
            throw new Error("Failed to update projection");
        }
    }
    catch (error) {
        console.log(error);
    }
}

export async function GetUserById(userID) {
    try {
        // fetch Get request to get projection data by id
        const response = await fetch(`https://67ddabf7471aaaa7428230f7.mockapi.io/MyProject/LoginInfo/${userID}`);
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        else {
            throw new Error("Failed to get projection by id");
        }
    }
    catch (error) {
        console.log(error);
    }
}


export async function LoginUser(email, psw) {
    try {
        const user = { "email": email, "password": psw };
        
        const allUsers = await GetUsers();
        const userFound = allUsers.find(user => user.email === email && user.password === psw);
        if (userFound) {
            return userFound;
        }
        else {
            throw new Error("Invalid email or password");
        }
    }
    catch (error) {
        console.log(error);
    }
}

export async function LoginUserByUserName(userName, psw) {
    try {
        const user = { "userName": userName, "password": psw };
        
        const allUsers = await GetUsers();
        const userFound = allUsers.find(user => user.userName === userName && user.password === psw);
        if (userFound) {
            return userFound;
        }
        else {
            throw new Error("Invalid user name or password");
        }
    }
    catch (error) {
        console.log(error);
    }
}

export async function CheckServerHaveUser(){
    try {
        const allUsers = await GetUsers();
        if (allUsers.length > 0) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (error) {
        console.log(error);
    }
}