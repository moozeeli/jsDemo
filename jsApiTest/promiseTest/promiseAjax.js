let api = 'http://rap2.taobao.org:38080/app/mock/118366/example/1562038646357';

const getJson = function(url){
    return new Promise((resolve,reject)=>{
        const handler = function(){
            
            if(this.readyState !== 4){
                return ;
            }
            if (this.status === 200) {
                resolve(this.response);
              } else {
                reject(new Error(this.statusText));
              }
        }

        const request = new XMLHttpRequest();  //只能在浏览器中运行
        request.open('get',url);
        request.onreadystatechange = handler;
        request.responseType = 'json',
        request.setRequestHeader('Accept','application/json');
        request.send();
    })
}

getJson(api).then(data=>{
    console.log(data)
})