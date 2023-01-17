const jwt= require('jsonwebtoken');

exports.verify=async(ctx,next) =>{
    var token=ctx.request.headders['token']
    jwt.verify(token,process.env.APP_KEY,(error,decoded)=>{
        if(error){
            ctx.body="로그인 해야 합니다."
            return;
        }
        next();
    })
}