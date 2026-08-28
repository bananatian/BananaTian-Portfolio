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
const projectStatus = document.getElementById("projectStatus");
const projectContribution = document.getElementById("projectContribution");
const projectImage = document.getElementById("projectImage");
const heroProjectName = document.getElementById("heroProjectName");
const heroFileName = document.getElementById("heroFileName");
const itchButton = document.getElementById("itchButton");

const videoWindow = document.getElementById("videoWindow");
const projectVideo = document.getElementById("projectVideo");
const videoSource = document.getElementById("videoSource");
const videoTitle = document.getElementById("videoTitle");
const videoFileName = document.getElementById("videoFileName");
const closeVideo = document.getElementById("closeVideo");
const videoButton = document.getElementById("videoButton");

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
videoWindow.style.display = "none";

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
        description: "A monochrome arcade survival game about a Human Dog fighting an endless stream of mysterious 'Things'.",
        type: "2D / Arcade Survival",
        role: "Solo Developer",
        tools: "Unity / C# / Piskel / GarageBand",
        status: "Released",
        about: "Originally created as a university assignment, Doggie Kicker grew into a complete solo project as I developed its own characters, world concept, pixel art and music.",
        contribution: "Developed the core gameplay systems in Unity, including player movement, combat, enemy spawning, health, scoring, difficulty progression and game flow. Created the game's pixel art in Piskel and arranged its background music in GarageBand.",
        heroName: "DOGGIE KICKER",
        heroFileName: "DOGGIE_KICKER.EXE",
        image: "images/doggie-kicker.png",
        video: "videos/doggie-kicker.mp4",
        itch: "https://bananatian.itch.io/doggie-kicker"
    },

    "Escape by the Dawn": {
        description: "A short low-poly 3D horror game inspired by the atmosphere and controls of early survival horror games.",
        type: "3D / Horror",
        role: "Programmer / Unity Developer",
        tools: "Unity / C# / Blender",
        status: "Released",
        about: "Created as a three-person university mini project, Escape by the Dawn follows a lost horse trying to escape a foggy forest. Players navigate through the forest by following red-ribbon markers while avoiding two different creatures. The game was designed around a PS2-era survival horror aesthetic, using low-poly visuals, fog and tank-style movement.",
        contribution: "Responsible for the full Unity implementation, including player movement, third-person camera follow, stamina, animations, monster behaviour, gameplay interactions, terrain setup, death and victory flow. I also designed and modelled the creatures and main character in Blender, including the Deer Spider and the long-limbed forest creature.",
        heroName: "ESCAPE BY THE DAWN",
        heroFileName: "ESCAPE_BY_THE_DAWN.EXE",
        image: "images/escape-by-the-dawn.png",
        video: "videos/escape-by-the-dawn.mp4",
        itch: "https://bananatian.itch.io/escape-by-the-dawn"
    },

    "Luce in the Dark": {
        description: "A 2D narrative platformer about an IT student questioning why they chose to study technology in the first place.",
        type: "2D / Narrative / Platformer / Meta",
        role: "Programmer / Unity Developer",
        tools: "Unity / C#",
        status: "Completed · Unreleased",
        about: "Created as a four-person university project, Luce in the Dark follows an IT student who is pulled into a strange world inside their computer. Across multiple levels, the player fights enemies, rescues NPCs controlled by corrupted computers, and eventually faces a question about their original passion for games.",
        contribution: "Responsible for the complete Unity implementation, including player movement, combat, health and lives, animations, camera follow, enemy behaviour, checkpoints, level flow, computer interactions, cutscenes, NPC dialogue, typewriter effects and the game's meta progression system. The meta system uses PlayerPrefs to track previous launches and alter events, endings and unlock a hidden route.",
        heroName: "LUCE IN THE DARK",
        heroFileName: "LUCE_IN_THE_DARK.EXE",
        image: "images/luce-in-the-dark.png",
        video: "videos/luce-in-the-dark.mp4",
        itch: ""
    },

    "Lucid Dream": {
        description: "A low-poly dreamcore exploration prototype created as a personal 3D learning project.",
        type: "3D / Dreamcore / Exploration",
        role: "Solo Developer",
        tools: "Unity / Blender",
        status: "Prototype",
        about: "Originally created to learn Blender and Unity's 3D workflow, Lucid Dream grew into a small exploration prototype inspired by PS2-era visuals, dreamcore aesthetics and liminal spaces. Players explore a strange low-poly world, collect objects and inspect them through an interactive item system.",
        contribution: "Created the project independently, including the low-poly character, 3D assets, materials, animations, rigging, Unity 3D setup, lighting, terrain, player movement, interactions, item pickup, item inspection, inventory system and gameplay flow.",
        heroName: "LUCID DREAM",
        heroFileName: "LUCID_DREAM.EXE",
        image: "images/lucid-dream.png",
        video: "videos/lucid-dream.mp4",
        itch: ""
    },

    "Ca Phe Legacy": {
        description: "A 2D coffee shop simulation game developed as a Final Year Project in collaboration with Kopi Saigon.",
        type: "2D / Simulation / Narrative",
        role: "Programmer / Unity Developer",
        tools: "Unity / C#",
        status: "In Development",
        about: "A collaborative Final Year Project where players take the role of Ishak, helping run Kopi Saigon by preparing customer orders, managing resources and earning money to develop the coffee shop.",
        contribution: "Responsible for the complete Unity implementation, including gameplay systems, customer and order logic, recipe and ingredient systems, serving validation, patience and tips, daily scoring, progression, unlocking, decoration, UI, game flow, saving and data management.",
        heroName: "CA PHE LEGACY",
        heroFileName: "CA_PHE_LEGACY.EXE",
        image: "images/ca-phe-legacy.png",
        video: "videos/ca-phe-legacy.mp4",
        itch: "https://bananatian.itch.io/ca-phe-legacy"
    },

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
        projectStatus.textContent = project.status;
        projectContribution.textContent = project.contribution;
        heroProjectName.textContent = project.heroName;
        heroFileName.textContent = project.heroFileName;
        projectImage.src = project.image;

        videoSource.src = project.video;
        projectVideo.load();
        videoTitle.textContent = project.heroName + " · VIDEO";
        videoFileName.textContent = project.heroFileName.replace(".EXE", ".MP4");

        if (project.itch) {
            itchButton.style.display = "block";

            itchButton.onclick = function () {
                window.open(project.itch, "_blank");
            };

        } else {
            itchButton.style.display = "none";
        }


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

// Click video
videoButton.addEventListener("click", function () {

    videoWindow.style.display = "block";

    if (projectWindow.classList.contains("projectMaximized")) {
        videoWindow.classList.add("videoSmall");
    } else {
        videoWindow.classList.remove("videoSmall");
    }

});

// Close video
closeVideo.addEventListener("click", function () {

    videoWindow.style.display = "none";
    videoWindow.classList.remove("videoSmall");

});