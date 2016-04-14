var Student= function(name,gender,grade,gpa,detentions,sleepingInClass,catchPhrase){
	this.name=name;
	this.gender=gender;
	this.grade=grade
	this.gpa=gpa;
	this.detentions=detentions;
	this.sleepingInClass=sleepingInClass;
	this.catchPhrase=catchPhrase;

	// Comaprison function for canStudentHaveFun? using parsefloat to compare the gpa since I *think* it treats the input as a sting
	// in order to compare vs integer parseInt for detentions since it will be a  whole num, parseFloat for gpa since it may be a decimal
	this.canStudentHaveFun= function(){
			if(parseFloat(this.gpa) < 2 && parseInt(this.detentions) < 10){
				console.log("This student can have fun");
				
		}else{
				console.log("I can't have fun I'm on double secret probation");
				
		}
		
	}
}

module.exports= Student;

