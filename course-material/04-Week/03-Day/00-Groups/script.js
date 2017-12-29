var Black_Bear = ["Black Bear:", "Damien,", "Mike P,", "Brian"];
var Rino = ["Rino:", "Pat,", "Garrett,", "Josiah"];
var Liger = ["Liger:", "Ahmed,", "Kristin,", "Anthony,","Peter"];
var Donkey = ["Donkey:", "Alek,", "James,", "Tori,","Joe Tran"];
var Platapus = ["Platapus:", "Norman,", "Derek,", "Mike M"];
var Eagle = ["Eagle:", "Joe Cala,", "Harold,", "Brice"];
var Zebu = ["Zebu:", "Ian,", "Andrew,", "Viet"];

function printGroup(group) {
    var groups = $("#groups");
    var newGroup = $("<h2 class='col-md-6'>")
    for (var i = 0; i < group.length; i++) {        
        var name = $("<span>");        
        name.text(group[i]+ " ");
        newGroup.append(name);
    }
        groups.append(newGroup)
}

printGroup(Black_Bear); 
printGroup(Rino); 
printGroup(Liger); 
printGroup(Donkey); 
printGroup(Platapus); 
printGroup(Eagle); 
printGroup(Zebu);