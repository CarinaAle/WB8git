function sum(a,b) { //asta ti functia
    var c = a + b ;
    return c; //la tema iti trebuie return, da sus nu e adunare
}

var x = sum(10, 5); //aici ti-o "chemi", aplici
console.log(x); //15

console.log(sum(20,30)); //50

function isNumberEven(number) {
    var isEven = number % 2;

    if (isEven === 0) { //if-urile verifica daca e adv sau fals
console.log("The number" + number + "is even");
}
else {
    console.log("The number" + number + "is odd.");
}
return isEven === 0; //true or false
}
console.log(isNumberEven(4));
console.log(isNumberEven(3));


//Math classes
console.log(Math.floor(4.6)); //rotunjirea in jos a lui 4.6 care e 4

console.log(Math.pow(2,5)); //2 la puterea a 5a

console.log(Math.min(2, 10, 124, -5)); //iti arata care e cel mai mic

//generare de numere random
console.log(Math.random());



var number1 = Math.floor(Math.random() * 49);
var number2 = Math.floor(Math.random () * 49);
var number3 = Math.floor(Math.random () * 49);
var number4 = Math.floor(Math.random () * 49);
var number5 = Math.floor(Math.random () * 49);
var number6 = Math.floor(Math.random () * 49);
console.log (number1, number2, number3, number4, number5, number6);


function generateWinningLotteryNumbers(numberOfResults) {
if (numberOfResults > 6){
    return;
} //daca nu ti-o pui se duce la infinit



    var number = Math.floor(Math.random() * 49);
    console.log("Lottery number: ", number);
    generateWiningLoterryNumbers(numbersOfResults + 1);
}
 generateWinningLoterryNumbers(1);

