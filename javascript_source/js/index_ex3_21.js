var limitNum = 5;
var sum = 0;
for (var i = 1; i<=20; i++){
    sum += i;         //sum = sum + i
    if(i === limitNum){
        break;
    }
}
console.log(sum);