// users.js
const users = [
    { id: 1, username: "bharath", password: "123456" }
];

export function findUser(username) {
    return users.find(user => user.username === username);
}

export function validatePassword(user, password) {
    return user.password === password;
}
