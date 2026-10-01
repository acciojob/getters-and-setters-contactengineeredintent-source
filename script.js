//complete this code
class Person {
	#name;
	#age;
	constructor(name, age){	
		this.#name = name;
		this.#age = age;
	}

	get name(){
		return this.#name;
	}

	set age(age){
		if(age > 0){
			this.#age = age;
		}	
	}
	
}

class Student extends Person {
	constructor(name){
		super(name);
	}
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	constructor(name){
		super(name);
	}
	teach(){
		console.log(`${this.name} is teaching`);
	}	
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
