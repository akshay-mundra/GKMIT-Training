type user = {
	name: string,
	age: number
}


const tempArray = [
{
	name: "Akshay",
	age: 21
}
] as user[];


console.log(tempArray);



const sum = (a:number, b:number): number => {
	return a + b;
}
console.log(sum(10, 20));