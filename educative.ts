// basic OOP class
class Car {
    carType: String 
    color : String

    constructor(carType: string, color: string){
        this.carType = carType;
        this.color = color;
    }
}

/*
1.  Creational - objects constructed by classes
    - Builder
2.  Structural - composition of classes
3. Behavioral - interaction and delegation of objects
*/


/*
Builder - hides the process of building. Separation allows for different types of representation
    - construction to different representations
    - can build it directly or user a director that has presets 
    - a client can then use the director without knowing the details
    - Builder vs abstract factory
*/

interface BikeBuilder{
    buildTires(): void
    buildChain(): void
    buildHandleBar(): void
    buildBrakes(): void
}

type Tire = 'racing' | 'dirt'
type Chain = 'iron' | 'steel'
type HandleBar = 'horns' | 'straight'
type Brakes = 'shimano' | 'generic'

class Bike {
    tire?: Tire
    chain?: Chain
    handleBar?: HandleBar
    brakes?: Brakes
}


class CannondaleBikeBuilder implements BikeBuilder  {
    bike: Bike;

    constructor(){
        this.bike = new Bike();

    }

    public buildTires(): this{
        this.bike.tire = 'racing'
        return this
    }

    public buildChain(): this{
        this.bike.chain = 'iron'
        return this
    }

    public buildHandleBar(): this{
        this.bike.handleBar = 'horns'
        return this

    }

    public buildBrakes(): this{
        this.bike.brakes = 'generic'
        return this
    }

    public getResuilt(): Bike {
        return this.bike;
    }
}

class BikeDirector{
    cannondaleBikeBuilder: CannondaleBikeBuilder;
    constructor(){
        this.cannondaleBikeBuilder = new CannondaleBikeBuilder();
    }

    buildBike(needBrakes: Boolean){
        // if(needBrakes){
        //     cannondaleBikeBuilder.buildBrakes()
        // }
        return this.cannondaleBikeBuilder.getResuilt()
    }
}




const cannondaleBikeBuilder = new CannondaleBikeBuilder();

const bike = cannondaleBikeBuilder
                .buildBrakes()
                .buildHandleBar()
                .buildTires()
                .buildChain()
                .getResuilt();


const bikeDirector = new BikeDirector();
const bikeDirectorBike = bikeDirector.buildBike(false);

// console.log(bike);
// console.log(bikeDirectorBike);


// Singleton

class ControlCenter {

}

class ControlCenterSingleton{

    isOn: boolean = true;


    // make the instance
    private static instance: ControlCenterSingleton;

    // make the constructor private so you can't make an object
    private constructor(){}


    // if there isn't an instance than make the instance and return in
    static getInstance(): ControlCenterSingleton {
        if(!ControlCenterSingleton.instance){
            ControlCenterSingleton.instance = new ControlCenterSingleton()

        }
        return ControlCenterSingleton.instance;
    }

    turnOff(){
        this.isOn = false;
    }

}

const singleton = ControlCenterSingleton.getInstance();
singleton.turnOff();
const singleton2 = ControlCenterSingleton.getInstance();

// should be the same instance
// console.log('is this the same singleton instance?', singleton === singleton2)




interface IClone{
    clone(): any;
}

class Square implements IClone{

    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    clone(){
        return Object.assign({}, this);
    }
}

const square = new Square(1, 2);
const square2 = square.clone();


// console.log('are these squares the same object? ', square === square2)

// Prototype -- pattern to help clone objects ... object instantiation can be expensive
// so we use programming methods to clone the object instead of making a new object
// and copying all it's internals

interface Walk{
    walk(): void;
}

interface Swim{
    swim(): void;
}

abstract class Animal{

    name: String;
    constructor(name: string){
        this.name = name;
    }

    eat(){
        console.log(`${this.name} is eating`);
    }
}

type Bark = 'woof' | 'wuf'

abstract class CloneMe {

    cloneMe(){
        return Object.assign({}, this);
    }
}

class Dog extends CloneMe implements Swim{
    
    bark: Bark;

    constructor(bark: Bark){
        super()
        this.bark = bark;
    }

    swim(){
        console.log(`is swimming`);
    }

}

const dog = new Dog('woof');

// dog.eat();
// dog.swim();
// dog.cloneMe();



class F16Engine{

}


interface IAircraftPrototype{

    fly(): void

    clone(): IAircraftPrototype;

    setEngine(f16Engine: F16Engine): void;
}


class F16 implements IAircraftPrototype{

    f16Engine = new F16Engine()

    fly(){
        console.log('we are flying')
    }

    clone(){
        return Object.assign(this, {})
    }

    setEngine(f16Engine: F16Engine){
        this.f16Engine = f16Engine;
    }
    
}


class Client{
    main(){
        const f16 = new F16()
    }
}

// Factory --- object creation by another class ... maybe we don't know 
// which object we need at run time 


type ProductType = Product1 | Product2 | Product3

class Product1{

}

class Product2{

}

class Product3{

}
// making products
const p1 = new Product1();

// let the factory do it .. a simple factory
class SimpleFactory{

    static

    makeProduct(productName: String): ProductType{
    switch(productName){
        case('product1'):
            return new Product1();
        case('product2'):
            return new Product2()
        default:
            return new Product3();
        }

    }
}

const product1FromFactory = SimpleFactory.makeProduct('product1');
const product2FromFactory = SimpleFactory.makeProduct('product2');
const product3FromFactory = SimpleFactory.makeProduct('product3');

console.log('some products', product1FromFactory, product2FromFactory, product3FromFactory)


// Method Factory 
interface IEngine{
    vroom(): void
}

interface IDriver{
    steer(): void 
}

class CarEngine implements IEngine{
    vroom(){
        console.log('....vrooom!');
    }
}

class CarDriver implements IDriver{
    steer(){
        console.log('...steering')
    }
}

class ModelX{
    engine?: IEngine;
    driver?: IDriver;

    constructor(){}

    protected make(){
        this.engine = new CarEngine();
        this.driver = new CarDriver();
        console.log('---making it');
    }
}

class ModelXA extends ModelX{
    make(){
        super.make();
        this.engine = new ModelXAEngine();
        this.engine.vroom();
    }
}

class ModelXAEngine implements CarEngine {
    vroom(): void {
        console.log('model x engine goes rumble');
    }
}

const modelxa = new ModelXA()

modelxa.make()

console.log('engine:', modelxa.engine)