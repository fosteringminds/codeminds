var LinkedList = require('../LinkedList');

describe('LinkedList', () => {
    it('should create empty linked list', () => {
        const linkedList = new LinkedList();
        expect(linkedList.toString()).toBe('');
    });
});