// 冒泡排序

let arr = [2,33,4,56,7777,888888]
function sort1(arr){
    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j<arr.length-1-i; j++){
            let temp
            if(arr[j]<arr[j+1]){
                temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

// 插入排序
function sort2(arr){
    var arr = arr.slice();
    for(let i = 0; i<arr.length; i++){
        let minIndex = i;
        for(let j=i; j<arr.length; j++){
            if(arr[j]<arr[i]){
                minIndex = j;
            }
        }
        
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] =temp;
    }
    return arr;
}
console.log(arr)
console.log(sort2(arr));