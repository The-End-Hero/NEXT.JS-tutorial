/**
 * Created by xiping.wang on 2017/7/17.
 */
import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { Provider } from 'mobx-react'
import  {initStore} from '../store/IndexStore'
import  {Mobx as mobxaction} from '../store/Mobx'
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
    constructor(props,context){
        super(props, context)
        console.log('props:'+JSON.stringify(props))
        this.store = initStore()
        this.store.mobx = props.shows
        console.log(`this.store.mobx: ${JSON.stringify(this.store.mobx)}`)
        this.state={
            shows: this.store.mobx
        }
    }
    changestore(){
        // alert(132)
        // this.store.start()
        // console.log(this.store.mobx[0].recommendationData.id)
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
    // const res = await fetch('http://127.0.0.1:8888/123')
    // const data = await res.json()
    const isServer = !!req
    // console.log(`Show data fetched. 123123: ${JSON.stringify(data)}`)
    const store = initStore()
    console.log(`store: ${JSON.stringify(store)}`)
    console.log(456)
    store.mobx = await new mobxaction().initmobx()
    console.log(`store=======${JSON.stringify(store)}`)
    const shows = store.mobx
    console.log(`shows=======${JSON.stringify(shows)}`)
    return{
     shows: shows, isServer
    }
}
export default Index

