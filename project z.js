// Sample array of student objects
const students = [{
        name: "John",
        chemistryMarks: 80,
        biologyMarks: 90,
        dateOfBirth: "05-02-2001",
    },
    {
        name: "Alice",
        chemistryMarks: 85,
        biologyMarks: 95,
        dateOfBirth: "12-08-2000",
    },
    // Add more student objects as needed
];

// Function to sort the array of student objects
function sortStudents() {
    students.sort((a, b) => {
        if (a.chemistryMarks + a.biologyMarks !== b.chemistryMarks + b.biologyMarks) {
            return (b.chemistryMarks + b.biologyMarks) - (a.chemistryMarks + a.biologyMarks);
        }
        if (a.biologyMarks !== b.biologyMarks) {
            return b.biologyMarks - a.biologyMarks;
        }
        return 0;
    });

    displayStudents();
}

// Function to display the sorted array of student objects in the table
function displayStudents() {
    const table = document.getElementById("studentTable");

    // Clear the table body
    table.innerHTML = "";

    // Create table rows for each student object
    students.forEach(student => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.chemistryMarks}</td>
      <td>${student.biologyMarks}</td>
      <td>${student.dateOfBirth}</td>
    `;
        table.appendChild(row);
    });
}

// Initial display of students
displayStudents();