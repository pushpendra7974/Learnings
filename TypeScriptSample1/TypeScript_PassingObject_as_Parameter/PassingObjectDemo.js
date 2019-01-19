"use strict";
var Address = /** @class */ (function () {
    function Address(AddressId, Address, City, State, Country) {
        this.AddressId = AddressId;
        this.Address = Address;
        this.City = City;
        this.State = State;
        this.Country = Country;
    }
    return Address;
}());
var Customer = /** @class */ (function () {
    function Customer(customerid, customerName, customerBalance, customerAddress) {
        this.CustomerId = customerid;
        this.CustomerName = customerName;
        this.CustomerBalance = customerBalance;
        this.CustomerAddress = customerAddress;
    }
    Customer.prototype.display = function () {
        console.log("Customer Id : " + this.CustomerId + "<br/> Customer Name : " + this.CustomerName + "<br/> Balance Amount : " + this.CustomerBalance + "<br/> Address : " + this.CustomerAddress.Address);
    };
    Customer.prototype.deposit = function (amount) {
        this.CustomerBalance += amount;
        return this.CustomerBalance;
    };
    return Customer;
}());
