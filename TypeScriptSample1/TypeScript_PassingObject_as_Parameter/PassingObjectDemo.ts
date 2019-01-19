class Address{
    AddressId:number;
    Address:string;
    City:string;
    State:string;
    Country:string;

    constructor(AddressId:number, Address:string, City:string, State:string, Country:string){
        this.AddressId = AddressId;
        this.Address = Address;
        this.City = City;
        this.State = State;
        this.Country = Country;
    }
}

class Customer {
    CustomerId: number;
    CustomerName: string;
    CustomerBalance: number;
    CustomerAddress: Address;

    constructor(customerid: number, customerName: string, customerBalance: number, customerAddress: Address){
        this.CustomerId =customerid;
        this.CustomerName= customerName;
        this.CustomerBalance =customerBalance;
        this.CustomerAddress = customerAddress;
    }

    display(){
        console.log("Customer Id : "+this.CustomerId+"<br/> Customer Name : "+ this.CustomerName +"<br/> Balance Amount : "+this.CustomerBalance+ "<br/> Address : "+this.CustomerAddress.Address);
    }

    deposit(amount: number):number{
        this.CustomerBalance +=amount;
        return this.CustomerBalance;
    }
}