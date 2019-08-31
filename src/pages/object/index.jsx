import React from 'react';
const getSum = function (sign) {
  if (sign === 'a') {
    return (function () {
      let sum = 0;
      for (let i = 0; i < 1000000; i++) {
        sum += i
      }
      return sum
    })()
  } else if (sign === 'b') {
    return (function () {
      let sum = 0;
      for (let i = 0; i < 10000000000; i++) {
        sum += i
      }
      return sum
    })()
  }
}
function Obj() {
  return <div>{getSum('b')}</div>
}

export default Obj;