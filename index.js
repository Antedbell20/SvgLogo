const inquirer = require("inquirer");
const {circle, square, triangle} = require("./lib/shape");

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
