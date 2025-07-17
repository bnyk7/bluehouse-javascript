var database = [
    { username: "salisu", 
      password: "adamu" },
    { username: "chollo",
      password: "bigopposition" },
    { username: "ayo",
      password: "walkemdown" },
    { username: "jeffery", 
      password: "businessisbusiness" },
    { username: "sean",
      password: "fullcircle" }
];

var newsfeed = [
    { username: "Tboy", timeline: "Javascript is hard" },
    { username: "John", timeline: "good morning" },
    { username: "David", timeline: "Happy new month" }
];

var usernamePrompt = prompt("Enter username");
var passwordPrompt = prompt("Enter password");

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false;
}

function signIn(user, pass) {
    if (isUserValid(user, pass)) {
        console.log(newsfeed);
    } else {
        alert("wrong details");
    }
}

signIn(usernamePrompt, passwordPrompt);