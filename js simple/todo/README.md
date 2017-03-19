## TODOMVC
### 项目介绍
vue.js实现的[todomvc](http://todomvc.com/)添加了本地存储的功能
之前有用jQuery实现过一个没有存储的版本点击链接查看：[todo](https://jeane-zz.github.io/hang/js%20simple/todomvc.html)

### 项目地址
[TODOMVC](https://jeane-zz.github.io/hang/js%20simple/todo/todo.html)

### 使用说明
1. 支持回车添加事件
2. 支持事件状态切换
    1. 添加事件
    2. 完成事件
    3. 删除已完成事件
    4. 编辑事件
    5. 查看不同状态的事件
3. 支持本地存储

### 错误处理

>计划中：
1. 空事件提示

### 界面
对页面缩放做了简单响应 

>计划：
支持页面换肤

### 实现难点
1. 状态切换
    对不同事件添加了不同的class，在点击按钮时完成筛选 
2. 本地存储
    利用window.localStorage,逐步解决存与取的问题
3. vue.js模式和普通模式的切换
    
4. 
