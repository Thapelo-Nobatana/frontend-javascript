interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience: number;
    location: string;
    [propName: string]: any; // Allows additional properties
    contract?: boolean; // Optional property
}

// Example usage of the Teacher interface
const mick: Teacher = {
    firstName: "Mick",
    lastName: "Jagger",
    fullTimeEmployee: true,
    yearsOfExperience: 20,
    location: "London",
    contract: false, // Optional property
    subject: "Music" // Additional propert
}

// Function to print teacher details
function printTeacherDetails(teacher: Teacher): void {
    console.log(`Name: ${teacher.firstName} ${teacher.lastName}`);
    console.log(`Full Time Employee: ${teacher.fullTimeEmployee}`);
    console.log(`Years of Experience: ${teacher.yearsOfExperience}`);
    console.log(`Location: ${teacher.location}`);
    if (teacher.contract !== undefined) {
        console.log(`Contract: ${teacher.contract}`);
    }
}

// interface named Directors that extends Teacher
interface Director extends Teacher {
    numberOfReports: number;
}

// writing a function that named printTeache, it accepts two arguments firstName and lastName
function printTeacher(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`;
}

// writing a Class named StudentClass the contructor accepts firstName and lastName
class StudentClass implements StudentInterface {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

// Method named workOnHomework that returns a string
    workOnHomework(): string {
        return "Currently working";
    }
// Method named displayName that returns a string
    displayName(): string {
        return this.firstName;
    }
}



// the contstrutor of the class should be described through the interface   
interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClass;
}
// the class should be described through an interface
interface StudentInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}