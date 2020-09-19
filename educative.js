// basic OOP class
var Car = /** @class */ (function () {
    function Car(carType, color) {
        this.carType = carType;
        this.color = color;
    }
    return Car;
}());
var Bike = /** @class */ (function () {
    function Bike() {
    }
    return Bike;
}());
var CannondaleBikeBuilder = /** @class */ (function () {
    function CannondaleBikeBuilder() {
        this.bike = new Bike();
    }
    CannondaleBikeBuilder.prototype.buildTires = function () {
        this.bike.tire = 'racing';
        return this;
    };
    CannondaleBikeBuilder.prototype.buildChain = function () {
        this.bike.chain = 'iron';
        return this;
    };
    CannondaleBikeBuilder.prototype.buildHandleBar = function () {
        this.bike.handleBar = 'horns';
        return this;
    };
    CannondaleBikeBuilder.prototype.buildBrakes = function () {
        this.bike.brakes = 'generic';
        return this;
    };
    CannondaleBikeBuilder.prototype.getResuilt = function () {
        return this.bike;
    };
    return CannondaleBikeBuilder;
}());
var BikeDirector = /** @class */ (function () {
    function BikeDirector() {
        this.cannondaleBikeBuilder = new CannondaleBikeBuilder();
    }
    BikeDirector.prototype.buildBike = function (needBrakes) {
        // if(needBrakes){
        //     cannondaleBikeBuilder.buildBrakes()
        // }
        return this.cannondaleBikeBuilder.getResuilt();
    };
    return BikeDirector;
}());
var cannondaleBikeBuilder = new CannondaleBikeBuilder();
var bike = cannondaleBikeBuilder
    .buildBrakes()
    .buildHandleBar()
    .buildTires()
    .buildChain()
    .getResuilt();
var bikeDirector = new BikeDirector();
var bikeDirectorBike = bikeDirector.buildBike(false);
console.log(bike);
console.log(bikeDirectorBike);
