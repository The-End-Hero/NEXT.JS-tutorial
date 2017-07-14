# NEXT.JS

NEXT.JS是基于react的同构直出脚手架。

- 默认服务端渲染
- 自动代码拆分（页面快速加载）
- 基于页面的简单路由系统
- 开发环境基于WebPACK支持热更换模块（HMR）
- 能够表达或任何其他Node.js HTTP服务器的实现
- 定制您自己的Babel和Webpack的配置

## Link路由API

import Link from 'next/link'

- 基于page的路由系统，只有page目录是特殊的。
- 与react-router不同的是<Link href="/about">
- Link上写样式是无效的，Link本质上是个高阶组件
- Link可以像正常标签一样嵌套内容（比如div，button等）
-  as 可以伪装路由，不影响浏览器前进后退 <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}> 



共享组件

- 头部组件


- 布局组件：
  - 公共样式组件，基于{props.children}
  - 将组件传值进入：export default withLayout(Page)



利用es6模板字符串 写 动态页面 <Link href={`/post?title=${props.title}`}> 

