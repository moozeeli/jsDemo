// 测试&


for(let i = 0;i<30;i++){
  if((i&2)===2){
    console.log(i+" : "+i.toString(2));
  }
}

// 判断数字的奇偶性：
function judgeOddOrEven(){
  console.log("判断奇偶*******");
  let oddNum = [],evenNum = [];
  for(let i = -5;i<30;i++){
        
    if((i&1)===1){ // 
      oddNum.push(i);
    }else{
      evenNum.push(i);
    }
  }
  console.log(oddNum);
  console.log(evenNum);
    
}
judgeOddOrEven();
