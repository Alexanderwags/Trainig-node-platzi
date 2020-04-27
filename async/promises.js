function hola(nombre) {
    
    return new Promise(function(resolve,reject){
        setTimeout(() => {
          console.log("Hola " + nombre);
          resolve(nombre);
        }, 1000);
    })
    
}
function adios(nombre) {
    return new Promise ( (resolve,reject) => {

        setTimeout(() => {
          console.log("Adios " + nombre);
          resolve();
        }, 1000);

    })
}
function hablar(nombre) {
 
    return new Promise ( (resolve,reject) => {

            setTimeout(function() {
              console.log("Bla Bla Bla ...");
             // resolve(nombre);
             reject('hay un error')
            }, 1000);
    })

}
console.log('iniciando proceso')
hola("william")
    .then(hablar)
    .then(adios)
    .then((nombre) =>{
       console.log('Terminado el proceso ')  
    })
    .catch(error => {
        console.log('Ha habido un error')
        console.log(error)
    })