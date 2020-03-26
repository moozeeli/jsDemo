function debunce(func,wait){

    let timer = null;

    //定义延迟执行函数
    const later = (context, args)=> setTimeout(() => {
         timer = null;
        // 执行函数
        func.apply(context,args);
        func = null;
        context = args = null;
    }, wait);

    let debunce = function(...params){
        let context = this;
        let args = params;
        if(timer){
            clearTimeout(timer);
        }else{
            timer = later(context,args)
        }
    }
    return debunce;
}


var logName  = debunce(function(name){
    console.log(name);
},2000) 

setInterval(() => {
    console.log('执行')
    logName('litong');
}, 500);