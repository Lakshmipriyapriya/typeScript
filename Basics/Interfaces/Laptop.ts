interface Device{
	userName:string;
	color:string;
	company:string;
}
function Laptop(device:Device){
	console.log("Username is:",device.userName);
	console.log("color:",device.color);
	console.log("company:",device.company);
}
let laptop_properties={userName:"priya",color:"gray",company:"hp"}
Laptop(laptop_properties);