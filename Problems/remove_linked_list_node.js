function removeKthLinkedListNode(head, k) {
  // initialize linkedList array and set the currentNode to be the head
  const linkedList = [];
  let currentNode = head;

  // add first node of linked list to the linkedList array
  // add the rest of the nodes to the linkedList array and move the currentNode up by one
  while (currentNode.next !== null) {
    linkedList.push(currentNode);
    currentNode = currentNode.next;
  }

  // if k is longer than the linked list, just return the linked list
  if (k > linkedList.length) {
    return;
  }
  // find the node BEFORE the node we want to remove so we can redirect its pointer to the node AFTER
//   if (
//     linkedList.length - k - 1 >= 0 &&
//     linkedList.length - k + 1 < linkedList.length
//   ) {
//     linkedList[linkedList.length - k - 1].next =
//       linkedList[linkedList.length - k + 1];
//     return linkedList[0];
//   }

  if (linkedList.length - k - 1 < 0) {
    return linkedList.length <= 1 ? [] : list[1];
  }

  if (linkedList.length - k + 1 >= linkedList.length) {
    linkedList[list.length - k - 1].next = null;
    return linkedList[0];
  }
}
