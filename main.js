import LinkedList from './linkedlist.js';

let ll = new LinkedList();

ll.append(4);
ll.append(5);
ll.pop();
ll.prepend(1);
ll.prepend(6);
ll.append(34)


console.log(ll.toString());
console.log(ll.tail);
console.log(ll.size);
console.log(ll.find(6));
console.log(ll.find(3))
console.log(ll.contains(1));
console.log(ll.contains(56));
console.log(ll.at(3));