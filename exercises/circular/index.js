// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {


  let nodeSlow = list.getFirst(); // First Node
  let nodeFast = list.getFirst(); // Second Node (goes double times)

  while(nodeFast.next && nodeFast.next.next){
    nodeSlow = nodeSlow.next;
    nodeFast = nodeFast.next.next;
    if(nodeSlow == nodeFast){
      return true;
    }
  }
  return false;


}

module.exports = circular;
