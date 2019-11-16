

console.log("5 Reverse a string");

let Reverse_string:string="Dinesh"
var AfterReverse = function (Sentence:string) {
	 return Reverse_string.split("").reverse().join(""); 
	};
console.log(AfterReverse(Reverse_string));
console.log("");


console.log("1.The classical introductory exercise. Just say "Hello, World!" ");
let Texts: string="Hello World";
console.log(Texts);


console.log("");
console.log("2.Check Leap year");

let  Year:number=2020;
function Check_Leap_Year(Year)
{
  if(((Year % 4 == 0) && (Year % 100 != 100) || (Year % 400 == 0)))
{
	console.log(Year + " is a Leap Year.");
}
else{console.log(Year + " is not a Leap Year.");}
}


console.log("Check number is Armstrong or not")

 let Aremstrong=function isArmstrongNumber(input: number): boolean {
    const digits = String(input).split('')
    const sum = digits.reduce((total, current) => {
      return total + Math.pow(parseInt(current, 10), digits.length)
    }, 0)
    return sum === input
  }

if(Aremstrong(153)==1)
{
	console.log("Number is armstrong");
}
else
{
console.log("Number is armstrong");
}



