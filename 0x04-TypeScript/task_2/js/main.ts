// creating a Director class 
class Director {
    workFromHome():string {
        return "Working from home";
    }
    getCoffeeBreak(): string {
        return "Getting a coffe break";
    }
    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

// creating DirectorInterface with the 3 expected methods:
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}


//  creating a Teacher class
class Teacher {
    workFromHome(): string {
        return "Cannot work from home";
    }
    getCoffeeBreak(): string {
        return "Cannot have a break";
    }
    workTeacherTasks(): string {
        return "Getting to work"
    }
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Creating a fubction name createEmployee with the following requirements:

function createEmployee(salary: number | string): Teacher | Director {
    if (typeof salary === "number" && salary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
}

function isDirector(employee: Director | Teacher): employee is Director {
 return employee instanceof Director
}

function executeWork(employee: Director | Teacher): string {
  if(isDirector(employee)){
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// creating string literals with Subjects

type subjects = "Math" | "History";

function teachClass(todayClass: subjects ): string {
 if(todayClass === "Math"){
    return "Teaching Math";
 } else {
    return "Teaching History";
 }
}

