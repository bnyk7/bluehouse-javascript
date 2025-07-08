var database = [
    {
        username: "salisu",
        password: "adamu"
    }
];

var newsfeed = [
    {
        username: "Tboy",
        timeline: "Javascript is hard"
    },
    {
        username: "John",
        timeline: "good morning"
    },
    {
        username: "David",
        timeline: "Happy new month"
    }
];

var usernamePrompt = prompt("enter username");
var passwordPrompt = prompt("enter password");

function signIn (user,pass){
    if(user === database[0].username && pass === database[0].password){
        console.log(newsfeed);
    } else {
        alert("wrong details");
    }
}
signIn(usernamePrompt,passwordPrompt)