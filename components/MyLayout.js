import Header from './Header'
import Head from 'next/head'// 自定义head seo之中非常重要

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = ({children,title='default'}) => (
  <div style={layoutStyle}>
      <Head>
          <title>{ title }</title>
          <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
    <Header />
    {children}
  </div>
)

export default Layout
