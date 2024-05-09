
module.exports =(sal,callBouns)=>{
    if (sal <= 0) {
        callBouns(new Error("Please Enter a Valid Salry"),null)
    } else if(sal <= 10000) {
        callBouns(null, sal * 0.1)
    } else if(sal <= 20000) {
        callBouns(null, sal * 0.15)
    } else if(sal > 20000) {
        callBouns(null, sal * 0.2)
    }
}