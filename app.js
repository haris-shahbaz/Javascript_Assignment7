// Chapter 38 to 42



// Question no 1
// function calculate (a, b) {
//     return Math.pow(a, b);
// }
// let base = 2;
// let exponent = 3;
// let result = calculate(base, exponent);
// console.log(`${base}^${exponent} = ${result}`);


// Question no 2
// function leapYear(search) {
//     if (search === 2012){
//         return search + " is a leap year";
//     } else if (search === 2016) {
//         return search + " is a leap year";
//     } else if (search === 2020) {
//         return search + " is a leap year";
//     } else {
//         return search + " is not a leap year";
//     }
// }
// let search = +prompt("Enter a year");
// let year = leapYear(search);
// alert(year);


// Question no 3
// function calculateS (a, b, c) {
//     return (a + b + c) / 2;
// }
// function calculate (a, b, c) {
//     let s = calculateS(a, b, c);
//     let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area;
// }
// let sideA = 5;
// let sideB = 6;
// let sideC = 7;
// let triangleArea = calculate(sideA, sideB, sideC);
// console.log(triangleArea);


// Question no 4
// function calcAverage (subject1, subject2, subject3) {
//     return (subject1 + subject2 + subject3); 
// }
// function calcPercentage (totalMarks, maxMarks) {
//     return (totalMarks / maxMarks) * 100;
// }
// function mainFunction () {
//     let subject1Marks = parseFloat (prompt("Enter a subject1 Marks"));
//     let subject2Marks = parseFloat (prompt("Enter a subject2 Marks"));
//     let subject3Marks = parseFloat (prompt("Enter a subject3 Marks"));
//     let average = calcAverage (subject1Marks, subject2Marks, subject3Marks);
//     let maxMarks = 300;
//     let totalMarks = subject1Marks + subject2Marks + subject3Marks;
//     let percentage = calcPercentage (totalMarks, maxMarks);
//     console.log("Average Marks : " + average);
//     console.log("Percentage : " + percentage + "%");
// }
// mainFunction();


// Question no 5
// function customIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i;
//         }
//     }
//     return -1;
// }
// const text = "Hello, world!";
// const characterToFind = "r";
// const index = customIndexOf(text, characterToFind);

// if (index !== -1) {
//     console.log(`The character "${characterToFind}" was found at index ${index}.`);
// } else {
//     console.log(`The character "${characterToFind}" was not found in the string.`);
// }


// Question no 6
// function removeVowels (sentence) {
//     let vowels = /[aeiouAEIOU]/g;
//     let result = sentence.replace(vowels, " ");
//     return result;
// }
// let inputSentence = "This is a sample sentense of vowels";
// let sentenceWithoutVowels = removeVowels(inputSentence);
// console.log("Original sentence : " + inputSentence);
// console.log("Sentence without vowels : " + sentenceWithoutVowels);


// Question no 7
// function countSuccessiveVowels(text) {
//     const regex = /[aeiou]{2}/gi;
//     const matches = text.match(regex);
//     if (matches) {
//         const count = matches.length;
//         return count;
//     } else {
//         return 0;
//     }
// }
// const text = "Pleases read this application and give me gratuity";
// const result = countSuccessiveVowels(text);
// console.log(`The number of successive vowel pairs in the text is: ${result}`);


// Question no 8
// function kilometersToMeters(kilometers) {
//     return kilometers * 1000;
// }
// function kilometersToFeet(kilometers) {
//     return kilometers * 3280.84;
// }
// function kilometersToInches(kilometers) {
//     return kilometers * 39370.1;
// }
// function kilometersToCentimeters(kilometers) {
//     return kilometers * 100000;
// }
// const distanceInKilometers = parseFloat(prompt("Enter the distance in kilometers:"));
// const distanceInMeters = kilometersToMeters(distanceInKilometers);
// const distanceInFeet = kilometersToFeet(distanceInKilometers);
// const distanceInInches = kilometersToInches(distanceInKilometers);
// const distanceInCentimeters = kilometersToCentimeters(distanceInKilometers);
// console.log(`Distance in meters: ${distanceInMeters} meters`);
// console.log(`Distance in feet: ${distanceInFeet} feet`);
// console.log(`Distance in inches: ${distanceInInches} inches`);
// console.log(`Distance in centimeters: ${distanceInCentimeters} centimeters`);



