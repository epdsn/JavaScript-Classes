function EmployeeType1(name) {
    this.name = name;

    this.getName = function() {
        return this.name;
    };
}


// The problem with this method is that each instance below
// creates a new copy of the function.
var e1 = new EmployeeType1("Eric (new object)"); // copy 1
var e2 = new EmployeeType1("Bella (new object)"); // copy 2

var employeesList = document.getElementById("employees");

employeesList.innerHTML += "<li>" + e1.getName() + "</li>";
employeesList.innerHTML += "<li>" + e2.getName() + "</li>";



// A better way is to share function calls accross all functions.
// with prototype object!
function EmployeeType2(name) {
    this.name = name;
}
// Prototype 
// fucntions are created once and can be used by many.
// allows you to override functions if necessary
EmployeeType2.prototype.getName = function() {
    return this.name;
}

var e3 = new EmployeeType2("Mark (prototyped object)");
var e4 = new EmployeeType2("Billy (prototyped object)");

employeesList.innerHTML += "<li>" + e3.getName() + "</li>";
employeesList.innerHTML += "<li>" + e4.getName() + "</li>";