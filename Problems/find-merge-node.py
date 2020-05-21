

#Given pointers to the head nodes of linked lists that merge together at some point, 
# find the Node where the two lists merge. It is guaranteed that the two head Nodes 
# will be different, and neither will be NULL.

def findMergeNode(head1, head2):
    # the data on the linked list nodes might not be unique
    # we can;t reply on just checking the data in each node, because two nodes might have the same data
    # the actual data on the merge point node is what we're going to return

    # we can use a set to keep track of nodes we've visited
    # traverse one of the lists, adding each node we've visited to the visited set
    # traverse the other list, checking to see if each node is in the set
    # why a set? they are good at noting what we've seen already. They hold only unique items
    # linked lists kept track of the order of elements for us, so the set doesn't have to


    curr = head1
    s = set()

    while curr:
        s.add(curr)
        curr = curr.next

    curr = head2
    while curr:
        if curr in s:
            return curr.data
        curr = curr.next
    # curr = head1
    # while curr:
    #     curr.visited = True
    #     curr = curr.next
    # curr = head2

    # while curr:
    #     if hasattr(curr, 'visited'):
    #         return curr.data
    #     curr = curr.next