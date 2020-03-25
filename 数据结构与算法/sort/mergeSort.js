// 归并排序
var mergeSortRec = function(array){
    var length = array.length;
    if(length == 1) return array;
    var mid = Math.floor(length/2),
        left = array.slice(0,mid),
        right = array.slice(mid, length);
    return merge(mergeSortRec(left),mergeSortRec(right));
}


function merge(left,right){
    var result = [],il =0,ir =0;
    while(il < left.length && ir < right.length){
            if(left[il]<right[ir]){
                result.push(left[il++]);
            }else{
                result.push(right[ir++]);
            }   
    }
     // 对剩余的数组项进行处理，因为上面遍历完之后，有可能left和right其中一个有多个剩余项；
     // 例如 left 全部小于 right 的情况，当result中放入了全部的left项,il已经是最大值，此时循环结束,但result中还没放入right的值。
     // ir和il的递增是不确定的，也不是同步的。有可能ir递增到了最大值而il还是0。
     // 所以剩余的元素个数会是多个，要进行遍历，而不是使用if
     while(il<left.length){
        result.push(left[il++]);
    }
    while(ir<right.length){
        result.push(right[ir++]);
    }
    
    return result;
}

// test 

var arr = [9,8,7,6,5,4,3,2,1]; 
let arr2 =  mergeSortRec(arr);
console.log(arr);

console.log(arr2);

