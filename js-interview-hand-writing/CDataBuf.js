//实现一个数据缓存管理类，该类的基本定义如下：

class CDataBuf
{
        /**
         * 类构造函数
         * @param function funcLoadData,当缓存自身数据不足时向真正数据源请求数据的方法
         *      funcLoadData定义如下：function(nStart,nEnd) 传入的此函数允许是同步函数，或是异步函数
         *          @param int nStart,要获取数据段的开始索引（包含此索引值）
         *          @param int nEnd,要获取数据段的结束索引（包含此索引值）
         *          @return 【如果是同步函数】[数据,数据,......] 返回装载了所请求数据的数组
         *                                   · 数组将严格按照所请求的区间段返回
         *                                   · 如果数组长度小于请求区间的长度，则视为已到数据尾端
         *                  【如果是异步函数】Promise的resolve调用里返回跟同步函数返回值一样的内容
         */
        constructor(funcLoadData)
        {
            this.buf =[];
            
            //【实现的逻辑】
            if(typeof funcLoadData ==='function'){

                this.loadData = funcLoadData;
            }else{
                console.error('错');
            }
                
                
            

        }
        
        /**
         * 其他地方用于从本缓存获取数据的方法
         * @param int nStart,要获取数据段的开始索引（包含此索引值）
         * @param int nEnd,要获取数据段的结束索引（包含此索引值）
         * @return [数据,......] 如果返回的数组大小小于所请求区间，则视为数据已到尾部
         */
        async GetData(nStart,nEnd)
        {
            let hasBuf = this.hasBuf(nStart,nEnd);
            let tempRange = null;
            if(hasBuf===0){
                tempRange = [nStart,nEnd];
                
            }else if(hasBuf===1){ //只有一部分缓存
                tempRange = this.calcNoDataRange(nStart,nEnd);

            }

            // 从后端获取数据并缓存。
            if(tempRange!==null){
                for(let i=0;i<tempRange;i+2){
                    let tempData  = await this.loadData(tempRange[i],tempRange[i+1]);
                    this.buf.splice(nStart,nEnd-nStart+1,tempData); // 数据放入缓存。
                }                
            }
            

            return this.buf.slice(nStart,nEnd-nStart+1);
            //【实现的逻辑】
        }

        // 判断缓存情况
        // return :0无缓存 1缓存一部分， 2有全部缓存
        hasBuf(nStart,nEnd){
            //逻辑。。。。。
            let tempData = this.buf.slice(nStart,nEnd-nStart+1);
            if(this.buf.length<nStart){
                return 0;
            }
            if(this.buf.length>=nStart&&this.buf.length<nEnd){
                return -1;
            }
            if(this.buf.length<=nEnd){
                if(tempData.every((item,index)=>item!==undefined)){
                    return 2;
                }else  if(tempData.every((item,index)=>item===undefined)){                
                    return 0;
                }else{
                    return -1;
                }
            }

            
        }

        calcNoDataRange(nStart,nEnd){
            // 计算无缓存区间
            let range = [];

            for(let i=nStart;i<nEnd;i++){
                
               if(this.buf[i]!==undefined&&this.buff[i+1]===undefined){
                    range.push(i+1);
               }

               if(this.buf[i]===undefined&&this.buff[i+1]!==undefined){
                    range.push(i);
                }
            }
            return range

        }
}