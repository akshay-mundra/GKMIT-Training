// FILTER EVEN NUMBERS

// let tempArray = [1,2,3,4,5,6,7,8,9,10];
// let filteredArray = tempArray.filter(num => num%2 == 0);
// console.log(filteredArray);


const testArray = [
	{
		name: "Akshay Mundra",
		address: "Udaipur",
		mobile: 99999
	},
	{
		name: "Akshay Mundra",
		address: "Udaipur",
		mobile: 999994
	},
	{
		name: "Akshay Mundra",
		address: "Udaipur",
		mobile: 9999
	},
	{
		name: "Akshay Mundra",
		address: "Udaipur",
		mobile: 99956
	},
]


// PRINT name : address from the array of objects

//testArray.forEach(item => {
//	console.log(`${item.name} : ${item.address}`);
//});

// Map returns array whereas foreach do not
//const finalArray = testArray.map(item => `${item.name} : ${item.address}`);
//console.log(finalArray);


// Using array.find 

// const user = testArray.find(item => {
//	return item.mobile%2===0 		
// });
// console.log(user.name);
