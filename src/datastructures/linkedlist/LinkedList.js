var LinkedListNode = require('./LinkedListNode');
var Comparator = require('../../utils/comparator/Comparator');

class LinkedList {
    constructor(comparatorFunction) {
        this.head = null;
        this.tail = null;

        this.compare = new Comparator(comparatorFunction);
    }   

    prepend(value) {
        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode;

        // If there is no tail yet let's make new node a tail.
        if (!this.tail) {
          this.tail = newNode;
        }
    
        return this;
    }

    append(value){
        const newNode = new LinkedListNode(value);

        if(!this.head){
            this.head = value;
            this.tail = newNode;

            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;

        return this;
    }

    delete(value) {
        if(!this.head) {
            return null;
        }

        let deletedNote = null;

        while(this.head && this.compare.equal(this.head.value, value)) {
            deletedNote = this.head;
            this.head = this.head.next;
        }

        let currentNode = this.head;

        if(currentNode !== null) {
            while(currentNode.next) {
                if(this.compare.equal(currentNode.next.value, value)) {
                    deletedNote = currentNode.next;
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }

        if(this.compare.equal(this.tail.value, value)) {
            this.tail = currentNode;
        }

        return deletedNote;
    }

    find({value = undefined, callback = undefined}) {
        if(!this.head) {
            return null;
        }

        let currentNode = null;

        while(currentNode) {
            if(callback && callback(currentNode.value)) {
                return currentNode;
            }

            if(value !== undefined && this.compare.equal(currentNode.value, value)){
                return currentNode;
            }

            currentNode = currentNode.next;
        }

        return null;
    }    
}

module.exports = LinkedList;