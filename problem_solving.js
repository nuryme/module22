//-----------------------   Convert Inch to Feet
/*
//12 inch = 1 feet
function inToFeet(inch) {
    const feet = inch/12;
    return feet;
}
const myHeight = inToFeet(75);
console.log(myHeight);
function feetToInch(feet) {
    const inch = feet * 12;
    return inch;
}
const myHeight2 = feetToInch(5.6);
console.log(myHeight2);
function inToFeet2(inch) {
    const feetFraction = inch / 12;
    const feetInt = parseInt(feetFraction);
    const inchFloat = inch%12;
    const result = feetInt + " ft " + inchFloat + " inch.";
    return result;
}
console.log(inToFeet2(75));
//miles to kilometers
//1 mile = 1.60934 km
function milesToKm(miles) {
    const km = miles * 1.60934;
    const result = km + ' km';
    return result;
}
console.log(milesToKm(75));     */

//-----------------------   Leap Year
/*
*if the year is divisible by 4 but can't be divisible by 100
*divisible by both 100 and 400
*/
/*
function isLeapYear(year) {
    if(year%4=== 0 && year%100!==0) {
        return true;
    }
    else if(year%400===0 && year%100===0) {
        return true;
    }
    else {
        return false;
    }
}
const yearLeap = isLeapYear(2000);
console.log(yearLeap);      */

//-----------------------   Average of the the odd numbers in an array
 /*
#multiple ways to do
1.put odd numbers in an array
*/
/*
function oddAverage(numbers) {
    const odds = []
    for(const number of numbers) {
        if(number%2===1) {
            odds.push(number)
        }
    }
    let sum = 0;
    console.log(odds);
    for(const number of odds) {
        sum += number;
    }
    const average = sum/odds.length;
    return average;
}
const numbers = [23, 98, 21, 89, 99, 98, 44]
const avg = oddAverage(numbers);
console.log('average of the odd numbers: ', avg);   */

//-----------------------   Remove duplicate items from an array
/*
#ways to do
1. create an empty array
2. iterate over the array
3. check if the item is already in the new array
4. if not, push it
*/
/*
const biryaniKhor = ['abul', 'kabul', 'sabul', 'abul', 'sabul', 'nabul', 'babul', 'dabul', 'nabul'];
const numbers= [22, 98, 21, 89, 22, 71, 21, 89, 22,];
function noDuplicate(array) {
    const newArray = [];
    for(const item of array) {
        if(newArray.includes(item) === false) {
            newArray.push(item);
        } 
    }
    return newArray;
}
function numDuplicate(numbers) {
    const newArray = [];
    for(const number of numbers) {
        if(newArray.includes(number) === false) {
            newArray.push(number);
        }
    }
    return newArray;
}
const birArray = noDuplicate(biryaniKhor);
console.log(birArray)
const newNumbers = numDuplicate(numbers);
console.log(newNumbers);    */

//-----------------------   Math, abs, round, ceil, floor, and random number
/*
const min = Math.min(23, 88, 9, 2, 1, 98, 1999, -19);
console.log(min);
const max = Math.max(23, 88, 9, 2, 1, 98, 1999, -19);
console.log(max);
console.log(Math.PI)
console.log(Math.abs(-22))
console.log(Math.abs(22));
console.log(Math.round(2.8));
console.log(Math.round(2.2));
console.log(Math.floor(2.9999));
console.log(Math.ceil(2.2));
console.log(Math.random());
const random = Math.round(Math.random()*10);
console.log(random);    */

//-----------------------   Simple introduction to JS Date and time
/*
const today = new Date();
const date = new Date('2062-10-12');
console.log(date)
console.log(date.getMonth())
console.log(date.getDay())
const specificDate = new Date(2091, 0, 26);
console.log(specificDate);
specificDate.setMonth(10);
console.log(specificDate);
console.log(specificDate.toLocaleDateString('en-GB'));
//-----------------------  unix epoch   */


//----------------------------   Swap variable, swap without temp, destructing   ---------------------------
//way 1
let a = 5;
let b = 7;
console.log(a, b)
const temp = a;
a = b;
b = temp;
console.log(a, b)
//way 2
let x = 5;
let y = "7";
console.log(x, y);
[x, y] = [y, x];
console.log(x, y);
