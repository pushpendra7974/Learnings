"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(empid, name, basicSalary) {
        this.EmpId = empid;
        this.Name = name;
        this.BasicSalary = basicSalary;
    }
    Employee.prototype.display = function () {
        console.log("Eid: " + this.EmpId + " Name: " + this.Name + " BasicSalary: " + this.BasicSalary);
    };
    return Employee;
}());
var Lecturer = /** @class */ (function (_super) {
    __extends(Lecturer, _super);
    function Lecturer(empid, name, basicSalary, subject) {
        var _this = _super.call(this, empid, name, basicSalary) || this;
        _this.subject = subject;
        return _this;
    }
    Lecturer.prototype.calculateSalary = function (hours) {
        var salary;
        //Basic salary + 2.5% HRA
        salary = this.BasicSalary * hours + (this.BasicSalary * hours) * 2.5 / 100;
        console.log("Lecturer's Salary : " + salary);
    };
    Lecturer.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("Subject: " + this.subject);
    };
    return Lecturer;
}(Employee));
var LabAssistant = /** @class */ (function (_super) {
    __extends(LabAssistant, _super);
    function LabAssistant(empid, name, basicSalary, labNumber) {
        var _this = _super.call(this, empid, name, basicSalary) || this;
        _this.LabNumber = labNumber;
        return _this;
    }
    LabAssistant.prototype.calculateSalary = function (hours) {
        var salary;
        //Basic salary + 1.8% HRA
        salary = this.BasicSalary * hours + (this.BasicSalary * hours) * 1.8 / 100;
        console.log("Lab Assistant's Salary : " + salary);
    };
    LabAssistant.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("Lab Number: " + this.LabNumber);
    };
    return LabAssistant;
}(Employee));
// Sample to show example of implementing Run-time polymorphism
function test(x) {
    var E;
    if (x == 1) {
        E = new Lecturer('L101', "Pushpendra Singh", 50000, "Computer Programming");
    }
    else if (x == 2) {
        E = new LabAssistant('LA001', "Mohan Singh", 30000, "Lab - 302");
    }
    E.display();
    E.calculateSalary(28);
}
