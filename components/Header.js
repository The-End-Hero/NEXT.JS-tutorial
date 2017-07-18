import Link from 'next/link'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.onRouteChangeStart = (url) =>{
    console.log(`loading:${url}`)
    NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <Link href="/h5">
            <a style={linkStyle}>h5</a>
        </Link>
        <Link href="/mobx">
            <a style={linkStyle}>mobx</a>
        </Link>
        <Link href="/mobxarticle">
            <a style={linkStyle}>mobxarticle</a>
        </Link>
    </div>
)

export default Header
