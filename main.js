const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("Submit");
button.addEventListener("click", updateDB);

//create database
const database = firebase.database().ref();

//function to take place on "click"
function updateDB(event) {
    event.preventDefault();
    const username = usernameElement.value;
    const message = messageElement.value;
    if (username !== "" & message !== ""){
        usernameElement = ""
        messageElement = ""

        //make myJson to then push into the left_container
        let myJson = {
            USERNAME : username,
            MESSAGE : message
        }
        //push myJson to left_container
        database.push(myJson);
    }
}