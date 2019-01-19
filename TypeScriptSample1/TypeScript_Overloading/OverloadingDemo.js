"use strict";
var Customer = /** @class */ (function () {
    //Constructor Overloading
    function Customer(customerid, customerName, customerBalance, customerSpouse) {
        this.CustomerId = customerid;
        this.CustomerName = customerName;
        this.CustomerBalance = customerBalance;
        this.CustomerSpouse = customerSpouse;
    }
    //Method Overloading
    Customer.prototype.display = function (id) {
        console.log("Customer Id : " + this.CustomerId + " Customer Name : " + this.CustomerName + " Balance Amount : " + this.CustomerBalance + " Souse : " + this.CustomerSpouse);
    };
    Customer.prototype.deposit = function (amount) {
        this.CustomerBalance += amount;
        return this.CustomerBalance;
    };
    return Customer;
}());
