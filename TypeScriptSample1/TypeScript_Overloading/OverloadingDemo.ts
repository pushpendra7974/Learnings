class Customer {
    CustomerId: number;
    CustomerName: string;
    CustomerBalance: number;
    CustomerSpouse: string|null|undefined;

    //Constructor Overloading
    constructor(customerid: number, customerName: string, customerBalance: number, customerSpouse?: string|null|undefined){
        this.CustomerId =customerid;
        this.CustomerName= customerName;
        this.CustomerBalance =customerBalance;
        this.CustomerSpouse =customerSpouse;
    }


    //Method Overloading
    display(id?: number){
        console.log("Customer Id : "+this.CustomerId+" Customer Name : "+ this.CustomerName +" Balance Amount : "+this.CustomerBalance + " Souse : "+this.CustomerSpouse);
    }

    deposit(amount: number):number{
        this.CustomerBalance +=amount;
        return this.CustomerBalance;
    }
}