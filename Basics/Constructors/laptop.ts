class Laptop{
	name:string;
	color:string;

constructor(deviceName:string,deviceColor:string){
	this.name=deviceName;
	this.color=deviceColor;
	console.log("Device:",this.name+" ,"+this.color);
}
}
let newDevice= new Laptop("hp","gray") 