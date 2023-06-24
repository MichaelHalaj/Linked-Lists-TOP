class Node {
    value;
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }

    get value() {
        return this.value;
    }

    set setValue(val) {
        this.value = val;
    }
}
export default Node;