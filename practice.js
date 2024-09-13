//Celsius to Fahrenheit
//(c*9/5)+32 = f
function CtoF(Celsius) {
    const convert =(Celsius * 9 / 5) + 32;
    const unit = 'converting celsius to fahrenheit: ' + convert + 'F';
    return unit;
}
console.log(CtoF(75));

//Finding number in an array
const numbers = [5,6,11,12,98, 5]
const number5 = []
const number25 = []
for(const number of numbers) {
    if(number === 5) {
        number5.push(number);
    }
    if(number === 25) {
        number25.push(number);
    }
}
console.log(number5.length);
console.log(number25.length);

//Counting vowels in a string
const vowels = 'Write a function to count the number of vowels in a string';
const countVowels = []
function vowelsCount(string) {
    for(const vowel of vowels) {
        if(vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u') {
            countVowels.push(vowel);
        }
    } 
    return countVowels.length;   
}
console.log(vowelsCount(vowels))

//Write a function to find the longest word in a given string
const string = 'I am learning Programming to become a programmer';
function longestWord(string) {
    const words = string.split(' ');
    let longestWord = '';
    for(const word of words) {
        if(word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
console.log(longestWord(string));

//Generate a random number between 10 and 20
function random() {
    return Math.floor(Math.random()*(20-10+1)+10);
}
console.log(random());