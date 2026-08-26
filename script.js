const powerButton = document.getElementById("powerButton");
const portfolioScreen = document.getElementById("portfolioScreen");

const enterButton = document.getElementById("enterButton");
const fileWindow = document.getElementById("fileWindow");
const projectsFolder = document.getElementById("projectsFolder");
const projectsWindow = document.getElementById("projectsWindow");
const closeProjects = document.getElementById("closeProjects");
const aboutMeFile = document.getElementById("aboutMeFile");

const projectWindow = document.getElementById("projectWindow");
const closeProject = document.getElementById("closeProject");

const projectTitle = document.getElementById("projectTitle");
const projectName = document.getElementById("projectName");
const projectDescription = document.getElementById("projectDescription");
const projectType = document.getElementById("projectType");
const projectRole = document.getElementById("projectRole");
const projectTools = document.getElementById("projectTools");
const projectAbout = document.getElementById("projectAbout");

const maximizeProject = document.getElementById("maximizeProject");

const aboutWindow = document.getElementById("aboutWindow");
const maximizeAbout = document.getElementById("maximizeAbout");
const closeAbout = document.getElementById("closeAbout");

const files = document.querySelectorAll(".file");

// Computer starts turned off
portfolioScreen.style.display = "none";
fileWindow.style.display = "none";
projectsWindow.style.display = "none";

// Turn computer on
powerButton.addEventListener("click", function () {

    powerButton.style.display = "none";
    portfolioScreen.style.display = "block";

});


// Open portfolio files
enterButton.addEventListener("click", function () {

    portfolioScreen.style.display = "none";
    fileWindow.style.display = "block";

});

// Project window starts hidden
projectWindow.style.display = "none";
aboutWindow.style.display = "none";

// Click AboutMe
aboutMeFile.addEventListener("click", function () {

    fileWindow.style.display = "none";
    aboutWindow.style.display = "block";

});

//Maximize AboutMe
maximizeAbout.addEventListener("click", function () {

    aboutWindow.classList.toggle("aboutMaximized");

});

// Close AboutMe
closeAbout.addEventListener("click", function () {

    aboutWindow.style.display = "none";

    aboutWindow.classList.remove("aboutMaximized");

    fileWindow.style.display = "block";

});

// Click projects
projectsFolder.addEventListener("click", function () {

    fileWindow.style.display = "none";
    projectsWindow.style.display = "block";

});

// Close projects
closeProjects.addEventListener("click", function () {

    projectsWindow.style.display = "none";
    fileWindow.style.display = "block";

});

// Project data
const projects = {

    "Doggie Kicker": {
        description: "A small 2D endless score game made as a solo project.",
        type: "2D / Endless",
        role: "Solo Developer",
        tools: "Unity / C#",
        about: "A short game focused on a simple gameplay loop and score chasing."
    },

    "Escape by the Dawn": {
        description: "A short 3D horror game created as a solo project.",
        type: "3D / Horror",
        role: "Solo Developer",
        tools: "Unity / Blender",
        about: "A small horror experience combining exploration, atmosphere and simple survival mechanics."
    },

    "Luce in the Dark": {
        description: "A 2D narrative game with meta elements and multiple endings.",
        type: "2D / Narrative / Meta",
        role: "Programmer",
        tools: "Unity / C#",
        about: "A group project focused on narrative, interaction and meta gameplay."
    },

    "Lucid Dream": {
        description: "A personal 3D dreamcore exploration game.",
        type: "3D / Dreamcore",
        role: "Solo Developer",
        tools: "Unity / Blender",
        about: "An ongoing personal project about exploring strange spaces and collecting objects."
    },

    "Ca Phe Legacy": {
        description: "A 2D coffee shop simulation game developed as a Final Year Project.",
        type: "2D / Simulation / Narrative",
        role: "Programmer",
        tools: "Unity / C#",
        about: "An ongoing collaborative project developed with a real-world coffee brand."
    }

};


// Click a project
files.forEach(function (file) {

    file.addEventListener("click", function () {

        const projectNameValue = file.dataset.project;
        const project = projects[projectNameValue];

        if (!project) {
            return;
        }

        projectTitle.textContent = projectNameValue;
        projectName.textContent = projectNameValue;
        projectDescription.textContent = project.description;
        projectType.textContent = project.type;
        projectRole.textContent = project.role;
        projectTools.textContent = project.tools;
        projectAbout.textContent = project.about;

        fileWindow.style.display = "none";
        projectWindow.style.display = "block";

    });

});

// Maximize project
maximizeProject.addEventListener("click", function () {

    projectWindow.classList.toggle("projectMaximized");

});

// Close project
closeProject.addEventListener("click", function () {

    projectWindow.style.display = "none";

    projectWindow.classList.remove("projectMaximized");

    projectsWindow.style.display = "block";

});