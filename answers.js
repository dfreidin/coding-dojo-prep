// page 16, in order of 1st column, 2nd column, "final countdown"

var myNumber = 42;
var myName = "David";
temp = myNumber;
myNumber = myName;
myName = temp;

for(int i=-52; i<=1066; i++) {
  console.log(i);
}

function beCheerful() {
  console.log("good morning!");
}
for(i=0; i<96; i++) {
  beCheerful();
}

for(i=-300; i<=0; i++) {
  if(i != -3 && i != -6)
  {
    console.log(i);
  }
}

i = 2000;
while(i <= 5280) {
  console.log(i);
}

function birthday(a, b) {    // birthday problem
  if((a==7 && b==8) || (a==8 && b==7)) {
    console.log("How did you know?");
  }
  else {
    console.log("Just another day...");
  }
}

function leapYear(year) {
  if(year % 400 == 0) {
    return true;
  }
  else if(year % 100 == 0) {
    return false;
  }
  else if(year % 4 == 0) {
    return true;
  }
  return false;
}

var count = 0;
for(i=5; i<=4096; i++) {
  if(i % 5 == 0) {
    console.log(i);
    count++;
  }
}
console.log(count);

i=0;
while(i<=60000) {
  if(i % 6 == 0) {
    console.log(i);
  }
  i++;
}

var to_print = ""
for(i=1; i<=100; i++) {
  if(i % 5 == 0) {
    to_print = "Coding";
    if(i % 10 == 0) {
      to_print += " Dojo";
    }
  }
  else {
    to_print = i;
  }
  console.log(to_print);
}

function know(incoming) {
  console.log(incoming);
}

var sum = 0;
for(i=-300000; i<=300000; i++) {
  if(i % 2 == 1) {
    sum += i;
  }
}
console.log(sum);
// this will equal 0, since it's symmetric around 0
// can also use Euler's formula: (a_1 + a_n) * n / 2
sum = (-299999 + 299999) * 300000 / 2;
console.log(sum);

i = 2016;
while(i > 0) {
  console.log(i);
  i -= 4;
}

function flexibleCountdown(lowNum, highNum, mult) {
  for(var i=highNum; i>=lowNum; i--) {
    if(i % mult == 0) {
      console.log(i);
    }
  }
}

function finalCountdown(param1, param2, param3, param4) {
  var i = param2;
  while(i <= param3) {
    if(i%param2 == 0 && i != param4) {
      console.log(i);
    }
    i++;
  }
}


// page 20

function countdown(num) {
  var arr = [];
  for(var i=num; i>=0; i--) {
    arr.push(i);
  }
  return arr;
}
// arr.length == num + 1

function printAndReturn(arr) {
  console.log(arr[0]);
  return arr[1];
}

function firstPlusLength(arr) {
  return arr[0] + arr.length;
}
// if arr[0] is a string, it will concatenate
// if arr[0] is a boolean, it will treat it as 1 or 0 for true/false respectively

function greaterThanSecond() {
  var arr = [1,3,5,7,9,13];
  var count = 0;
  for(var i=0; i<arr.length; i++) {
    if(arr[i] > 3) {
      console.log(arr[i]);
      count++;
    }
  }
  return count;
}

function greaterThanSecondGeneralized(arr) {
  if(arr.length < 2) {
    return 0;
  }
  var second = arr[1];
  var count = 0;
  for(var i=0; i<arr.length; i++) {
    if(arr[i] > second) {
      console.log(arr[i]);
      count++;
    }
  }
  return count;
}

function lengthValue(num1, num2) {
  var arr = [];
  for(var i=0; i<num1; i++) {
    arr.push(num2);
  }
  if(num1 == num2) {
    console.log("Jinx!");
  }
  return arr;
}

function fitFirstValue(arr) {
  if(arr[0] > arr.length) {
    console.log("Too big!");
  }
  else if(arr[0] < arr.length) {
    console.log("Too small!");
  }
  else {
    console.log("Just right!");
  }
}

function fahrenheitToCelsius(fDegrees) {
  return (fDegrees - 32) * 5 / 9;
}

function celsiusToFahrenheit(cDegrees) {
  return (cdegrees * 9 / 5) + 32;
}
// Fahrenheit and Celsius meet at -40


// page 22, in order of 1st column, 2nd column

function makeItBig(arr) {
  for(var i=0; i<arr.length; i++) {
    if(arr[i] > 0) {
      arr[i] = "big";
    }
  }
  return arr;
}

function printLowReturnHigh(arr) {
  var min = arr[0];
  var max = arr[0];
  for(var i=0; i<arr[length]; i++) {
    if(arr[i] < min) {
      min = arr[i];
    }
    if(arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(min);
  return max;
}

function printOneReturnAnother(arr) {
  console.log(arr[arr.length -2]);
  for(var i=0; i<arr.length; i++) {
    if(arr[i] % 0 == 1) {
      return arr[i];
    }
  }
  return;
}

function double(arr) {
  var newArr = [];
  for(var i=0; i<arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  return newArr;
}

function countPositives(arr) {
  var count = 0;
  for(var i=0; i<arr.length; i++) {
    if(arr[i] > 0) {
      count++;
    }
  }
  arr[arr.length-1] = count;
  return arr;
}

function evensAndOdds(arr) {
  var even_count = 0;
  for(var i=0; i<arr.length; i++) {
    if(arr[i] % 2 == 1) {
      console.log("That's odd!");
      even_count = 0;
    }
    else {
      even_count++;
      if(even_count == 3) {
        console.log("Even more so!");
        even_count = 0;
      }
    }
  }
}

function incrementSeconds(arr) {
  for(var i=0; i<arr.length; i++) {
    if(i % 2 == 1) {
      arr[i]++;
    }
    console.log(arr[i]);
  }
  return arr;
}

function previousLengths(arr) {
  for(var i=arr.length-1; i>0; i--) {
    arr[i] = arr[i-1].length;
  }
  return arr;
}

function addSeven(arr) {
  var newArr = [];
  for(var i=1; i<arr.length; i++) {
    newArr.push(arr[i]+7);
  }
  return newArr;
}

function reverse(arr) {
  var temp;
  for(var i=0; i<arr.length/2; i++) {
    temp = arr[i];
    arr[i] = arr[arr.length-i-1];
    arr[arr.length-i-1] = temp;
  }
  return arr;
}

function outlookNegative(arr) {
  newArr = [];
  for(var i=0; i<arr.length; i++) {
    if(arr[i] < 0) {
      newArr.push(arr[i]);
    }
    else {
      newArr.push(arr[i] * -1);
    }
  }
  return newArr;
}

function hungry(arr) {
  var full = 0;
  for(var i=0; i<arr.length; i++) {
    if(arr[i] == "food") {
      console.log("yummy");
      full = 1;
    }
  }
  if(full == 0) {
    console.log("I'm hungry");
  }
}

function swapTowardCenter(arr) {
  var temp;
  for(var i=0; i<arr.length/2; i+=2) {
    temp = arr[i];
    arr[i] = arr[arr.length-i-1];
    arr[arr.length-i-1] = temp;
  }
  return arr;
}

function scale(arr, num) {
  for(var i=0; i<arr.length; i++) {
    arr[i] *= num;
  }
  return arr;
}
