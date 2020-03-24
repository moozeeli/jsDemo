function List(){
    this.listSize = 0; // 列表长度
    this.dataStore = [];
    this.pos = 0; // 指针在列表当前位置

    // 列表元素追加
    this.append = function(element){
        this.dataStore[this.listSize++] = element;
    }
    // 元素查找
    // 其实就是indexOf
    this.find = function(element){
        for(var i=0;i<this.length();++i){
            if(this.dataStore[i] == element){
                return i;
            }
        }
        return -1;
    }

    // remove 指定元素 ,失败返回false
    this.remove = function(element){
        var foundAt = this.find(element);

        if(foundAt > -1){
            --this.listSize;
            return  this.dataStore.slice(foundAt,1);
        }
        return false;
    }

    this.length = function(){
        return this.listSize;
    }

    this.toString =  function(){
        return this.dataStore
    }  

    // 在after后面插入 element
    this.insertAfterOf = function(element, insterNode){
        var insertPos = this.find(element);
        if(insertPos>-1){
            this.dataStore.splice(insertPos+1,0,insertNode);
            this.listSize++;
            return true;
        }
        return false;
    }

    this.clear = function(){
        this.dataStore = [];
        this.dataStore.length = 0;
        this.listSize = this.pos = 0;
    }

    this.contains =  function(element){
        return this.find(element)>0
    }

    this.front = function(){
        this.pos = 0;
    }

    this.end = function(){
        this.pos = this.listSize-1; // length -i = endIndex
    }
    this.prev = function(){
        if(this.pos>0){
            --this.pos;
        }
    }
    this.next = function(){
        if(this.pos<this.length()){
            ++this.pos;
        }
    }
    
    this.currPos = function(){
        return this.pos
    }

    this.moveTo = function(pos){
        this.pos  = pos;
    }

    this.getElement = function(pos){
        return this.dataStore[this.pos];
    }
}



var names = new List();

names.append('小红');
names.append('小王');
names.append('小里');


for(names.front();names.currPos()<names.length();names.next()){
    console.log(names.getElement());
    
}
