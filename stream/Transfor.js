const { Transform } = require("stream");

const transformStream= new Transform({

    transform(chunk,endcoding,callback){
        this.push(chunk.toString().toUpperCase());
        callback();      
    }
    


});

// process.stdout("hola mundo ");
process.stdin.pipe(transformStream).pipe(process.stdout);