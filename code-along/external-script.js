/*document.getElementById("demo").innerHTML = "Hello JavaScript";
alert("Hello World");
document.write("I wrote the html document");
console.log("My first log");*/


var a = 2; //iti construiesti ca a care e variabila, sa aiba valoarea 2 de acum incolo
var b = 8;
var c = a + b;
console.log(c) //rezultatul lui a+b, iti apare in console cand dai inspect

//Number-variabila de tip numar
var numberVariable = 20;

// Integers- cu numere intregi
var integerNumber = -17;

//Float-nr cu virgula
var floatNumber = 2.5; //nu poti incepe un nume de variabila cu un numar gen 1number, dar number1 poti
var FloatNumber; //conteaza felul in care scrii
console.log(floatNumber);
console.log(FloatNumber); //asta apare undifined bc ii cu F mare

//String
var name = "Cosmin"; //asta e cand ai mai multe caractere
var middleName = 'C'; //caractrele singure numai cu un apostrof

//Boolean cu valoare de adevarat fals
var isEngineStarted = true; //true or false

//Arrays-listele
var numbers = [1, 2, 3, 4, 5];
console.log(numbers);

//Objects folosesti cand ai mai multe proprietati
var car = {
type: "BMW",
model: "X5",
color: "black",
wheels: "4"
};

console.log(car.model); //asta ca sa iti accesezi doar o sigura proprietate

//Undefined-specific JS atunci cand nu dai egal cu ceva ""
var user="Cosmin"; //aici apare in console
console.log(user);
 user = "undefined"; //aici apare undefined
console.log(user);

//Null
var email = null;



