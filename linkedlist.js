import Node from './node.js';
class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
        this.tail = null;  
    }

    append(value) {
        let node = new Node(value);
        if (this.size <= 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = this.tail.next;
        }
        this.size += 1;
    }

    prepend(value) {
        let node = new Node(value);
        if (this.size <= 0 ) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size += 1;
    }

    at(index) {
        let node = this.head;
        let i = 0;
        while(node != null) {
            if(i === index) {
                return node;
            }
            node = node.next;
            i++;
        }
        return -1;
    }

    pop() {
        let node = this.head;
        while(node != null && node.next != this.tail) {
            node = node.next;
        }
        if (node != null) {
            node.next = null;
        } else {
            this.head = null;
        }
        this.tail = node;
        this.size = this.size === 0 ? 0 : this.size - 1;
    }

    contains(value) {
        return this.find(value) != null;
    }

    find(value) {
        let node = this.head;
        let index = 0;
        while(node != null) {
            if(node.value === value) {
                return index;
            }
            index += 1;
            node = node.next;
        }
        return null;
    }

    toString() {
        let result = '';
        let node = this.head; 
        while(node != null) {
            result += `(${node.value}) -> `
            node = node.next;
        }
        result += 'null';
        return result;
    }

    head(){
        return this.head;
    }

    tail(){
        return this.tail;
    }
    
    size() {
        return this.size;
    }
}
export default LinkedList;