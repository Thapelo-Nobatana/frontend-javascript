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