const process= require('process');

process.on('beforeExit',() =>{
    console.log('el proceso va a terminar')
})
process.on('exit',() =>{
    console.log('ALe, el proceso acabado')
})

process.on('uncaughtException',(err,origen) => {

    console.error('Vaya se nos ha olvidado capturar un error')
    try{
        console.error(err);
    }
    catch(err){

    }
})
funcionquenoexiste();
// process.on('uncaughtRejection')