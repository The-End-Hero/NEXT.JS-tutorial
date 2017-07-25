/**
 * Created by xiping.wang on 2017/7/17.
 */
import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { Provider } from 'mobx-react'
import LazyLoad  from 'react-lazyload';
import stylesheet from 'styles/mobx.scss'
import Place from '../components/placeholder'
const content = (props)=>{
    console.log(`content props: ${props}`)
    return (
        <div>
            <img src={props.coverImgUrl} alt=""/>
            <p>{props.title}</p>
            <p>{props.tags.replace(/,/g,'/')}</p>
        </div>
    )
}

class Index extends React.Component{
    constructor(props,context){
        super(props, context)
        // console.log('props:'+JSON.stringify(props))
        // this.store = initStore()
        // this.store.mobx = props.shows
        // console.log(`this.store.mobx: ${JSON.stringify(this.store.mobx)}`)
        this.state={
            shows: props.shows.dataMap
        }
        console.log(`this.state:${JSON.stringify(this.state)}`)
    }
    changestore(){
        // alert(132)
        // this.store.start()
        // console.log(this.store.mobx[0].recommendationData.id)
    }
    touchmove(){

    }
    render(){
        let innerbox=[]
        if(!!this.state.shows){
            for(let i=0;i<this.state.shows.length; i++ ){
                innerbox.push(
                    <li key={this.state.shows[i].recommendationData.id}>
                        <Link as={`/T/${this.state.shows[i].recommendationData.id}`} href={`/h5article?id=${this.state.shows[i].recommendationData.id}`}>
                            <LazyLoad once={true} placeholder={<Place/>} offset={[-200, 0]} debounce={500}>
                                {content(this.state.shows[i].recommendationData)}
                            </LazyLoad >
                        </Link>
                    </li>
                )
            }
        }

        return(
        <Provider store={this.store}>
            <Layout title='Mobx 主页'>
                <style jsx global>{stylesheet}</style>
                <ul onTouchMove={this.touchmove.bind(this)}>
                    {/*<div onClick={this.changestore.bind(this)}>{this.store.mobx[0].recommendationData.id}</div>*/}
                    {innerbox}
                </ul>
            </Layout>
        </Provider>
        );
    }
}
Index.getInitialProps = async function ({req}) {
    console.log(123)
    // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const res = await fetch('http://127.0.0.1:8888/123')
    const data = await res.json()
    // const isServer = !!req
    // console.log(`Show data fetched. 123123: ${JSON.stringify(data)}`)
    // const store = initStore()
    // console.log(`store: ${JSON.stringify(store)}`)
    // console.log(456)
    // store.mobx = await new mobxaction().initmobx()
    // await new mobxaction().rrrr()
    // console.log(`store=======${JSON.stringify(store)}`)
    // const shows = store.mobx
    // console.log(`shows=======${JSON.stringify(shows)}`)
    return{shows: data}
}
export default Index

