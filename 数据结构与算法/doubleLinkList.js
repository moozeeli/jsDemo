function  Node(ele){
    this.ele = ele;
    this.prev = null;
    this.next = null;
}

function LList(){
    this.head = new Node('head');
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.remove = remove;
    this.displayReverse = displayReverse; //反序列
    this.findLast = findLast;
}
function find(ele){
    var currNode = this.head;
    while(currNode.next!==null&&currNode.ele!==ele){
        currNode = currNode.next;
    }
    return currNode;
}
function insert(newEle,ele){
    let newNode = new Node(newEle);
    let currNode = this.find(ele);

    //  这里有点绕
    newNode.next = currNode.next;
    newNode.prev = currNode;
    currNode.next = newNode;
    if(newNode.next!=null){
        newNode.next.prev = newNode;

    }
}

function display(){
    var currNode = this.head;
    while(currNode.next!==null){
        console.log(currNode.next.ele);
        currNode = currNode.next;
    }
}

function remove(ele){
    let currNode = this.find(ele);
    if(currNode.next!==null){ //不是尾节点
        currNode.prev.next = currNode.next;
        currNode.next.prev = currNode.prev;
        currNode.next = null; // 防止 内存泄漏
        currNode.prev =null;
    }else{ // 尾节点
        currNode.prev.next = null;
        currNode.prev= null;
    }
}
function findLast(){    
    var currNode = this.head;
    while(currNode.next!==null){
        currNode = currNode.next;
    }
    return currNode;
}
function displayReverse(){
    let currNode = this.findLast();
    while(currNode.ele!='head'){
        console.log(currNode.ele);
        currNode = currNode.prev;
    }
}


let test = new LList();
test.insert('first','head');
test.insert('second','first');
test.insert('third','second');
test.display();


console.log('===========');

test.remove('first');
test.display();

console.log('===========');
test.remove('third');
test.display();
console.log('======重新添加节点=====');
test.insert('first','head');
test.insert('third','second');
test.insert('four','third');
test.insert('five','four');
test.display();
console.log('======反序输出=====');
test.displayReverse();
