'use strict';
function* next_id() {

yield x;
x++;
return x;
}

// 测试:
var
    x,
    pass = true,
    g = next_id();
for (x = 1; x < 100; x ++) {
  var t = g.next().value;
    if (t !== x) {
        pass = false;
        console.log('测试失败!');
        break;
    }
}
if (pass) {
    console.log('测试通过!');
}
