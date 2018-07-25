var test = require('tape');

test('this test has a name', function(t) {
  t.equal(1+1, 2);
  t.equal(1+2, 3);
  t.end();
});