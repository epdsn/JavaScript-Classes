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



//  Assignment:
//  Create a Polygon class that has the following properties:
//  1. A constructor that takes an array of integer values describing the lengths of the polygon's sides.
//  2. A perimeter() method that returns the polygon's perimeter.

// example: 
// Create a polygon with side lengths 3, 4, and 5
// let triangle = new Polygon([3, 4, 5]);

class Polygon {
    // Star coding here:

    constructor() {

    }

    perimeter() {
        return "not impliented";
    }

    // End coding
}

// do not modify below;

if (Polygon) {
    const rectangle = new Polygon([10, 20, 10, 20]);
    const square = new Polygon([10, 10, 10, 10]);
    const pentagon = new Polygon([10, 20, 30, 40, 43]);

    console.log(rectangle.perimeter());
    console.log(square.perimeter());
    console.log(pentagon.perimeter());
}