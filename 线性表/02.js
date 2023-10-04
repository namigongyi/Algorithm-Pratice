/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  //[1,2,3] [4,5,6]
  let current1 = l1,
    current2 = l2;
  let tem = 0;
  let res = (cur = { next: null });
  while (current1 !== null || current2 !== null) {
    let sum = 0;
    //不断汇总
    if (current1 && current1?.val) {
      sum += current1.val;
    }
    if (current2 && current2?.val) {
      sum += current2.val;
    }
    sum += tem;
    tem = Math.floor(sum / 10); //进位要加上我
    //求余，超过10的话自动得到剩下的数
    cur.next = {
      val: sum % 10,
      next: null,
    };
    //链表链上
    cur = cur.next;
    if (current1) {
      current1 = current1.next;
    }
    if (current2) {
      current2 = current2.next;
    }
    if (tem != 0) {
      cur.next = {
        val: tem,
        next: null,
      };
    }
  }
    return res.next;
};
