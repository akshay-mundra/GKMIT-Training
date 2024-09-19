// sorting array of numbers

const testArray = [1, 5, 4, 3, 10, 6, 21];

// initial array 
console.log(testArray);

// sort function sorts the array inplace and returns the reference of the array

testArray.sort((a, b) => {
	console.log(a, b, a-b);

	return a-b;
});

console.log(testArray);


// sort array of strings
const testArray2 = ['a', 'abc', 'z', 'zsh', 'jkl'];
testArray2.sort();
console.log(testArray2);


// sorting array of objectss
const testArray3 = [
	{
		name: "Akshay",
	},
	{
		name: "Aditya",
	},
	{
		name: "Abhishek"
	},
	{
		name: "Yash"
	}
]

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
testArray3.sort((item1, item2) => item1.name.localeCompare(item2.name));
console.log(testArray3)




//sort array of strings and numbers
const testArray4 = [12, "abc", 523, "5000", "xyz", "udaipur"];
testArray4.sort((a, b) => {
	if(typeof a === "number" && typeof b === "number") return a-b;
	if (typeof a === "number") return -1;
	if(typeof b === "number") return 1;
	else return a > b ? 1 : -1;
})

console.log(testArray4);