function test(x1, y1, x2, y2){
    [x1,y1,x2,y2] = [x1,y1,x2,y2].map(a => Number(a));

    
    
    if(pt(x1,y1,0,0) % 1 === 0){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    
    if(pt(x2,y2,0,0) % 1 === 0){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    
    if(pt(x1,x2,y1,y2) % 1 === 0){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
    
    function pt(x1,y1,x2,y2){
        return Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
    }
}
//test('2','1','1','1');
test(3, 0, 0, 4);