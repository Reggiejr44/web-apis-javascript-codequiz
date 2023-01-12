// Script for all of the questions contained in the quiz 
// Variable for the questions that has all questions, choices, and answers for the project 
var questions = [
    {
        title: "How do you write an IF statement in JavaScript?",
        choices: ["if (i == 5)", "if i == 5 then", "if i = 5", "if i = 5 then"],
        answer: "if (i == 5)"
    },
    {
        title: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        choices: ["if (i != 5)", "if i =! 5 then", "if i <> 5", "if (i <> 5)"],
        answer: "if (i != 5)"
    },
    {
        title: "How does a WHILE loop start?",
        choices: ["while (i <= 10; i++)", "while (i <= 10)", "while i = 1 to 10"],
        answer: "while (i <= 10)"
    },
    {
        title: "How does a FOR loop start?",
        choices: ["for (i = 0; i <= 5; i++)", "for (i = 0; i <= 5)", "for i = 1 to 5", "for (i <= 5; i++)"],
        answer: "for (i = 0; i <= 5; i++)"
    },
    {
        title: "How can you add a comment in a JavaScript?",
        choices: ["//This is a comment", "'This is a comment", "<!--This is a comment-->"],
        answer: "//This is a comment"
    },
    {
        title: "How do you round the number 7.25, to the nearest integer?",
        choices: ["Math.rnd(7.25)", "Math.round(7.25)", "round(7.25)", "rnd(7.25)"],
        answer: "Math.round(7.25)"
    },
    {
        title: "How do you find the number with the highest value of x and y?",
        choices: ["Math.max(x, y)", "ceil(x, y)", "top(x, y)", "Math.ceil(x, y)"],
        answer: "Math.max(x, y)"
    },
    {
        title: "JavaScript is the same as Java.",
        choices: ["False", "True"],
        answer: "False"
    },
    {
        title: "How can you detect the client's browser name?",
        choices: ["browser.name", "navigator.appName", "client.navName"],
        answer: "navigator.appName"
    },
    {
        title: "Which event occurs when the user clicks on an HTML element?",
        choices: ["onclick", "onchange", "onmouseclick", "onmouseover"],
        answer: "onclick"
    },
    {
        title: "How do you declare a JavaScript variable?",
        choices: ["var carName;", "variable carName;", "v carName;"],
        answer: "var carName;"
    },
    {
        title: "Which operator is used to assign a value to a variable?",
        choices: ["X", "*", "-", "="],
        answer: "="
    },
    {
        title: "What will the following code return: Boolean(10 > 9)",
        choices: ["NaN", "True", "False"],
        answer: "True"
    },
    {
        title: "Is JavaScript case-sensitive?",
        choices: ["Yes", "No"],
        answer: "Yes"
    },
    {
        title: "What is JavaScript?",
        choices: ["HTML", "Another form of CSS", "An API", "An object based programming language"],
        answer: "An object based programming language"
    },
    {
        title: "What are JavaScript Data types?",
        choices: ["Number", "String", "Boolean", "Object", "Undefined", "All of the above"],
        answer: "All of the above"
    },
    {
        title: "When you use var in JavaScript, what are you doing?",
        choices: ["Making a CSS identity", "creating a dependent value", "making a variable", "making a function"],
        answer: "making a variable"
    },
    {
        title: "What is the === operator",
        choices: ["Means equal to or less than", "Means two operands have the same value", "Means not equal", "Means exact"],
        answer: "Means two operands have the same value"
    },
    {
        title: "What are the types of pop up boxes avb in JS?",
        choices: ["Alert", "Prompt", "Confirm", "All of the above"],
        answer: "All of the above"
    },
    {
        title: "Inside which HTML element do we put the JavaScript?",
        choices: ["<js>", "<javascript>", "<script>", "<scripting>"],
        answer: "<script>"
    },
    {
        title: "Where is the correct place to insert a JavaScript?",
        choices: ["The <body> section", "The <head> section", "Both the <head> section and the <body> section are correct"],
        answer: "Both the <head> section and the <body> section are correct"
    },
    {
        title: "What is the correct syntax for referring to an external script called xxx.js?",
        choices: ["<script src='xxx.js'>", "<script href='xxx.js'>", "<script name='xxx.js'>"],
        answer: "<script src='xxx.js'>"
    },
    {
        title: "The external JavaScript file must contain the <script> tag.",
        choices: ["True", "False"],
        answer: "False"
    },
    {
        title: "How do you create a function in JavaScript?",
        choices: ["function myFunction()", "function:myFunction()", "function = myFunction()"],
        answer: "function myFunction()"
    },
];