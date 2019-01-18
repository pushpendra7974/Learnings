enum Result {Pass=1, Fail=-1, Promoted=0};

function Student(){
    let iSid: number = 100;
    let sSname : string ="Pushpendra Singh";
    let bIsActive : boolean = true;

    let arMarks: Array<number> = [45,67,89];
    let total =0;

    for(let i of arMarks){ total+= i;}
    let Avg = total/3.0;

    let arContacts: string[] = ["98939494837","8486947343","6749345632"];

    let arDateOfBirth: [number,string,number] = [6,"Aug",2017];

    let eResult: Result;
    this.eResult = function(){
        if(Avg>=35){
            return Result.Pass;
        }
        else {
            return Result.Fail;
        }
    }
}