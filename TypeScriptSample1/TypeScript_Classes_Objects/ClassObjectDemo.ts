class Customer {
    CustomerId: number;
    CustomerName: string;
    CustomerBalance: number;

    constructor(customerid: number, customerName: string, customerBalance: number){
        this.CustomerId =customerid;
        this.CustomerName= customerName;
        this.CustomerBalance =customerBalance;
    }

    display(){
        console.log("Customer Id : "+this.CustomerId+" Customer Name : "+ this.CustomerName +" Balance Amount : "+this.CustomerBalance);
    }

    deposit(amount: number):number{
        this.CustomerBalance +=amount;
        return this.CustomerBalance;
    }
}