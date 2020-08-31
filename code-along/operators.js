//Aritmetic Operators
var a = 5;
var b = 3;

var c = a + b; // adunare
console.log(c);

var d = a - b;
console.log(d); //scadere

var e = a * b; // inmultire
console.log(e);

var f = a / b; //impartire
console.log(f);

var g = a % b; // ca sa aflii restul de la o impartire
console.log(g);

var h = 10; // adaugi o singura valoare la o val existenta
h++; //h = +1 or h +=1
console.log(h);

//String operators
var firstName = "Carina";
var lastName = "Duca";
var fullName = firstName + " " + lastName; //pui ghilimele cu spatiu sa iti puna spatiu intre cuvinte
console.log(fullName);

// Comparison operators ca sa faca comparatii si ofera inapoi adevarat si fals

a = 10;
b = 7;
console.log(a < b); //iti da ca ii fals
console.log(a > b);
console.log(a >= 10); //a este mai mare sau egal cu 10 care ii adv si mai ai <= mai mic sau egal
console.log(a == b); //pui 2 de = ca sa aflii daca a e egal cu b
console.log(a == "10");//true adica a ca si valoare in numar e egal cu textu 10
console.log(a === "10"); //fals,asta verifica sa fie sa fie tipul la fel, la noi numarul (a) nu e acelas cu textul(10)
console.log(a !== b); //!-semn de negatie, este a diferit de b

//Operatorii logici
var i = false;
console.log(!i);
console.log(true && true &&false); //false "and" operator
console.log(true ||  true || false); //true "or" operator



