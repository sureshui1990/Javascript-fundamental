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

var _suresh = {
    firstName : 'suresh',
    lastName : 'betanamasay',
    age: 27,
    brothers : ['senthil','madhavan'],
    education : function(){
        return 'fullname of mine is '+this.firstName+' '+this.lastName+' and age is : '+ this.age;
    },
    address : {
        street: 'kulasekara pandian south street',
        thaluk : 'bodinayakanur',
        city : 'theni',
    }
}
 var $indiancricket = new Array();
$indiancricket.batsman = 'virat';
$indiancricket.bowler = 'bhuvaneswar';
$indiancricket.skeeper = 'dhoni';
//
//console.log($indiancricket.batsman+' is the batsman of indian team and '+ $indiancricket.bowler+' is bowler and '
//           +$indiancricket.skeeper+ ' is skeeper.');



function employee(name,age,educate,exp){
    this.name = name;
        this.age = age;
            this.education = educate;
                this.experience = exp;
                    this.describe =  function(){
                        return this.name +' , who is age '+this.age+' and '+this.education+' and having '+this.createExpression;
                    }
};
var _employeeRecord = new employee('suresh',25,'BE',26);
//console.log(_employeeRecord(age));


var newboysTeam ={};
newboysTeam.captian = "venkat";
newboysTeam.skeeper = "anandh";
newboysTeam.bowler ="ram";
newboysTeam.fielder = "vikki";
//console.log(newboysTeam.fielder);

function team(bat,ball,clow,shoes,run){
    this.batsman = bat;
    this.bowler =ball;
    this.skeeper = clow;
    this.fielder = shoes;
    this.score = run;
}
var s1 =  new team('sachin','bhuvanesh','dhoni','MRF','186');
var s2 =  new team('anwar','akdar','akmal','sony','194');
 

//console.log(s1.batsman);

console.log('indian team super batsman is :'+s1.batsman+ ' and he\'s hightest score is : '+s1.score+' and  best bowler is -> '+s1.bowler+ ' skeeper is -> '+s1.skeeper);

console.log('Pakistan team super batsman is :'+s2.batsman+ ' and he\'s hightest score is : '+s2.score+' and  best bowler is -> '+s2.bowler+ ' skeeper is -> '+s2.skeeper);




















