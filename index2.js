// this is a solution for challenge 2 which detects the speed of a car 
//function that takes speed as input 
/* speed limit = 70 km/h
5 -> 1 point
Math.floor(1.3)
12 point -> suspended
*/

function speedDetector(speed) {
     const speedLimit = 70;
     const kmperpoint =5;
     if (speed <= speedLimit + kmperpoint ){
        console.log("ok")
        return;
     }

     const Demeritpoints = Math.floor((speed - speedlimit) / kmperpoint);
    if (Demeritpoints >= 12)
    console.log("license suspended");
      else console.log("points", Demeritpoints);
}

speedDetector(90);