function timeToWalk(steps, footprintM, speedKmH){
    let distanceKm = (steps * footprintM) / 1000;
    let restTime = Math.trunc(distanceKm/0.5);
    let time = distanceKm / speedKmH ;
    time = (3600 * time) + (restTime * 60);
    let hours = Math.trunc(time / 3600);
    time = time - hours*3600;
    let minutes = Math.trunc(time / 60);
    let seconds = 60 * (time/60 - Math.trunc(time/60));

    hours = hours.toString();
    minutes = minutes.toString();
    seconds = Math.round(seconds).toString();

    console.log(`${hours.padStart(2,'0')}:${minutes.padStart(2,'0')}:${seconds.padStart(2,'0')}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);