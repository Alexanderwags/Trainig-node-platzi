function hola(nombre,micallback){
    setTimeout(()=>{
        console.log('Hola '+ nombre)
        micallback(nombre)
    },1000)
}
function adios(nombre,otrocallback){

    setTimeout(() => {
      console.log("Adios " + nombre);
      otrocallback();
    }, 1000);

}
console.log('Iniciando Proceso ')
hola("william", (nombre) => {
    adios(nombre,() => {

        console.log("Finalizando proiceso ");
    })
}); 