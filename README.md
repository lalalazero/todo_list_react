## 仿奇妙清单应用

[点我预览](https://lalalazero.top/todo) (服务器是香港节点，为了不想备案...如果慢请等等...)

![图片](https://lalalazero.top/images/todo.jpeg)

### 功能介绍
1. 支持用户的登陆、注册、不退出关闭窗口后自动登陆
2. 自定义清单的增删改查和切换，显示不同的 todo 事项
3. 星标和今天智能清单，查找所有符合条件的待办事项
4. 原生日期选择器


### 技术栈
1. React + Redux + React-redux + Redux-thunk + React hashRouter 
2. async + await 语法
3. sass 预处理
4. 后端是 java + mysql

### 项目复盘

从最开始通过 props 进行组件间的通信，到引入 redux 管理状态，中间经历一个撕裂的过程。因为最开始已经用 props + 生命周期控制把基本所有功能都做好了，后来引入 react-router 的时候发现坑太多，代码极其丑陋。于是推翻了重来，遂有这个 todo_list_v2。

todo_list_v2 是从引入 redux 状态管理开始的，踩了无数坑后发现 redux 只能支持同步更新 store，遂引入 redux middle-ware，在 redux-promise 和 redux-thunk、redux-saga 之间选了 redux-thunk，结合 async/await 语法，支持异步操作了。

最后添加 react-router 的时候，一开始选择的是 browserRouter，本地开发妥妥的，部署到 nginx 服务器上之后，又坑了。到这一步终于亲身体会到 hashRouter 和 browserRouter 的区别。当路由在前台控制的时候，不管是 hashRouter 还是 browserRouter 都没有问题，可是刷新或者在浏览器直接键入 url 地址的时候，对于 hashRouter 会把 /# 以后的都丢掉，因此服务器不需要额外配置，只需要处理 /todo 渲染前端首页就可以了，但是对于 browserRouter, 完整的请求地址都会到服务器，因此服务器需要配置比如 `/todo/login` `/todo/signup` 这样的请求，怎么响应回去。参见 [stackoverflow](https://stackoverflow.com/questions/43951720/react-router-and-nginx) 对于该问题的回答，有一种方案是用 `nodejs` 渲染，我现在还不会。因此我选择简单的方式 `hashRouter`。

### 总结

从 0 到 1 完整的写完了一个 react 项目，该有的东西都有了。`redux` `redux-thunk` `react-router` `sass`，也没有用到成熟的 UI 组件（比如 ant-design)，都是自己找的 icon 放上去，其中还自己手写了一个日期选择器。 存在的问题是，耗时太长了，回顾我主要犯了这样几个错误：
1. 不该想着先一股脑的用 props 把功能都写完，然后再引进 redux，导致代码后续修改起来特别烦人。于是推翻了重写。
2. container 和 component 的组件划分还要再多琢磨琢磨。
3. 关于 webpack 的配置了解的不深，应该要补一些起来。比如图片和 css 的全局样式都应该可以用 webpack 做到，还有代理请求等。

### 没有完成的计划

1. 还想把搜索和排序加上的...
2. 还想做手机端的...
3. 还想做修改头像来着...
