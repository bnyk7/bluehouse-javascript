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

function signIn(user, pass) {
    let loggedIn = false; 

    
    for (var i = 0; i < database.length; i++) {
        if (user === database[i].username && pass === database[i].password) {
            console.log("Login successful!");
            console.log("Welcome, " + user);
            console.log("Here is the newsfeed:");
            console.log(newsfeed);
            loggedIn = true;
            break;
        }
    }

    if (!loggedIn) {
        alert("Wrong username or password.");
    }
}

signIn(usernamePrompt, passwordPrompt);
