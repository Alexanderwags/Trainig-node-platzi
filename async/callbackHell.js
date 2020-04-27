function hola(nombre, micallback) {
  setTimeout(() => {
    console.log("Hola " + nombre);
    micallback(nombre);
  }, 1000);
}
function hablar(callbackHablar){

    setTimeout(function(){
        console.log('Bla Bla Bla ...')
        callbackHablar()
    },1000)
}
function adios(nombre, otrocallback) {
  setTimeout(() => {
    console.log("Adios " + nombre);
    otrocallback();
  }, 1000);
}
function conversacion(nombre,veces,callback){
    if(veces>=0){
        hablar(function (){
            conversacion(nombre, --veces, callback);
        })
    }
    else{
       adios(nombre,callback)
    }
}
hola("william",function (nombre){

    conversacion(nombre,3,function(){
        console.log('proceso terminado')
    })
})
// console.log("Iniciando Proceso ");
// hola("william", nombre => {
//   adios(nombre, () => {
//     console.log("Finalizando proiceso ");
//   });
// });

//--

console.log("Iniciando Proceso ");



// hola("william",function (nombre){
//     adios(nombre,function(){
//         console.log('terminamos')
//     });
// })
// hola("william", nombre => {
//   hablar(function(){
//          hablar(function() {
//            adios(nombre, function() {
//              console.log("Terminando proceso ...");
//            });
//          }); 
//   })
// });
