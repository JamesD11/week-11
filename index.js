var prompt = require("prompt");

var bus= require("./bus.js");

var newPupil= new Student();

prompt.start();

prompt.get(["name","gender","grade","gpa","detentions","sleepingInClass","catchPhrase"], function(err,result){
		//var pupil= new student(result.name,result.gender,result.grade,result.gpa,result.detentions, result.sleepingInClass,result.catchPhrase);
		console.log("Welcome add new students here");

newPupil.studentEntersBus(result.name,result.gender,result.grade,result.gpa,result.detentions, result.sleepingInClass,result.catchPhrase);

fs.appendfile("students.txt",JSON.stringify(newPupil.studentEntersBus) + "\r\n", function(err){
	if (err){
		throw error;
	} else {
		console.log("added student");
	}
})

})