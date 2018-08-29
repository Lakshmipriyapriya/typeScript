var Laptop = /** @class */ (function () {
    function Laptop(deviceName, deviceColor) {
        this.name = deviceName;
        this.color = deviceColor;
        console.log("Device:", this.name + " ," + this.color);
    }
    return Laptop;
}());
var newDevice = new Laptop("hp", "gray");
