function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

/**
 * Gathers all node values in sequential order,
 *
 * @params node: Nodes[]
 * @returns nodes
 */

function gatherNodes(node) {
  let a = []
  while (node) {
    a.push(node.val)
    node = node.next
  }
  return a
}

/**
 * @params [1, 2, 3]
 */

function makeList(nums) {
  let curr = new ListNode(nums[0])
  let head = curr

  for (let i = 1; i < nums.length; i++) {
    curr.next = new ListNode(nums[i])
    curr = curr.next
  }

  return head
}

module.exports = { ListNode, gatherNodes, makeList }
