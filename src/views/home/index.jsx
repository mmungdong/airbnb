import React, { memo, useState, useEffect } from 'react';

import mdRequest from '@/services';

const Home = memo(() => {

  // 定义状态
  const [ highscore, setHighScore ] = useState({})

  // 网络请求的代码
  useEffect(() => {
    mdRequest.get({
      url: '/home/highscore'
    }).then(res => {
      console.log(res)
      setHighScore(res)

    })
  }, [])


  return (
    <div>
      {/* 逻辑判断这里使用可选列进行省略 */}
      <h2>{highscore?.title}</h2>
      <h4>{highscore?.subtitle}</h4>
      <ul>
        {
          highscore?.list?.map((item) => {
            return <li key={item.id}>
              {item.name}
            </li>
          })

        }
      </ul>
    </div>

  );
});

export default Home;