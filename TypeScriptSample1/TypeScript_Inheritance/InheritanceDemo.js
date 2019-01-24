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
        this.Empid = empid;
        this.Name = name;
        this.BasicSalary = basicSalary;
    }
    Employee.prototype.display = function () {
        console.log("Eid: " + this.Empid + " Name: " + this.Name + " BasicSalary: " + this.BasicSalary);
    };
    return Employee;
}());
var Lecturer = /** @class */ (function (_super) {
    __extends(Lecturer, _super);
    function Lecturer(empid, name, basicSalary, subject) {
        var _this = _super.call(this, empid, name, basicSalary) || this;
        _this.Subject = subject;
        return _this;
    }
    Lecturer.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log(" Subject: " + this.Subject);
    };
    return Lecturer;
}(Employee));
