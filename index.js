var fs= require("fs");
var prompt = require("prompt");
var Student= require("./student.js");
var Bus= require("./bus.js");

var storeStudent= new Bus();

prompt.start();

prompt.get(["name","gender","grade","gpa","detentions","sleepingInClass","catchPhrase"], function(err,result){
		//var pupil= new student(result.name,result.gender,result.grade,result.gpa,result.detentions, result.sleepingInClass,result.catchPhrase);
		console.log("Welcome add new students here");

storeStudent.studentEntersBus(result.name,result.gender,result.grade,result.gpa,result.detentions, result.sleepingInClass,result.catchPhrase);

fs.appendFile("students.txt",JSON.stringify(storeStudent.studentEntersBus) + "\r\n", function(err){
	if (err){
		throw error;
	} else {
		console.log("added student");
	}
})

})