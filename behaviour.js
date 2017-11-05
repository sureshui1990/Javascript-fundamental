function SelectText () {
        var input = document.getElementById("mytextbox");
            input.focus();
            input.setSelectionRange(0,5);
}

var batsman = [
    'sachin','sehwag','dhoni'
];
var bowlers = [
    'nehra','bhuvaneswar','bhumra'
];
//batsman.reverse();
document.write(batsman.concat(bowlers));
