console.log("hello World");
var cazzo = 'dog';
var Car = /** @class */ (function () {
    function Car() {
        this.isRadioOn = false;
        this.driveTrain = 'FWD';
    }
    Car.prototype.toggleRadio = function () {
        this.isRadioOn = !this.isRadioOn;
        return this.isRadioOn;
        ;
    };
    return Car;
}());
var request = function () {
    console.log('.....making request');
    console.log('.....but there is an error');
    throw new Error('some error in the request');
};
try {
    request();
}
catch (error) {
    console.log(error);
}
