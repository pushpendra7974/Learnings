"use strict";
var Customer = /** @class */ (function () {
    function Customer(customerid, customerName, customerBalance) {
        this.CustomerId = customerid;
        this.CustomerName = customerName;
        this.CustomerBalance = customerBalance;
    }
    Customer.prototype.display = function () {
        console.log("Customer Id : " + this.CustomerId + " Customer Name : " + this.CustomerName + " Balance Amount : " + this.CustomerBalance);
    };
    Customer.prototype.deposit = function (amount) {
        this.CustomerBalance += amount;
        return this.CustomerBalance;
    };
    return Customer;
}());
