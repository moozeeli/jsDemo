function loadImageAsync(url){
  return new Promise((resolve,reject)=>{
    if(Image){
      let img = new Image(url); // DOM 对象，只能在浏览器环境中执行
      img.onload =function(){
        resolve(img);
      };
      img.onerror = function(){
        reject(new Error("load image error in "+url));
      };
      img.src=url;
    }   
  });
}





loadImageAsync("http://n.sinaimg.cn/translate/320/w640h480/20191018/7f34-ifzxhxm9439209.jpg").then(img=>{
  console.log(img);
});