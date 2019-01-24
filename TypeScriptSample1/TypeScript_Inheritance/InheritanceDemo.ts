class Employee{
    protected Empid: number;
    protected Name: string;
    protected BasicSalary: number;

    constructor(empid: number, name: string, basicSalary:number){
        this.Empid = empid;
        this.Name = name;
        this.BasicSalary = basicSalary;
    }

    display(){
        console.log("Eid: "+ this.Empid+" Name: "+this.Name +" BasicSalary: "+this.BasicSalary);
    }
}

class Lecturer extends Employee{
    protected Subject: string;

    constructor(empid: number, name: string, basicSalary:number, subject: string){
        super(empid,name,basicSalary);
        this.Subject = subject;
    }

    display(){
        super.display();
        console.log(" Subject: "+this.Subject);
    }
}