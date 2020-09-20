console.log("hello World");

type animal = 'dog' | 'cat' | 'cow'

type DriveTrain = '4WD' | 'RWD' | 'FWD'

const cazzo: animal = 'dog'; 


interface CarFeatures {
    toggleRadio(): boolean;
    isRadioOn: boolean;
    driveTrain: DriveTrain
}

// class Car implements CarFeatures {

//     isRadioOn = false;
//     driveTrain: DriveTrain = 'FWD';

//      toggleRadio(){
//          this.isRadioOn = !this.isRadioOn 
//          return this.isRadioOn;
//         ; 
//     }
// }


const request = () => {
    console.log('.....making request');
    console.log('.....but there is an error');
    throw new Error('some error in the request');
}


try {
    request()
}catch(error){

    console.log(error);

}