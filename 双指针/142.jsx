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

// 快指针路程 f = 2s
// 快指针路程 f = s + nb (b是环,n是指倍数,nb是走过多少倍的环,s是慢指针走过的长度)
//从head走到环口是a
//如何求到这个a
//因为 f = s + nb
//  a = nb为什么呢
var detectCycle = function (head) {
  if (head === null && head.next === null) {
    return null;
  }
  let slow = head;
  let fast = head;
  while (fast) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      fast = head;
      while (fast) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
          return slow;
        }
      }
    }
  }
  return null;
};
