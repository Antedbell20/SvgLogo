const inquirer = require("inquirer");


const questions = [
    {
        message: "enter your text (up to 3 characters",
        name: "text",
        type: "input"
    },
    {
        message: "enter the color name you want the text to be (or hexidecimal number)",
        name: "textColor",
        type: "input"
    },
    {
        message: "enter the color name you want the shape to be (or hexidecimal number)",
        name: "shapeColor",
        type: "input"
    },
    {
        message: "What shape do you want?",
        choices: ["circle", "square", "triangle"],
        name: "shape",
        type: "list"
    }
];