/**
 * 
 * 관리 어드민의 요쳥 ip, url을 단순히 출력해주는 로그
 * @param {*} next 
 */
exports.myLogging=async(ctx,next)=>{
    let clientIp=ctx.request.ip;
    console.log(`${clientIp.replace("::ffff:","")}주소에서 요청 : ${ctx.originalUrl}`);
    await next();
}

