"use strict";
function VarSample() {
    var Marks = 33;
    var Result = "pass";
    if (Marks < 35) {
        var Result = "fail";
        console.log("Inside if " + Result); // Fail
    }
    console.log("Inside Test " + Result); // Fail
}
function LetSample() {
    var Marks = 33;
    var Result = "pass";
    if (Marks < 35) {
        var Result_1 = "fail";
        console.log("Inside if " + Result_1); // Fail
    }
    console.log("Inside Test " + Result); // Fail
}
