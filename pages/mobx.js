/**
 * Created by xiping.wang on 2017/7/17.
 */
import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { Provider } from 'mobx-react'
import { initStore } from '../store/mobxstore'
import { observer } from 'mobx-react'

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
@observer
class Index extends React.Component{
    // static getInitialProps({req}){
    //     let result ;
    //     const isServer = !!req
    //     let store = null
    //         fetch('http://127.0.0.1:8888/123')
    //         .then( r => r.json() )
    //         .then( data => {
    //             console.log(data);
    //             result = data
    //             console.log(`result: ${result}`)
    //             store = initStore(isServer, result)
    //             console.log(`store: ${JSON.stringify(store)}`)
    //         });
    //     return { shows: store.result, isServer }
    // }

    constructor(props,context){
        super(props, context)
        // console.log('props:'+JSON.stringify(props))
        this.store = initStore(props.isServer, props.shows)
        // console.log(`this.store: ${JSON.stringify(this.store)}`)
        this.state={
            shows: this.store.mobx
        }
    }
    changestore(){
        // alert(132)
        this.store.start()
        console.log(this.store.mobx[0].recommendationData.id)
    }
    render(){
        let innerbox=[]
        if(!!this.state.shows){
            for(let i=0;i<this.state.shows.length; i++ ){
                innerbox.push(
                    <li key={this.state.shows[i].recommendationData.id}>
                        <Link as={`/T/${this.state.shows[i].recommendationData.id}`} href={`/h5article?id=${this.state.shows[i].recommendationData.id}`}>
                            {content(this.state.shows[i].recommendationData)}
                        </Link>
                    </li>
                )
            }
        }

        return(
        <Provider store={this.store}>
            <Layout title='Mobx 主页'>
                <ul>
                    <div onClick={this.changestore.bind(this)}>{this.store.mobx[0].recommendationData.id}</div>
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
    const isServer = !!req
    console.log(`Show data fetched. 123123: ${JSON.stringify(data)}`)
    const store = initStore(isServer, data.dataMap)
    console.log(`store: ${JSON.stringify(store)}`)
    return{
     shows: store.mobx, isServer
    }
}
export default Index

