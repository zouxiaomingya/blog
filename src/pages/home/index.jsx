import React, { useEffect, useState } from 'react';
import { Button } from 'zent';

function checkTime(i) {
  if (i <= 10) {
    i = "0" + i;
  }
  return i;
}

// 7天后
const timeOver = 1599759357313 + 365 * 24 * 60 * 60 * 1000

function Home() {
  const [time, setTime] = useState(0)
  useEffect(() => {
    var tiemr = setInterval(() => {
      // 现在时间
      const date = new Date().getTime()
      var ts = timeOver - date
      var dd = parseInt(ts / 1000 / 60 / 60 / 24, 10);//计算剩余的天数
      var hh = parseInt(ts / 1000 / 60 / 60 % 24, 10);//计算剩余的小时数
      var mm = parseInt(ts / 1000 / 60 % 60, 10);//计算剩余的分钟数
      var ss = parseInt(ts / 1000 % 60, 10);//计算剩余的秒数
      var ms = parseInt(ts % 1000, 10);//计算剩余的ms数
      setTime(`${dd}天${hh}小时${mm}分钟${ss}`)
    }, 1000 / 60)

    return () => {
      clearInterval(tiemr)
    }
  }, [])
  return (
    <Button>{time}</Button>
  )
}
export default Home;