const fetchAccount = require("../_helpers/data.json")

// Dont set the name similar to file name
export const authServices = {
    fetchUser,
    fetchPermission
};

function fetchUser(){
    return fetchAccount.accounts
}

function fetchPermission(){
    return fetchAccount.permissions
}