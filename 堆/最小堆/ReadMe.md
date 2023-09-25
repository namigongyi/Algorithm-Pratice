### 子节点找父节点

parentIndex = childIndex - 1 >> 1;

### 父节点找子节点

 leftIndex = (parentIndex + 1 )*2 -1;
 rightIndex = leftIndex +1;