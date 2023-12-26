/*
 * @Author: 张鑫鑫 xinxin.zhang@ersoft.cn
 * @Date: 2023-08-25 11:58:37
 * @LastEditors: 张鑫鑫 xinxin.zhang@ersoft.cn
 * @LastEditTime: 2023-08-25 16:44:52
 * @FilePath: /my-map/src/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { Routes, Route } from 'react-router-dom';
import Jiangqiao from './components/jiangqiao/index';

const App = () => {
  return (
    <Routes>
      <Route index element={<Jiangqiao/>} />
      <Route path='/jiangqiao' element={<Jiangqiao/>} />
    </Routes>
  );
};

export default App;
