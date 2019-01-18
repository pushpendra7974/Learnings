"use strict";
var Result;
(function (Result) {
    Result[Result["Pass"] = 1] = "Pass";
    Result[Result["Fail"] = -1] = "Fail";
    Result[Result["Promoted"] = 0] = "Promoted";
})(Result || (Result = {}));
;
function Student() {
    var iSid = 100;
    var sSname = "Pushpendra Singh";
    var bIsActive = true;
    var arMarks = [45, 67, 89];
    var total = 0;
    for (var _i = 0, arMarks_1 = arMarks; _i < arMarks_1.length; _i++) {
        var i = arMarks_1[_i];
        total += i;
    }
    var Avg = total / 3.0;
    var arContacts = ["98939494837", "8486947343", "6749345632"];
    var arDateOfBirth = [6, "Aug", 2017];
    var eResult;
    this.eResult = function () {
        if (Avg >= 35) {
            return Result.Pass;
        }
        else {
            return Result.Fail;
        }
    };
}
