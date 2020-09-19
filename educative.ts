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

console.log(bike);
console.log(bikeDirectorBike);

