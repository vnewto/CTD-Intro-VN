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


//Insert copyright text into footer
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
messageBoard.hidden = true;

//add message to message board upon form submission
function handleSubmit(event) {
    //prevent page from refreshing upon form submission
    event.preventDefault();

    //create variables for each form input
    let usersName = event.target.usersName.value;
    let usersEmail = event.target.usersEmail.value;
    let usersMessage = event.target.usersMessage.value;

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
        //re-hide messageboard if no messages
        let newMessageCount = messageList.childElementCount;
        if(newMessageCount === 0) {
            messageBoard.hidden = true;
            } else messageBoard.hidden = false;
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

    //clear form after use
    messageForm.reset();

    messageBoard.hidden = false;

}


//Handle submit button for Energy Survey
const energySurvey = document.forms["energy_survey"];
energySurvey.addEventListener("submit", handleEnergySurvey);

function handleEnergySurvey(event) {
    //prevent page from refreshing upon form submission
    event.preventDefault();

    //create variables to collect name of energy interests
    let energyInterests = {
        solar: "https://education.nationalgeographic.org/resource/solar-energy/", 
        wind: "https://education.nationalgeographic.org/resource/wind-energy/", 
        hydro: "https://education.nationalgeographic.org/resource/hydroelectric-energy/", 
        geothermal: "https://education.nationalgeographic.org/resource/geothermal-energy/",
        ocean: "https://education.nationalgeographic.org/resource/tidal-energy/", 
        hydrogen: "https://www.nationalgeographic.com/environment/article/hydrogen-from-sunlight", 
        biomass: "https://education.nationalgeographic.org/resource/biomass-energy/"
    };
    let energySelection = event.target.energy_interest.value;
    let energySelectionStrong = energySelection.toUpperCase();

    //create new div to put in energy-survey section
    let sidebar = document.querySelector(".sidebar");
    let surveyResponseContainer = document.createElement("div");

    //create variables for response
    let energyWebsite = energyInterests[energySelection];
    let surveyResponse = document.createElement("p");
    surveyResponse.classList.add(["p-sidebar"]);
    surveyResponse.classList.add(["survey-container"]);
    surveyResponse.innerHTML = `Thank you for your interest in <strong>${energySelectionStrong}</strong> energy! Check out this <a href="${energyWebsite}">article from National Geographic</a> to learn more.`

    //add new section and text into HTML
    sidebar.appendChild(surveyResponseContainer);
    surveyResponseContainer.appendChild(surveyResponse);

    //clear form after use
    energySurvey.reset();

}

//GET request to get project data from github
const projectSection = document.querySelector("#projects");
const projectList = projectSection.querySelector("ul");

fetch("https://api.github.com/users/vnewto/repos")
    .then((response) => {
        //show error if needed
        if(!response.ok) {
            throw new Error("Data not found");
        }
        return response.json();
    })
    .then((repositories) => {
        //put project data into Project section
        for(let i = 0; i < repositories.length; i++) {
            let project = document.createElement("li")
            project.innerHTML = `<a href="${repositories[i].html_url}">${repositories[i].name}</a>`;
            projectList.appendChild(project);
        }
    })
    .catch((error) => {
        console.log(error);
        let errorMessage = document.createElement("p");
        errorMessage.innerHTML = error;
        projectList.appendChild(errorMessage);
    });





