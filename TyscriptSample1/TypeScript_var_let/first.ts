function VarSample(){
    var Marks = 33;
    var Result = "pass";

    if(Marks<35){
        var Result = "fail";
        console.log("Inside if "+ Result); // Fail
    }
    console.log("Inside Test "+ Result); // Fail
}

function LetSample(){
    var Marks = 33;
    var Result = "pass";

    if(Marks<35){
        let Result = "fail";
        console.log("Inside if "+ Result); // Fail
    }
    console.log("Inside Test "+ Result); // Fail
}