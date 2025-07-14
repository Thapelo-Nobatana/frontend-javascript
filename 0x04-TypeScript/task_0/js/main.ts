// this is an interface for a student object
interface Student {
    fistName: string;
    lastName: string;   
    age: number;
    location: string;
}
// this is student 1
const student1: Student = {
    fistName: "Thapelo",
    lastName: "Nobatana",
    age: 27,
    location: "South Africa"
}
// this is student 2
const student2: Student = {
    fistName: "John",
    lastName: "Doe",
    age: 22,
    location: "USA"

}

// this is an array of students
const studentsList: Array<Student> = [student1, student2];

// this is a function that returns a table of students
function displayStudents(students: Array<Student>): void {
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");

    // Creating table headers
    const headers = ["First Name", "Last Name", "Age", "Location"];
    headers.forEach(headerText => {
        const header = document.createElement("th");
        header.textContent = headerText;
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);

    // Creating rows for each student
    students.forEach(student => {
        const row = document.createElement("tr");
        const cells = [
            student.fistName,
            student.lastName,
            student.age.toString(),
            student.location
        ];
        cells.forEach(cellText => {
            const cell = document.createElement("td");
            cell.textContent = cellText;
            row.appendChild(cell);
        });
        table.appendChild(row);
    });

    // Appending the table to the body
    document.body.appendChild(table);
}