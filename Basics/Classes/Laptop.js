var laptop = /** @class */ (function () {
    function laptop(user) {
        this.company = user;
    }
    return laptop;
}());
var User = new laptop("hp");
console.log(User);
