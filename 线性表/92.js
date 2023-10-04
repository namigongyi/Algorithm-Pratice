/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
//  */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let pre = (node = { next: head });
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next; //1 头节点
  }
  //3 -> 4
  //4 -> 2
  //2 -> 3
  let cur = pre.next; // 2
  for (let i = 0; i < right - left; i++) {
    const next = cur.next;
    cur.next = next.next; //3 -> 4
    next.next = pre.next; //4->2
    pre.next = next;
  }
  return node.next;
};
// 不是很懂  第二个for循环的含义