const { exec,spawn }=require('child_process');
// exec('node modules/console.js',(err,stdout,sterr) =>{
//     if(err){
//         console.error(err);
//         return false;
//     }
//     console.log(stdout);
// })

let proceso =spawn('ls',['-la']);
console.log(proceso.connected);