

/*****************************
* Step 1
*****************************/

var e1, e2, e3, e4, e6, e7, str;

/*****************************
* Step 2
*****************************/

// a.

function capFirstLetter(string){ 
  return string.charAt(0).toUpperCase()+string.substring(1).toLowerCase();
}

// b.

var e1 = prompt("First Name: ", "kazim");
e1 = capFirstLetter(e1);

/*****************************
* Step 3
*****************************/

// a.

var getAge = function(birthYear){
  
  var currentYear = (new Date()).getFullYear();
  
  var age = currentYear - birthYear;
  
  return age;
  
}

// b.

var e2 = prompt("Enter Birth Year: ", "1988");

// c.

var e2 = getAge(1988);

/*****************************
* Step 4
*****************************/

// a.

var e3 = prompt("College Name: ", "seneca college");

// b.

var e3String = e3.split(' ');

  for (var i = 0; i < e3String.length; i++){
       e3String[i] = capFirstLetter(e3String[i]);
  }

var e3 = e3String.join(' ');

/*****************************
* Step 5
*****************************/

// a.

var e4 = prompt("Favorite Sport: ", "hockey,football,basketball,tennis,golf");

// b.

var e4 = e4.replace("football", "soccer");

// c.

var e4Split = e4.split(',');
var e4 = e4Split;

// d.

var e5 = prompt("Extra favorite sport: ","formula 1");

e4.push(e5);

/*****************************
* Step 6
*****************************/

// a.

for(var i = 0; i < e4.length; i++){
    e4[i] = capFirstLetter(e4[i]);
}

var e4 = e4.sort();

/*****************************
* Step 7
*****************************/

// a.

function getDateString(dateObject){
  
  var day = dateObject.getDate();
  
     if (day < 10){
     day = '0' + day;
     }
  
  var month = dateObject.getMonth() + 1;
  
     if (month < 10 ){
     month = '0' + month;
     }
  
  var year = dateObject.getFullYear();
 
    var formatedDate = [year, month, day].join('-');
  
    return formatedDate;
}
  
// b.
  
var e6 = new Date();
  
var e7 = getDateString(e6);


/*****************************
* Step 8
*****************************/

// a.

var favoriteSport = "";
var string = "";

for (var i = 0 ; i < e4.length; i++){
  var favoriteSport = favoriteSport + "\n\t " + e4[i];
}

var str = string.concat("User info:\n\n", "name (e1): ", e1, "\nage (e2): ", e2, "\nschool (e3): ", e3,
             "\nfavorite sports (e4):", favoriteSport, "\ncurrent date (e7): ", e7);


// b.

console.log(str);
