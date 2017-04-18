// 使用es2015的模块定义和渲染greeter 模块
import React from 'react'
import {render} from 'react-dom'
import Greeter from './Greeter'

import './main.css'

render(<Greeter />, document.getElementById('root'))




/*

// 将greeter模块返回的节点插入到页面中
var greeter = require('./Greeter.js')
document.querySelector('#root').appendChild(greeter())

*/