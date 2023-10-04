/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let Cycle = new Set();
  let current = head;
  while (current) {
    //不能放 current.val 因为val有可能相同,但是放current就没问题,因为放的是内存地址
    if (Cycle.has(current)) {
      return true;
    }
    Cycle.add(current);
    current = current.next;
  }
  return false;
};
