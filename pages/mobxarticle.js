/**
 * Created by xiping.wang on 2017/7/18.
 */
import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'
import stylesheet from 'styles/h5article.scss'
import {initStore} from '../store/mobxarticlestore'
import { Provider } from 'mobx-react'
import { inject, observer } from 'mobx-react'


@observer
class H5article extends React.Component{
    // static async getInitialProps(context,req) {
    //     const {id} = context.query
    //     // console.log(`context======${JSON.stringify(context)}`)
    //     // const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    //     // const res = await fetch(`http://127.0.0.1:8888/articledetail/${id}`)
    //     // const show = await res.json()
    //     // console.log(`Fetched show : ${show}`)
    //
    //     // const isServer = !!req
    //     // const store = initStore(isServer, show)
    //     // console.log(`store::::::::${JSON.stringify(store)}`)
    //     // return {shows:store.mobxarticle,isServer}
    //
    //
    //     console.log(id)
    //     const isServer = !!req
    //     const store = initStore(isServer)
    //     store.initstart(id)
    //     console.log(`store.start()========${JSON.stringify(store.initstart(id))}`)
    //     return{ shows: store.initstart(id)}
    // }
    constructor(props,context){
        super(props,context)
        console.log(`props======${JSON.stringify(props)}`)
        this.store = initStore()
        this.store.initstart(2)
        this.store.mobxarticle = props.shows
        console.log(`this.store333=====${JSON.stringify(this.store)}`)
        // this.store.start()
        // console.log(`this.store======${JSON.stringify(this.store)}`)
        this.state={
            shows: this.store.mobxarticle
        }
    }

    render(){
        console.log(`this.props1111111===${JSON.stringify(this.props)}`)
        console.log(this.store.mobxarticle.title)
        return(
            <Provider store={this.store}>
            <Layout title='h5 文章页'>
                {/*{this.props.store}*/}
                <style jsx global>{stylesheet}</style>
                <h1>{this.state.shows.title}</h1>
                <div>{this.state.shows.tags.replace(/,/g,'/')}</div>
                <div dangerouslySetInnerHTML={{__html: this.state.shows.content}}></div>
            </Layout>
            </Provider>
        )
    }
}
// const h5article = (props)=>(
//
// )

H5article.getInitialProps = async (context,req) =>{
    // const {id} = context.query
    // const res = await fetch(`http://127.0.0.1:8888/articledetail/${id}`)
    // const show = await res.json()
    // console.log(`Fetched show : ${show}`)
    // const isServer = !!req
    // const store = initStore(isServer)
    // store.mobxarticle = show.dataMap
    // console.log(`store::::::::${JSON.stringify(store)}`)
    // return {shows:store.mobxarticle,isServer}

    const {id} = context.query
    const isServer = !!req
    const store = await initStore(isServer)
    const shows = await store.initstart(id)
    // console.log('store'+JSON.stringify(store))
    // console.log(`shows=====${JSON.stringify(shows)}`)
    // console.log(`store.initstart()========${JSON.stringify(store.initstart(id))}`)
    // console.log(`store.initstart()========${store.initstart(id).toString()}`)
    return { shows: store.mobxarticle}
}

export default H5article
