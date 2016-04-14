var Student= require("./student.js");


var Pupil= function(){
	this.items= [];
	this.addStudent=function(name,gender,grade,gpa,detentions,sleepingInClass,catchPhrase){
		this.items.push (new Student(name,gender,grade,gpa,detentions,sleepingInClass,catchPhrase));
	}
}

module.exports= Pupil;