const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum of array 
const sum = testArray.reduce((acc, val) => acc + val, 0);
console.log(sum);


// reducing array of object by category 
const testArray2 = [
	{id: 1, category: 'a'},
	{id: 2, category: 'b'},
	{id: 3, category:  'c'},
	{id: 4, category: 'a'},
	{id: 5, category: 'b'}
]
const categorizedObject = testArray2.reduce((acc, item) => {
	(acc[item.category] = acc[item.category] || []).push(item);
	return acc;
}, {})
console.log(categorizedObject);