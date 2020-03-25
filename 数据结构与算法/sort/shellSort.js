// 希尔排序，

var cArray = function(){
        this.dataStore = [10,8,3,2,5,9,35,47,20];

        this.shellSort = shellSort;
        this.gaps = [5,3,1]; // 增量（元素间隔） ，可以自定义
}

function shellSort(){
    for(let g=0;g<this.gaps.length;g++){
        // 每种增量下进行排序
        let currGap = this.gaps[g]; // g==0 时候，currGap ==5;

        //取所有分组的第二个元素，一般情况下第一次分组的元素个数是2个。因为第一个奖额值是length/2。
        for(let i = currGap; i<this.dataStore.length;i++){
            var temp = this.dataStore[i] // i==5, temp ==9; temp是第一个分组的尾部元素。

            // 从后往前遍历，每次遍历后，j
            // j = 5; 5>=5&&
            for(let j=i; j>=currGap&&this.dataStore[j-currGap]>temp;j-=currGap){
                写到这里暂停
            }
        }
        
    }
}