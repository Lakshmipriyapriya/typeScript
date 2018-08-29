class laptop{
	public width:number;
	private height:number;
	protected length:number; 
}
var device=new laptop();
device.width; // it will be accessed
device.height; //it will print error bez of private
device.length; //it will print error bez of protected(allowed only on child class)

class newDevice extends laptop {
constructor() {
super();
this.width; //it will be accessed
this.height; //ERROR: private
this.length; //it will be accessed
}
}