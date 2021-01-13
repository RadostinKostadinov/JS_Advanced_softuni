function roadRadar(speed, zone){
    speed = Number(speed);
    zone = zone.toString();


    let speedlimit = 0;
    switch(zone){
        case 'motorway':{
            speedlimit = 130;
            if(speed <= speedlimit){
                return `Driving ${speed} km/h in a ${speedlimit} zone`;
            } else if(speed > speedlimit && speed <= speedlimit+20){
                return `The speed is ${speed - speedlimit} km/h faster than the allowed speed of ${speedlimit} - speeding`
            } else if(speed > speedlimit+20 && speed <= speedlimit+40){
                return `The speed is ${speed - speedlimit} km/h faster than the allowed speed of ${speedlimit} - excessive speeding`
            } else {
                return `The speed is ${speed - speedlimit} km/h faster than the allowed speed of ${speedlimit} - reckless driving`
            }
            
        }break;
        case 'interstate':{
            speedlimit = 90;
            if(speed <= speedlimit){
                return `Driving ${speed} km/h in a ${speedlimit} zone`;
            } else if(speed > speedlimit && speed <= speedlimit+20){
                return `The speed is ${speed - speedlimit} km/h faster than the allowed speed of ${speedlimit} - speeding`
            } else if(speed > speedlimit+20 && speed <= speedlimit+40){
                return `The speed is ${speed - speedlimit} km/h faster than the allowed speed of ${speedlimit} - excessive speeding`
            } else {
                return `The speed is ${speed - speedlimit} km/h faster than the allowed speed of ${speedlimit} - reckless driving`
            }
        }break;
        case 'city':{
            speedlimit = 50;
            if(speed <= speedlimit){
                return `Driving ${speed} km/h in a ${speedlimit} zone`;
            } else if(speed > speedlimit && speed <= speedlimit+20){
                return `The speed is ${speed - speedlimit} km/h faster than the allowed speed of ${speedlimit} - speeding`
            } else if(speed > speedlimit+20 && speed <= speedlimit+40){
                return `The speed is ${speed - speedlimit} km/h faster than the allowed speed of ${speedlimit} - excessive speeding`
            } else {
                return `The speed is ${speed - speedlimit} km/h faster than the allowed speed of ${speedlimit} - reckless driving`
            }
        }break;
        case 'residential':{
            speedlimit = 20;
            if(speed <= speedlimit){
                return `Driving ${speed} km/h in a ${speedlimit} zone`;
            } else if(speed > speedlimit && speed <= speedlimit+20){
                return `The speed is ${speed - speedlimit} km/h faster than the allowed speed of ${speedlimit} - speeding`
            } else if(speed > speedlimit+20 && speed <= speedlimit+40){
                return `The speed is ${speed - speedlimit} km/h faster than the allowed speed of ${speedlimit} - excessive speeding`
            } else {
                return `The speed is ${speed - speedlimit} km/h faster than the allowed speed of ${speedlimit} - reckless driving`
            }
        }break;
    }
}

console.log(roadRadar(40, 'city'));
console.log(roadRadar(21, 'residential'));
console.log(roadRadar(120, 'interstate'));
console.log(roadRadar(200, 'motorway'));