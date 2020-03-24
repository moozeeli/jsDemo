
function ListNode(val,next) {
    this.val = val;
    this.next = next||null;
}
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let arr = [];
    let current  = head;
    arr.push(current);
    while(current.next!==null){
        current  = current.next;
    }
    let middleNodeIndex = Math.ceil((arr.length+1)/2);
    return arr[middleNodeIndex];
};

let head = new ListNode(1,new ListNode(2,new ListNode(3,new ListNode(4,new ListNode(5)))));

middleNode(head);