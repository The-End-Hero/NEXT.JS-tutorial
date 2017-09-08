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
- Link可以像正常标签一样嵌套内容（比如div，button等）,但是只能嵌套一层，可理解为内部需要抽象成一个组件。
- as 可以伪装路由，不影响浏览器前进后退 <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}> 



共享组件

- 头部组件


- 布局组件：
  - 公共样式组件，基于{props.children}
  - 将组件传值进入：export default withLayout(Page)


利用es6模板字符串 写 动态页面 <Link href={`/post?title=${props.title}`}> 



#### 所有页面嵌套在layout组件中，方便自定义head的书写

#### 本项目中集成了**有作用域**的scss

store是状态管理，localstorage是数据存储。

在绝大多数情况下，所谓顶层store几乎是纯展示作用。尤其是需要SEO的服务端渲染页面中，更加是这样。

本项目集成了mobx，利用和vue同样的object.defineproperty这个ES5的API对对象进行数据劫持，当然，你可以选择不引用他，不会影响到页面同构直出，如果选择使用，在页面getInitialProps和constructor中需要new两次store，还是因为同构直出中constructor代码会执行两次，并且next.js中的getInitialProps只会执行一次。

介于vue中使用object.defineproperty导致属性监听失败的坑（监听是注册的时候对属性批量使用Object.defineProperty方法实现的，所以后添加的属性不会监听），对mobx会不会遇到持怀疑态度。

#### env-config.js根据开发环境不同设置生成不同的变量等。（废弃）
- 使用更好的方案env.js根据写入环境判断



### 使用git子模块管理

具体参考:https://github.com/The-End-Hero/common

