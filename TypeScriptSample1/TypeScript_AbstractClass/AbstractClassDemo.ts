abstract class Employee{
    protected EmpId : string;
    protected Name : string;
    protected BasicSalary : number;

    constructor(empid : string, name:string, basicSalary:number){
        this.EmpId = empid;
        this.Name = name;
        this.BasicSalary = basicSalary;
    }

    abstract calculateSalary(hours:number):void;

    display(){
        console.log("Eid: "+ this.EmpId+" Name: "+this.Name +" BasicSalary: "+this.BasicSalary);
    }    
}

class Lecturer extends Employee{

    calculateSalary(hours:number):void{
        let salary:number;

        //Basic salary + 2.5% HRA
        salary = this.BasicSalary * hours + (this.BasicSalary*hours)*2.5/100;
        console.log("Lecturer's Salary : "+salary);
    }

    subject : string;
    constructor(empid : string, name:string, basicSalary:number, subject: string){
        super(empid,name,basicSalary);
        this.subject = subject;
    }
    
    display(){
        super.display();
        console.log("Subject: "+this.subject);
    }
}

class LabAssistant extends Employee{

    calculateSalary(hours:number):void{
        let salary:number;

        //Basic salary + 1.8% HRA
        salary = this.BasicSalary * hours + (this.BasicSalary*hours)*1.8/100;
        console.log("Lab Assistant's Salary : "+salary);
    }

    LabNumber : string;
    constructor(empid : string, name:string, basicSalary:number, labNumber: string){
        super(empid,name,basicSalary);
        this.LabNumber = labNumber;
    }
    
    display(){
        super.display();
        console.log("Lab Number: "+this.LabNumber);
    }
}

// Sample to show example of implementing Run-time polymorphism
function test(x: number){
    let E: Employee;

    if(x == 1){
        E = new Lecturer('L101',"Pushpendra Singh",50000,"Computer Programming");
    }
    else if(x == 2){
        E = new LabAssistant('LA001',"Mohan Singh",30000,"Lab - 302");
    }

    E.display();
    E.calculateSalary(28);
}