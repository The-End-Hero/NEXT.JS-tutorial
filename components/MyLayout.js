import Header from './Header'
import Head from 'next/head'// 自定义head seo之中非常重要
// import { inject, observer } from 'mobx-react'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

class Layout extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount () {
    }
    render(){
        return(
            <div style={layoutStyle}>
                <Head>
                    <title>{ this.props.title }</title>
                    <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
                    <link rel='stylesheet' type='text/css' href='https://cdn.bootcss.com/meyer-reset/2.0/reset.min.css'/>
                    <meta charSet='utf-8' />
                    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                </Head>
                <Header />
                {this.props.children}
            </div>
        )
    }
}

export default Layout
