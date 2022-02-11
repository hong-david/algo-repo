function TreeNode(val) {
  this.val = val === undefined ? 0 : val
  this.left = null
  this.right = null
}

/**
 * Construct binary tree from array, recursive DFS
 *
 * pass in arr, root=null and i=0 are optional
 */

function insertOrder(arr, root = null, i = 0) {
  if (arr[i] === null) return null
  if (i < arr.length) {
    let temp = new TreeNode(arr[i])
    root = temp
    root.left = insertOrder(arr, root.left, 2 * i + 1)
    root.right = insertOrder(arr, root.right, 2 * i + 2)
  }
  return root
}

/**
 * @param {TreeNode | null} root - return null
 * @returns number[] Index of root values 
 */

function dfsNodes(root) {
  if (!root) return null
  let arr = []
  const q = [root]
  while (q.length) {
    let curr = q.shift()
    arr.push(curr.val)
    if (curr.left) q.push(curr.left)
    if (curr.right) q.push(curr.right)
  }

  return arr
}

module.exports = { TreeNode, insertOrder, dfsNodes }
