var myobj = {};
myobj.func1 = function func1() {

    console.log('this is first function');
}
myobj.func2 = function func2() {

    console.log('this is second function');
}
myobj.val = 5;
module.exports = myobj;