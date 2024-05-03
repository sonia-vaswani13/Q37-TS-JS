//Q37.Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
//message
var shirt = /** @class */ (function () {
    function shirt(size, message) {
        if (size === void 0) { size = "large"; }
        if (message === void 0) { message = " I love pakistan"; }
        this.size = size;
        this.message = message;
    }
    shirt.prototype.displayShirtInfo = function () {
        console.log("size:".concat(this.size, ",message:").concat(this.message));
    };
    return shirt;
}());
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love karachi;"; }
    return new shirt(size, message);
}
//large shirt with message
var largeShirt = make_shirt();
largeShirt.displayShirtInfo();
//medium shirt with message
var mediumSirt = make_shirt("medium;");
mediumSirt.displayShirtInfo();
//small shirt with message
var customShirt = make_shirt("small;");
customShirt.displayShirtInfo();
