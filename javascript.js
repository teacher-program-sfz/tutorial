// JAVASCRIPT TUTORIAL
//https://teacher-program-sfz.github.io/tutorial/html.html
// ARTEN VON VARIABLEN:
var var1 = "hello world"; // änderbar Strings + numbers
let var2 = 0; // änderbar Strings + numbers
const var3 = "hello world";// nicht  änderbar Strings + numbers

// PRINT IN DER CONSOLE
var console_var = "hello world";
console.log(console_var);

//variable ändern
console.log(var1)
var1 = "bye world;" // jetzt ist die variable geändert
console.log(var1)

// GET ELEMENT IN DER HTML FILE
document.getElementById('test_id'); // element bekommen durch id "<p id="test_id">tutorial</p>"
document.getElementsByName('test_name'); // element bekommen durch name "<p name="test_name">tutorial</p>"
document.getElementsByTagName('p'); //  element bekommen durch tagname "<p>tutorial</p>" dh. jedes p wird ausgewählt
document.getElementsByClassName('test_class'); // element bekommen durch class name (wird in auch CSS benutzt) "<p class="test_class">tutorial</p>"

console.log(document.getElementById('test_id').textContent) // get die textcontent dh was darin steht
var test = ".innerHTML" // get den html text dh. <p>tutorial</p>
+ ".value" // get value of <p>tutorial</p>

// Arrays
var t_arrays = "(0)    (1)    (2)   (3)";
var array = ["test", "test2", 88, "hihi"];
console.log(array[0]);


// IF ABFRAGE
var tut_var = 0;
if (tut_var === 0) // <-- jede abfrage ob etwas ... ist
{
    // <-- wird ausgeführt wenn if abfrage zutrifft
} else {
    // <-- wird ausgeführt wenn if abfrage nicht zutrifft
}
if (tut_var === 0) // <-- jede abfrage ob etwas ... ist
{
    null
} else if (tut_var > 0) {
    // <-- gleich zu setzten mit elif (in python)
}

// ABFGRAGEN
var test =
'===' // ob etwas gleich ist
+'<' // ob etwas kleiner ist
+'<=' // ob etwas kleiner gleich ist
+'<' // ob etwas größer ist
+'<=' // ob etwas größer gleich ist

+'!==' // ob etwas nicht gleich ist


var test_if_boolean = true;
if (test_if_boolean) //<-- if (test_if_boolean === true) ist genau das selbe wie das
{console.log(test_if_boolean);}

if (!test_if_boolean) //<-- mit dem ! wird das gegenteil beschrieben dh hier wird abgefragt ob es nicht wahr ist
{console.log(test_if_boolean);}

// FOR SCHLEIFE
var number_for = 5;
//         (1)      (2)        (3)
for (var i = 0; i < number_for; i++)
    // (1) es wird eine variable erstellt, von dem punkt aus wird gezählt
    // (2) von hier aus wird bis dorthin gezählt
    // (3) beschriebt das es aufzählt
{
    // das passiert im for loop
}

// WHILE SCHLEIFE

while (false) // <-- wenn etwas wahr ist

{
    // dann mach das
}

// JSON ARRAYS

var json_array = {}; // json object

json_array["test1"] = []; //json list in test1 looks like this: {"test1": []}
json_array["test1"].push("test2");//json list in test1 looks like this: {"test1": ["test2"]}
json_array["test1"].push("test23");
json_array["test1"].push("test22");

json_array["test3"] = "ich mag affen";// json object looks like this now: {"test1": ["test2"], "test3": "ich mag affen"}

console.log(json_array)// complette json array
console.log(json_array.test3) // nur test3 gibt aus: "ich mag affen"
console.log(json_array.test1[1]) // nur test1 das 2. gibt aus : "test23"
jsonstringifyed = JSON.stringify(json_array) // macht json zu einem string

console.log(jsonstringifyed)

var newjsonstringifyed = '{'
+'    "test1": ['
+'    "test2",'
+'    "test23",'
+'    "test22"'
+'],'
+'    "test3": "ich mag affenfhdslgkjhfsdg"'
+'}'

var newjson = JSON.parse(newjsonstringifyed);// macht newjsonstringifyed zu einem json
console.log(newjson)






