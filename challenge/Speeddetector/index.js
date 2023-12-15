// in this speed detector javvascript format : in it you input the speed
// check the speed limit if it surpases the limit required points
// points calculation - it deducts ove 70 km/hr and deducts one after every five km/hr it exceeds
// licencse suspension - if deduction points exceeds 12 then it suspends;

function checkSpeed(speed) {                                                        // Declares the checkspeedfunction
    const speedLimit = 70;
    const pointspast5km = 1;
    const minimumPoints = 12;
    if(speed < speedLimit){
// this outputs the message in console
     console.log("Ok")

    } else {
        const deductedPoints = Math.floor((speed - speedLimit) / 5);
        // the console displays the points deducted
        console.log(`Points : ${deductedPoints}`);

    if(deductedPoints >= minimumPoints){
        console.log("License Suspended");
    }
    }

}
// the parseFloat entered  before the prompt treats the input as number so that speed works effectively

const speed = parseFloat(prompt("Enter the speed:"));
checkSpeed(speed);