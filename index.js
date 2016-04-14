//could not get to fully function commented everything I was trying to do. 

var fs= require("fs");
var prompt = require("prompt");
var Student= require("./student.js");
var Bus= require ("./bus.js");

var bus= new Bus();
prompt.start();
//get student info
prompt.get(["name","gender","grade","gpa","detentions","sleepingInClass","catchPhrase"], function(err,result){
		if(err){
			throw error;
		}else{
			//use input to create new student
		var student= new Student(result.name,result.gender,result.grade,result.gpa,result.detentions, result.sleepingInClass,result.catchPhrase);
		console.log("Welcome add new students here");
		console.log("Name: " + result.name);
		console.log("Gender: " + result.gender);
		console.log("Grade: " + result.grade);
		console.log("GPA: " + result.gpa);
		console.log("Detentions: " + result.detentions);
		console.log("Sleeping:" + result.sleepingInClass);
		console.log("Catch:" + result.catchPhrase);
		//call canStudentHaveFun() from student.js to detemine based on the input if student is eligible to have fun
		student.canStudentHaveFun();
		//input student info to studentbus pushing student object into array and sotring it
		bus.studentEntersBus(student);
		//call busChatter
		bus.busChatter();
}

		

storeStudent.addStudent(result.name,result.gender,result.grade,result.gpa,result.detentions, result.sleepingInClass,result.catchPhrase);


console.log("Items?", storeStudent.items)

 

})