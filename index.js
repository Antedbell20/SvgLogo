const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require("./lib/shapes");

//adding questions 
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
        // making a list of choices
        message: "What shape do you want?",
        choices: ["circle", "square", "triangle"],
        name: "shape",
        type: "list"
    }
];
//making svg class
class svg {
    constructor(){
        this.textEl = ""
        this.shapeEl = ""
    }
    render(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeEl}${this.textEl}</svg>`

    }
    setTextEl(text,color){
        this.textEl = '<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>'
    }
    setShapeEl(shape){
        this.shapeEl = shape.render()
    }
}
//writing data to the file
function writeFile(fileName, data) {
    console.log(`writing ${data} to file ${fileName}`)
    FileSystem.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("svg logo generated");
    });
}
async function init() {
    console.log("starting");
    var svg = "";
    var svgFile = "logo.svg";
    const response = await inquirer.createPromptModule(questions);
    var userText = "";
    //making sure the response is 1-3 characters 
    if(response.text.length > 0 && response.text.length < 4) {
        userText = response.text;
    }
    else {
        console.log("please enter 1-3 characters");
    return;
    }
    console.log("user text: [" + userText + "]");
    userFontColor = answer["textColor"];
    console.log("user font color: ["+ userFontColor + "]");
    userShapeColor = answer.shape;
    console.log("user shape color: [" + userShapeColor + " ]");
    userShapeType = answer["pixelImage"];
    console.log("user entered shape = [" + userShapeType + "]");
    //figuring out what shape u chose, making the shape, and logging the shape you chose
    let userShape;
    if (userShapeType === "square" || userShapeType === "square") {
        userShape = new Square();
        console.log("user chose square");
    }
    else if (usaerShapeType === "Circle" || userShapeType === "circle") {
        userShape = new Circle();
        console.log("user chose circle");
    }
    else if (userShapeType === "Triangle" || userShapeType === "triangle") {
        userShape = new Triangle();
        console.log("user chose triangle");
    }
    else {
        console.log("not a valid shape");
    }
    userShape.setColor(userShapeColor);
    var svg = new svg();
    svg.setTextElement(userText, UserFontColor);
    svg.setShapeElement(userShape);
    svgString = svg.render();
    console.log("shape: \n\n" + svgString);
    console.log("shape generated");
    console.log("writing shape to file");
    writeToFile(svgFile, svgString);

}
init()
