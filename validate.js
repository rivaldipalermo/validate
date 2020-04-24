function username (user){
    var regex = /[a-z0-9]+/gi;
    return regex.test(user);
}
function password (pass){
    let regex = /(?=.{8,})/;
    return regex.test(pass);
}

module.exports = {username,password};