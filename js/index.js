
//create alert for survey button
const surveyBtn = document.querySelector(".survey-btn");
function alertThanks() {
    alert("Thanks for your submission!")
}
surveyBtn.addEventListener("click", alertThanks)


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