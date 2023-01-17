const jwt=require('jsonwebtoken')

// const token=jwt.sign(
//     {name: 'tu'},
//     'my-secret-key',
//     {expiresIn: '7d'},
//     (err,token)=> {
//         if(err){
//             console.log(err);
//             return;
//         }
//         console.log(token);
//     });



jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidHUiLCJpYXQiOjE2NzM4NDY4NDcsImV4cCI6MTY3NDQ1MTY0N30.eRM9VMsuadNyePTB_EL9FDg0wURH4zxX_ORGP6R7-l4'
    ,'my-secret-key',
    (error,decoded)=>{
    if(error){
        console.error(error);
        return;
    }
    console.log(decoded);
})