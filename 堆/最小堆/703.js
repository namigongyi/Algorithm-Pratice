/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.k = k;
    this.heap = new MininHeap();

    for (let i = 0; i < nums.length; i++) {
        this.heap.push(nums[i]);
    }

};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    this.heap.push(val);

    //把最小堆的数量维持在k数量里，因为我们只需要知道K个元素里的最小值。多了就不要了。
    console.log(this.heap.size(),this.k)
    while (this.heap.size() > this.k) {
         this.heap.pop();
    }

    return this.heap.peek();
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

class MininHeap {
    constructor() {
        this.data = [];
    }
    size() {
        return this.data.length;
    }
    //取出堆顶的元素

    peek() {
        return this.size() === 0 ? null : this.data[0];
    }
    swap(a, b) {
        [this.data[a], [this.data[b]]] = [this.data[b], [this.data[a]]];
    }
    comparent(a,b) {
        return a - b;
    }
    //和父节点对比后换位置
    shiftUp(node,i) {
        let index = i;
        while (index > 0) {
            const parentIndex = (index - 1 ) >>> 1;
            const parent = this.data[parentIndex];
            //子节点与父节点对比
            if (this.comparent(node,parent) < 0) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }
    //向堆中插入元素
    //插入到最后一个叶上，然后和自己的父节点对比，如果比它小，则两者调换位置
    push(node) {
        this.data.push(node);
        this.shiftUp(node,this.size() - 1);
    }
    //从堆顶向下调整
    shiftDown(i) {
        let index = i;
        const half = this.size() >>> 1;
        //因为最小堆比较只走左边或者右边。
        while (index < half) {
            let leftIndex = (index + 1) * 2 - 1;
            let rightIndex = leftIndex + 1;
            if (this.data[leftIndex] < this.data[index]) {
                //要判断有没有right这个节点，有可能只有left这个节点
                if (rightIndex < this.size() && this.data[rightIndex] < this.data[leftIndex]) {
                    this.swap(rightIndex, index);
                    index = rightIndex;
                } else {
                    this.swap(leftIndex, index);
                    index = leftIndex;
                }
            } else if (rightIndex < this.size() && this.data[rightIndex] < this.data[index]) {
                this.swap(rightIndex, index);
                index = rightIndex;
            } else {
                break;
            }
        }
        // console.log(this.data)
    }
    //删除堆顶元素
    //先记录第一个的值，然后把最后一个元素拿上来，从上向往下调整。
    pop() {
        if (this.size() === 0) {
            return null;
        }
        const first = this.data[0];
        const last = this.data.pop();
        if (this.size() !== 0) {
            this.data[0] = last;
            this.shiftDown(0);
        } 
        // console.log(this.data)
    }
}


const  kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3);   // return 4
kthLargest.add(5);   // return 5
kthLargest.add(10);  // return 5
kthLargest.add(9);   // return 8
kthLargest.add(4);   // return 8
