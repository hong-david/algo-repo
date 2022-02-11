const { ListNode, makeList, gatherNodes } = require('./')

const l1 = makeList([1])
const l2 = makeList([1, 2])
const l3 = makeList([1, 2, 3])
const l4 = makeList([1, 2, 3, 4])

// Example function, normally you want to export the function elsewhere
function getMid(head) {
  let l = head,
    r = head.next

  while (r && r.next) {
    l = l.next
    r = r.next.next
  }

  return l
}

test('makeList and gatherNodes example', () => {
  const l1 = makeList([1, 2, 3, 4, 5])
  expect(gatherNodes(l1)).toEqual([1, 2, 3, 4, 5])
})


test('getMid', () => {
  const m1 = getMid(l1)
  const m2 = getMid(l2)
  const m3 = getMid(l3)
  const m4 = getMid(l4)

  expect(m1.val).toBe(1)
  expect(m2.val).toBe(1)
  expect(m3.val).toBe(2)
  expect(m4.val).toBe(2)
})
