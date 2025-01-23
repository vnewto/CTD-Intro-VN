//create alert for survey button
const surveyBtn = document.querySelector(".survey-btn");
function alertThanks() {
    alert("Thanks for your submission!");
}
surveyBtn.addEventListener("click", alertThanks);


//create list of Skills
const skills = ["JavaScript", "HTML", "CSS", "Geographic Information Systems", "ArcPro", "ArcGIS Online", "ArcGIS Field Maps", "Plant Predict", "Anderson Optimization", "SalesForce", "Tessitura", "Epic", "Renewable Energy", "Spanish Language Proficiency"];

const skillsSection = document.querySelector("#skills");

const skillsList = skillsSection.querySelector("ul");
skillsList.classList.add(["skills-bullets"]);

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}

//Create footer and add it to the body
const footer = document.createElement("footer");
const body = document.querySelector("body");
body.appendChild(footer);


// //Insert copyright text into footer
let today = new Date();
const thisYear = today.getFullYear();

const copyright = document.createElement("p");
copyright.textContent = "\u00A9 Valerie Newton " + thisYear;

footer.appendChild(copyright);


//Set up a Message Board
const messageForm = document.forms["leave_message"];
messageForm.addEventListener("submit", handleSubmit);


//hide message section if no messages
let messageBoard = document.querySelector("#messageboard");
let messagesList = messageBoard.querySelector("ul");
let numMessages = messagesList.children.length;

if(numMessages === 0) {
    messageBoard.hidden = true;
    };


function handleSubmit(event) {
    //prevent page from refreshing upon form submission
    event.preventDefault();

    //create variables for each form input
    let usersName = event.target.usersName.value;
    let usersEmail = event.target.usersEmail.value;
    let usersMessage = event.target.usersMessage.value;
    console.log(usersName, usersEmail, usersMessage);

    //create variables to display messages
    let messageSection = document.querySelector("#messageboard");
    let messageList = messageSection.querySelector("ul");
    let newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> <br> <span>${usersMessage}</span>`;

    //create remove & edit buttons
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.type = "button";
    removeButton.addEventListener("click", handleRemove);
    function handleRemove(event) {
        let entry = event.currentTarget.parentNode;
        entry.remove();
    }

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.type = "button";
    editButton.addEventListener("click", handleEdit);
    function handleEdit(event) {
        let editableText = newMessage.querySelector("span");
        console.log(editableText);
        editableText.contentEditable = true;
        editableText.style.backgroundColor ="rgba(205, 176, 113, 1)";
    }

    newMessage.appendChild(editButton);
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    //unhide message board
    messageBoard.hidden = false;
    

    //clear form after use
    messageForm.reset();
}


