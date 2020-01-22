var LinkedList = require('./LinkedList')

var o1 = { value: 'test1' };
var o2 = { value: 'test2' };
var o3 = { value: 'test3'};
var o4 = { value: 'test4'};
var o5 = { value: 'test5'};
var o6 = { value: 'test6'};
var o7 = { value: 'test7'};

var list = new LinkedList();

list.prepend(o1);
list.prepend(o2);
list.prepend(o3);
list.prepend(o4);
list.prepend(o5);
list.prepend(o6);
list.prepend(o7);

console.log(list);