const images = require("../assets/images");

/**

 * This is how information for projects is organized and entered.

 * @constructor
 * @param {string} title
 * @param {array} authors
 * @param {array} tech - Tech used in the project.
 * @param {string} demoUrl - A live demo of the project.
 * @param {string} imgUrl - The url for screenshots of the project.
 * @param {string} githubUrl - The url for the project's github.
 * @param {array} description - Paragraphs describing the project, separated into strings.

 */

class Project {
    constructor(
        title = "",
        authors = ["Alex Fukui"],
        tech = [],
        demoUrl = "",
        imgUrl = images.notFound,
        imgAlt = "",
        githubUrl = "",
        description = []
    ) {
        this.title = title;

        this.authors = authors;

        this.tech = tech;

        this.demoUrl = demoUrl;

        this.imgUrl = imgUrl;

        this.imgAlt = imgAlt;

        this.githubUrl = githubUrl;

        this.description = description;
    }
}

//TODO implement images in the Skillset class and pass to frontend.

/**

 * This is how skillsets are organized and entered.
 * @constructor
 * @param {string} title - Title of the skill set.
 * @param {array} skillsList - List of skills within the set (eg. React, Sass for Frontend).

 */

class Skillset {
    constructor(title = "", skillsList = []) {
        this.title = title;

        this.skillsList = skillsList;
    }
}

const store = {
    projects: [
        new Project(
            "ChoreRunner",

            [
                "Alex Fukui",
                "Daniel Nichols",
                "Hubert Yang",
                "Chitchanok Nancy Phiukhao",
                "Yulia Khisamutdinova",
            ],

            [
                "React.js",
                "Express.js",
                "Node.js",
                "Postgres",
                "Postgrator",
                "Enzyme",
                "Knex",
                "Chai",
                "Mocha",
            ],

            "https://chorerunner-client.now.sh/",

            images.chorerunner,

            "A screenshot of the ChoreRunner app",

            "https://github.com/thinkful-ei-gecko/ChoreRunner-Client",

            [
                "Assign chores to members of your family. You can assign point values to tasks. Compete for ranks and levels on a scoreboard!",

                "This project helped me learn the best practices for using github branches and pull requests in a team. As marketing lead, I got to organize the presentation of the project and assess user feedback by conducting a survey.",
            ]
        ),

        new Project(
            "Syntrack",

            ["Alex Fukui", "James Jenkins"],

            [
                "React.js",
                "Express.js",
                "Node.js",
                "Postgres",
                "Postgrator",
                "Cypress",
                "Chai",
                "Mocha",
            ],

            "https://alexander-jamesj-spaced-repetition.alexanderfukui.now.sh/register",

            images.syntrack,

            "A screenshot of the Syntrack app",

            "https://github.com/thinkful-ei-gecko/alexander-jamesj-spaced-repetition",

            [
                "Test your knowledge of Russian phrases with this spaced repitition quiz app. Keeps track of your total score and repeats the phrases you need the most help with.",

                "As frontend developer, I wireframed and designed the layout of the app.",
            ]
        ),

        new Project(
            "Recipeak",

            ["Alex Fukui"],

            [
                "React.js",
                "Express.js",
                "Node.js",
                "Postgres",
                "Postgrator",
                "Enzyme",
                "Knex",
                "Chai",
                "Mocha",
            ],

            "https://recipeak-client.now.sh/",

            images.recipeak,

            "A screenshot of the Recipeak app",

            "https://github.com/psychicbologna/recipeak-client",

            [
                "Craft the perfect recipe with this recipe book app that lets you convert and customize units of measurement.",
            ]
        ),
    ],

    skills: [
        new Skillset(
            "General",
            ["Javascript ES6", "Node.js", "Webpack", "Parcel v2", "Npm", "CSS Grid"]
        ),
        new Skillset(
            "Front End",
            ["HTML5", "CSS3", "Postcss", "jQuery", "React.js", "Jest"]
        ),
        new Skillset(
            "Back End",
            ["Express.js", "SQL", "RESTful API", "Postgres", "Postgrator", "Chai"]
        ),

        new Skillset(
            "Deployment, Documentation and Version Controlgi",
            ["Vercel", "Heroku", "Git", "JSDocs"]
        ),

        new Skillset(
            "CMS",
            ["Wordpress", "Wordpress Themes", "Wordpress Plugins"]
        ),

        new Skillset(
            "Design",
            ["Photoshop", "Illustrator", "Clip Studio Paint", "Inkscape", "SVG", "Digital Painting", "Logos", "Icons"]
        ),
    ],
};

export { store as default };
