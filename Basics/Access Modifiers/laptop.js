var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var laptop = /** @class */ (function () {
    function laptop() {
    }
    return laptop;
}());
var device = new laptop();
device.width; // it will be accessed
device.height; //it will print error bez of private
device.length; //it will print error bez of protected(allowed only on child class)
var newDevice = /** @class */ (function (_super) {
    __extends(newDevice, _super);
    function newDevice() {
        var _this = _super.call(this) || this;
        _this.width; //it will be accessed
        _this.height; //ERROR: private
        _this.length; //it will be accessed
        return _this;
    }
    return newDevice;
}(laptop));
