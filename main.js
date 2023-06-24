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
console.log('Size:' + ll.size);
console.log(ll.find(6));
console.log(ll.find(3))
console.log(ll.contains(1));
console.log(ll.contains(56));
console.log(ll.at(3));

ll.append(45);
console.log(ll.toString());

ll.pop();
ll.pop();
ll.pop();
ll.pop();
console.log(ll.toString());
console.log(ll.tail);
console.log(ll.head);
ll.pop();
console.log(ll.toString());
ll.pop();
ll.prepend(23);
console.log(ll.toString());
ll.prepend(90);
console.log(ll.toString());
console.log('Size: ' + ll.size);
console.log(ll.find(23));
console.log(ll.find(45));
console.log(ll.at(5));
console.log(ll.at(1));
for( let i = 0; i < 100; i++) {
    ll.append(i);
}
console.log(ll.toString());