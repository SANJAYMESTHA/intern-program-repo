//1) str.length()
//This returns the number of characters in the string.
let str = "internship";
console.log(str.length);  // Output: 10


//2) str.toUpperCase()
//This converts all characters of the string to uppercase.
let str = "internship";
console.log(str.toUpperCase());  // Output: "INTERNSHIP"


//3) str.toLowerCase()
//This method converts all the characters in the string to lowercase.
let str = "internship";
console.log(str.toLowerCase());  // Output: "internship"


//4) str.trim()
//Removes leading and trailing whitespaces.
let str2 = "   internship   ";
console.log(str2.trim());     // Output: "internship"


//5) str.slice(startIndex, endIndex)
//Extracts a section of the string. endIndex is not included.
console.log(str.slice(0, 5));   // Output: "inter"
console.log(str.slice(5));      // Output: "nship"


//6) str.concat(string2)
//Joins two or more strings.
let str2 = " program";
console.log(str.concat(str2));   // Output: "internship program"


//7) str.replace(searchValue, newValue)
//Replaces the first occurrence of searchValue with newValue.
console.log(str.replace("intern", "mentor"));  // Output: "mentorship"


//8) str.charAt(index)
//Returns the character at the specified index.
console.log(str.charAt(0));   // Output: 'i'
console.log(str.charAt(4));   // Output: 'r'