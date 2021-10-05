const User = require("../models/user");
// function removePassword(users) {
//     let u = [];
//     if (Array.isArray(users)) {
//         users.forEach(_user => {
//             _user = _user.toObject();
//             delete _user.password;
//             delete _user.__v;
//             u.push(_user);
//         });
//         return u
//     }
//     _user = users.toObject();
//     delete _user.password;
//     delete _user.__v;
//     // u.push(_user);
//     return  _user
// }
class QueryUsers {
    getUser() {
        return {name: "kdf"}
    }
}


module.exports = QueryUsers