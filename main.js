let usernameElement = document.getElementById("username");
let messageElement = document.getElementById("message");
const button = document.getElementById("Submit");
button.addEventListener("click", updateDB);
const login = document.getElementById("Login");
login.addEventListener("click", updateDB)
//create database
const database = firebase.database().ref();

let usernameLoginElement = document.getElementById("loginInput1");
let passwordLoginElement = document.getElementById("loginInput2");
const loginButton = document.getElementById("Login");
loginButton.addEventListener("click", updateDB);

//function to take place on "click"
function updateDB(event) {
    event.preventDefault();
    const username = usernameElement.value;
    const message = messageElement.value;
    if (username !== "" & message !== ""){
        usernameElement.value = ""
        messageElement.value = ""

        //make myJson to then push into the left_container
        let myJson = {
            USERNAME : username,
            MESSAGE : message
        }
        //push myJson to left_container
        database.push(myJson);
    }
}

database.on("child_added", addMessageToBoard);

function addMessageToBoard(rowData) {
    const data = rowData.val();
    //display name:message
    const name = data.USERNAME;
    const message = data.MESSAGE;
    
    let postDiv = document.createElement("div");
    let nameDiv = document.createElement("div");
    let messageDiv = document.createElement("div");
    let left_container = document.getElementById("left_container");
    left_container.appendChild(postDiv);
    postDiv.appendChild(nameDiv);
    postDiv.appendChild(messageDiv);
    nameDiv.innerHTML = name;
    messageDiv.innerHTML = message;
    postDiv.setAttribute("class", "postDiv");
    nameDiv.setAttribute("class", "nameDiv" );
    messageDiv.setAttribute("class", "messageDiv" );
}

/*
let usernameLoginElement = document.getElementById("loginInput1");
let passwordLoginElement = document.getElementById("loginInput2");
const button = document.getElementById("Login");
button.addEventListener("click", updateDB);
const login = document.getElementById("Login");
login.addEventListener("click", updateDB)
//create database
const database = firebase.database().ref();

//function to take place on "click"
function updateDB(event) {
    event.preventDefault();
    const username = usernameElement.value;
    const message = messageElement.value;
    if (username !== "" & message !== ""){
        usernameElement.value = ""
        messageElement.value = ""

        //make myJson to then push into the left_container
        let myJson = {
            USERNAME : username,
            MESSAGE : message
        }
        //push myJson to left_container
        database.push(myJson);
    }
}

database.on("child_added", addMessageToBoard);

function addMessageToBoard(rowData) {
    const data = rowData.val();
    //display name:message
    const name = data.USERNAME;
    const message = data.MESSAGE;
    let postDiv = document.createElement("div");
    let nameDiv = document.createElement("div");
    let messageDiv = document.createElement("div");
    let left_container = document.getElementById("left_container");
    left_container.appendChild(postDiv);
    postDiv.appendChild(nameDiv);
    postDiv.appendChild(messageDiv);
    nameDiv.innerHTML = name;
    messageDiv.innerHTML = message;
}
*/