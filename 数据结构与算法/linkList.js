

function  Node(ele){
  this.ele = ele;
  this.next = null;
}

function LList(){
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.findPre = findPre;
  this.remove = remove;
}

function find(ele){
  var currNode= this.head;
  while(currNode.ele != ele){
    currNode = currNode.next;
  }
  return currNode;
}

function insert(nEle,ele){
  var newNode= new Node(nEle);
  var currNode = this.find(ele);

  newNode.next = currNode.next;
  currNode.next = newNode;
}

function display(){
  var currNode = this.head;
  while(currNode.next!==null){
    console.log(currNode.next.ele);
    currNode = currNode.next;
  }
}
// 找到前驱节点
function findPre(ele){
  var currNode = this.head;
  while(currNode.next!==null&&currNode.next.ele!==ele){
    currNode = currNode.next;
  }
  return currNode;
}
function remove(node){
  if(node.ele == "head"||!node)return false;
  var preNode  = this.findPre(node);
  var currNode = preNode.next;
  if(currNode!=null){
    preNode.next = currNode.next;
    currNode.next = null;
  }

}

let test = new LList();
test.insert("first","head");
test.insert("second","first");
test.insert("third","second");
test.display();

console.log("===========");

test.remove("first");
test.display();

console.log("===========");
test.remove("third");
test.display();