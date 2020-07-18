import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import 'antd/dist/antd.css'
import 'zent/css/index.css';
// import { Router, Route, HashRouter } from 'react-router';
import zhCN from 'antd/es/locale/zh_CN';
// import enUS from 'antd/es/locale/en_US';

import { ConfigProvider } from 'antd';
const Internation = (
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
)
ReactDOM.render(Internation, document.getElementById('root'));