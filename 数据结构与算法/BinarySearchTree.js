function BinarySearchTree(){
    var Node = function(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }

    var root = null;

    var insertNode = function(node, newNode){
        if(newNode.key < node.key){
            if(node.left === null){
                node.left = newNode;
            }else{
                insertNode(node.left,newNode)
            }
        }else{
            if(node.right === null){
                node.right = newNode
            }else{
                insertNode(node.right,newNode);
            }
        }
    }

    this.insert = function(key){
        var newNode = new Node(key);
        if(root ===null){
            root = newNode;
        }else{
            insertNode(root,newNode);
        }
    }

    // 便利

    var inOrderTraverseNode = function(node,callback){
        if(node !== null){
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right,callback);
        }
    }
    var perOrderTraverseNode = function(node,callback){
        if(node !== null){
            callback(node.key);
            perOrderTraverseNode(node.left, callback);
            perOrderTraverseNode(node.right, callback)
        }
    }
    var postOrderTraverseNode = function(node,callback){
        if(node != null){
            postOrderTraverseNode(node.left, callback);
            postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }

    this.postOrderTraverse = function(callback){
        postOrderTraverseNode(root, callback)
    }

    this.perOrderTraverse = function(callback){
        perOrderTraverseNode(root, callback)
    }

    this.inOrderTraverse = function(callback){
        inOrderTraverseNode(root, callback);
    };

    var minNode = function (node){
        if(node){
            while(node && node.left !== null){
                node = node .left
            }
            return node.key;
        }
        return null;
    }
    var maxNode = function(node){
        if(node){
            while(node&&node.right!=null){
                node = node.right;
            }
            return node.key;
        }
        return null;
    }

    this.min = function(){
        return minNode(root)
    }

    this.max = function(){
        return maxNode(root)
    }

    


}

var tree = new BinarySearchTree(); 
tree.insert(11);
tree.insert(7); 
tree.insert(15); 
tree.insert(5); 
tree.insert(3);
tree.insert(9); 
tree.insert(8); 
tree.insert(10); 
tree.insert(13); 
tree.insert(12); 
tree.insert(14); 
tree.insert(20); 
tree.insert(18); 
tree.insert(25);
tree.insert(6);

function printNode(value){ //{6} 
 console.log(value); 
} 
tree.inOrderTraverse(printNode); //{7}
console.log('***********');
tree.perOrderTraverse(printNode);
console.log('***********');
tree.postOrderTraverse(printNode);

console.log('***********');
console.log(tree.min());