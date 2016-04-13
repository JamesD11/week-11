var Student= require("./student.js");


var Bus= function(){
	this.students=[];
	this.driverName="";
	this.color= "";
	this.gas=0;
	this.studentEntersBus= function(name,gender,grade,gpa,detentions,sleepingInClass,catchPhrase){
		this.students.push(new Student(name,gender,grade,gpa,detentions,sleepingInClass,catchPhrase));
	}
	//this.busChatter= function()
}

module.exports=Bus;