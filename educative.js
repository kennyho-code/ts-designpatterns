var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// console.log(bike);
// console.log(bikeDirectorBike);
// Singleton
var ControlCenter = /** @class */ (function () {
    function ControlCenter() {
    }
    return ControlCenter;
}());
var ControlCenterSingleton = /** @class */ (function () {
    // make the constructor private so you can't make an object
    function ControlCenterSingleton() {
        this.isOn = true;
    }
    // if there isn't an instance than make the instance and return in
    ControlCenterSingleton.getInstance = function () {
        if (!ControlCenterSingleton.instance) {
            ControlCenterSingleton.instance = new ControlCenterSingleton();
        }
        return ControlCenterSingleton.instance;
    };
    ControlCenterSingleton.prototype.turnOff = function () {
        this.isOn = false;
    };
    return ControlCenterSingleton;
}());
var singleton = ControlCenterSingleton.getInstance();
singleton.turnOff();
var singleton2 = ControlCenterSingleton.getInstance();
var Square = /** @class */ (function () {
    function Square(x, y) {
        this.x = x;
        this.y = y;
    }
    Square.prototype.clone = function () {
        return Object.assign({}, this);
    };
    return Square;
}());
var square = new Square(1, 2);
var square2 = square.clone();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log(this.name + " is eating");
    };
    return Animal;
}());
var CloneMe = /** @class */ (function () {
    function CloneMe() {
    }
    CloneMe.prototype.cloneMe = function () {
        return Object.assign({}, this);
    };
    return CloneMe;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(bark) {
        var _this = _super.call(this) || this;
        _this.bark = bark;
        return _this;
    }
    Dog.prototype.swim = function () {
        console.log("is swimming");
    };
    return Dog;
}(CloneMe));
var dog = new Dog('woof');
// dog.eat();
// dog.swim();
// dog.cloneMe();
var F16Engine = /** @class */ (function () {
    function F16Engine() {
    }
    return F16Engine;
}());
var F16 = /** @class */ (function () {
    function F16() {
        this.f16Engine = new F16Engine();
    }
    F16.prototype.fly = function () {
        console.log('we are flying');
    };
    F16.prototype.clone = function () {
        return Object.assign(this, {});
    };
    F16.prototype.setEngine = function (f16Engine) {
        this.f16Engine = f16Engine;
    };
    return F16;
}());
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.main = function () {
        var f16 = new F16();
    };
    return Client;
}());
var Product1 = /** @class */ (function () {
    function Product1() {
    }
    return Product1;
}());
var Product2 = /** @class */ (function () {
    function Product2() {
    }
    return Product2;
}());
var Product3 = /** @class */ (function () {
    function Product3() {
    }
    return Product3;
}());
// making products
var p1 = new Product1();
// let the factory do it .. a simple factory
var SimpleFactory = /** @class */ (function () {
    function SimpleFactory() {
    }
    SimpleFactory.makeProduct = function (productName) {
        switch (productName) {
            case ('product1'):
                return new Product1();
            case ('product2'):
                return new Product2();
            default:
                return new Product3();
        }
    };
    return SimpleFactory;
}());
var product1FromFactory = SimpleFactory.makeProduct('product1');
var product2FromFactory = SimpleFactory.makeProduct('product2');
var product3FromFactory = SimpleFactory.makeProduct('product3');
console.log('some products', product1FromFactory, product2FromFactory, product3FromFactory);
var CarEngine = /** @class */ (function () {
    function CarEngine() {
    }
    CarEngine.prototype.vroom = function () {
        console.log('....vrooom!');
    };
    return CarEngine;
}());
var CarDriver = /** @class */ (function () {
    function CarDriver() {
    }
    CarDriver.prototype.steer = function () {
        console.log('...steering');
    };
    return CarDriver;
}());
var ModelX = /** @class */ (function () {
    function ModelX() {
    }
    ModelX.prototype.make = function () {
        this.engine = new CarEngine();
        this.driver = new CarDriver();
        console.log('---making it');
    };
    return ModelX;
}());
var ModelXA = /** @class */ (function (_super) {
    __extends(ModelXA, _super);
    function ModelXA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModelXA.prototype.make = function () {
        _super.prototype.make.call(this);
        this.engine = new ModelXAEngine();
        this.engine.vroom();
    };
    return ModelXA;
}(ModelX));
var ModelXAEngine = /** @class */ (function () {
    function ModelXAEngine() {
    }
    ModelXAEngine.prototype.vroom = function () {
        console.log('model x engine goes rumble');
    };
    return ModelXAEngine;
}());
var modelxa = new ModelXA();
modelxa.make();
console.log('engine:', modelxa.engine);
