interface Calculator{  
	(a:number,b:number);
}

let add:Calculator;
add=function(a,b){
	return a+b;
}
let add_result=add(3,5);
console.log(add_result);

let sub:Calculator;
sub=function(a,b){
	return a-b;
}
let sub_result=sub(3,5);
console.log(sub_result);

let mul:Calculator;
mul=function(a,b){
	return a*b;
}
let mul_result=mul(3,5);
console.log(mul_result);

let div:Calculator;
div=function(a,b){
	return a/b;
}
let div_result=div(3,5);
console.log(div_result);