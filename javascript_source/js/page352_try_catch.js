var subject = 'javascript';
// var score = 92;
try{
    console.log('교과목 : ' + subject + ' / ' + score);
} catch(e){
    console.log(e.message);             //score is not defined
}