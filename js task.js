//                               Task no : 1          Alert
alert("hello world");


//                               Task no : 2          Variables for string
let userName = prompt("Enter Your Username");
alert(userName)


//                               Task no : 3           Variables for numbers
let firstNum = +prompt("Enter Your First Num");
let secoundNum = +prompt("Enter Your Secound Num");
alert(firstNum + secoundNum)


//                               Task no : 4          Variable name legal and illegal
/* illegal name:
                variable name cannot be start from number i.e 34username,687student etc.
                variable name cannot be only a number i.e 3424,23442,24432 etc.
                variable name cannot use a keyword name i.e  let,var,const etc. */

/*                    legal variable name
                  use text,dollar_sign,underscore,number
                  use camelCase i.e userName,studentId,studentName etc. */



//                               Task no : 5       Maths Exoression: Familiar Operators
let numOne = +prompt("Enter Your First Num")
let  numTwo = +prompt("Enter Your Secound Num")
let sub = numOne-numTwo;
let divide = numOne/numTwo;
let add = numOne+numTwo;
let multi = numOne*numTwo;

alert(`Subtract result of ${numOne} and ${numTwo} = ` + sub )
alert(`Addition result of ${numOne} and ${numTwo} = ` + add )
alert(`Divide result of ${numOne} and ${numTwo} = ` + divide )
alert(`Multiplication result of ${numOne} and ${numTwo} = ` + multi )

//                               Task no : 6       Maths Exoression: Unfamiliar Operators
let no1= +prompt("Enter Your First Number");
let no2= +prompt("Enter Your Secound Number");

let reminder=no1%no2;

alert("Result of reminder " + reminder)
no1++;
no2--;
alert(`First Number After increment ${no1}  `+`Secound Number After Decrement ${noS2}`)

//                               Task no : 7
//                               Task no : 8