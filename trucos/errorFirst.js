function asincrona(callback){

    setTimeout(function(){
        try{
           let a =3+z;
            callback(null,a);
        }
        catch(e){
            callback(e)
        }

    },1000)
}

asincrona(function (err,dato){
    if(err){
        console.error('tenemos un error');
        console.error(err);
        // throw err;
        return false;
    }     
    console.log('todo bien en la data')
})  