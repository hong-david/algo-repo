function reverseList(head) {
  let [pre, cur] = [null, head]
  // while (cur) {
  //   ;[cur.next, pre, cur] = [pre, cur, cur.next]
  // }
  return pre
}

module.exports = { reverseList }
