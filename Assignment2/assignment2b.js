

// an array of course objects
var courses = [
    { code: 'APC100', name: 'Applied Professional Communications', hours: 3, url: 'http://www.senecacollege.ca/' },
    { code: 'IPC144', name: 'Introduction to Programming Using C', hours: 4, url: 'https://scs.senecac.on.ca/~ipc144/' },
    { code: 'ULI101', name: 'Introduction to Unix/Linux and the Internet', hours: 4, url: 'https://cs.senecac.on.ca/~fac/uli101/live/' },
    { code: 'IOS110', name: 'Introduction to Operating Systems Using Windows', hours: 4, url: 'https://cs.senecac.on.ca/~fac/ios110' },
    { code: 'EAC150', name: 'College English', hours: 3, url: null }
];

// prototype object for creating student objects
var student = { 
    name: "", 
    dob: new Date(),
    sid: "",
    program: "", 
    gpa: 4.0,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }
};

/************************************************************
 * Start your Part B code here. Do not change the code above.
 ************************************************************/
// task 1

console.log("*** Task 1 ***\n\n");

// a.

var lastArrObj = courses.pop();

// b.

console.log("Course " + lastArrObj + " was deleted from the array (couses)");

// c.

var ibc233 = Object.create(courses);
ibc233.code = "IBC233";
ibc233.name = "ISERIES Business Computing";
ibc233.hours = 4;
ibc233.url = "https://scs/senecac.on.ca/~ibc233/";

var oop244 = Object.create(courses);
oop244.code = "OOP244";
oop244.name = "Introduction to Object Oriented Programming";
oop244.hours = 4;
oop244.url = "https://scs/senecac.on.ca/~oop244/";

var web222 = Object.create(courses);
web222.code = "WEB222";
web222.name = "Internet I - Internet Fundamentals";
web222.hours = 4;
web222.url = "https://scs/senecac.on.ca/~web222/";

var dbs201 = Object.create(courses);
dbs201.code = "DBS201";
dbs201.name = "Introduction to Database and SQL";
dbs201.hours = 4;
dbs201.url = "https://scs/senecac.on.ca/~dbs201/";

// d.

courses.push(ibc233, oop244, web222, dbs201);

// e.

console.log("Adding new course objects into the array (courses)");

for (var i = 0; i < courses.length; i++){
    console.log("\"" + courses[i].code + ", " + courses[i].name + ", " + courses[i].hours 
                + " hours/week, website: " + courses[i].url + "\"");
}

console.log("\n");

// task 2

console.log("*** Task 2 ***\n\n");

// a.

var student1 = Object.create(student);
student1.name= "John Smith";
student1.dob = new Date(1999, 9, 10);
student1.sid= "010456101";
student1.program = "CPA";
student1.gpa= 4.0;

var student2 = Object.create(student);
student2.name = "Jim Carrey"; 
student2.dob = new Date(1992, 1, 17);
student2.sid = "012345678";
student2.program = "CPD"; 
student2.gpa = 3.5;

var student3 = Object.create(student);
student3.name = "Justin Bieber"; 
student3.dob = new Date(1994, 3, 1);
student3.sid= "0987654321";
student3.program= "CAN"; 
student3.gpa= 3.0;

var student4 = Object.create(student);
student4.name = "Justin Trudeau";
student4.dob = new Date(1992, 1, 12);
student4.sidv= "123456789";
student4.program = "CAN";
student4.gpa= 4.0;

// b.

var students = [student1, student2, student3, student4];

// c.

console.log("Student objects in the array (student):");

students.forEach (function(student){
    console.log(student.toString());
});



