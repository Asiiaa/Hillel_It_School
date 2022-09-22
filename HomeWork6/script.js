const students = [
    {
        id:10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7 ]
    },
    {
        id:11,
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7 ]
    },
    {
        id:12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8 ]
    },
    {
        id:13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9 ]
    }
]

let calculateGroupAverageMark = (students) => {
    let newArray = [];
    let sum; 
    for (let i = 0; i < students.length; i++) {
        sum = students[i].marks.reduce((a, b) =>  a + b);
        let result = sum / (students[i].marks.length);
        newArray.push(result);
    }
    return console.log(newArray);
};

let calculateStudentAverageMark = (student) => {
    let sum; 
    for (let i = 0; i < student.marks.length; i++) {
        sum = student.marks.reduce((a, b) =>  a + b);
        let result = sum / (student.marks.length);
        return console.log(result);
    }
};

calculateGroupAverageMark(students);
calculateStudentAverageMark(students[2]);
