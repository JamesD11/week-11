var Student= require("./student.js");
var fs= require("fs");

var Bus= function(driverName,color,gas){
	this.studentsOnTheBus=[];
	this.driverName=driverName;
	this.color= color;
	this.gas=gas;
	this.studentEntersBus= function(){
		
		//create student using student.js and push into studentsOnTheBus array
		this.studentsOnTheBus.push(new Student(name,gender,grade,gpa,detentions,sleepingInClass,catchPhrase));
		
		//moved append from index.js to here, need a place to store students as they are entered
		//want to append new student objects inside of the array studentsOnTheBus to students.txt upon entry from the command line
		fs.appendFile("students.txt",JSON.stringify(this.studentsOnTheBus) + "\r\n", function(err){
 	if (err){
		throw error;
	} else {

 		console.log("added student");
	}
 })
	}
	this.busChatter= function(){
		//need to pull data from student.txt to compare if can have fun in order to 
		fs.readFile("students.txt","utf-8",function(err,readResult){
			if(err){
				throw error;
			}else{
				//get result and split on line break
				var student= readResult.split("\r\n");

				//for loop to walk through the readResult contents
					for (var i = 0; i < student.length-1; i++) {
						var studentJSON=JSON.parse(student[i].replace(/[\[\]']+/g,''));
						// trying to assign variable to the result of calling the canStudentHaveFun function in student.js
						// then compare to what was console.loged if it matches then console.log student[i]'s catchPhrase
						
						var fun=Student.canStudentHaveFun(student[i]);
						if(fun === "This student can have fun"){
							console.log(student[i].catchPhrase);
						}else{
							console.log("No catch phrase student on suspension!");
						}
					}

			}


		})
	}
}

module.exports=Bus;