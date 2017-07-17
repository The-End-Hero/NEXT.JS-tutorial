/**
 * Created by xiping.wang on 2017/7/17.
 */
import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { Provider } from 'mobx-react'
import { initStore } from '../store'

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
    static getInitialProps({req}){

        const isServer = !!req
        const store = initStore(isServer)
        return { shows: store.result, isServer }
    }

    constructor(props,context){
        super(props, context)
        console.log('shows:'+JSON.stringify(props))

        this.store = initStore(props.isServer, props.result)
        this.state={
            shows: this.store.result
        }

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
                    {innerbox}
                </ul>
            </Layout>
        </Provider>
        );
    }
}
export default Index

