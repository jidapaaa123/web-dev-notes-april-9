

export const GetAllUserAccounts = async () => {
    const url = "http://localhost:5207/userAccounts";
    const response = await fetch(url);
    return await response.json();
}

export const AddUser = async (userName) => {
    const url = "http://localhost:5207/userAccount";
    
    const newUser = {userName};
    await fetch(url, {
        method: "POST", // means we send a POST request
        headers: {
            "Content-Type": "application/json" // REQUIRED, tells C# to treat the body as a json obj...
        },
        body: JSON.stringify(newUser),
    });
}