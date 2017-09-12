import Header from './Header'
import Head from 'next/head'// 自定义head seo之中非常重要
import Leftnav from './Leftnav'
// import { inject, observer } from 'mobx-react'
import base from 'styles/base.scss'
// const layoutStyle = {
//   margin: 20,
//   padding: 20,
//   border: '1px solid #DDD'
// }

class Layout extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount () {
    }
    render(){
        return(
            <div id="app">
                <Head>
                    <title>{ this.props.title }</title>
                    <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
                    <style jsx global>{base}</style>
                    {/*<link rel='stylesheet' type='text/css' href='https://cdn.bootcss.com/meyer-reset/2.0/reset.min.css'/>*/}
                    <link rel="stylesheet" type='text/css'  href="/static/reset.css"/>
                    <meta charSet='utf-8' />
                    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                </Head>
                <Leftnav />
                <div className="rightnav">
                    <Header />
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout
